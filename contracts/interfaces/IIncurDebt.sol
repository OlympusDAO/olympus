// SPDX-License-Identifier: AGPL-3.0
pragma solidity >=0.8.4;

/// @notice simplified IncurDebt to work as a Tokemak controller
/// @dev this contract must be given OHMDEBTOR on the treasury
interface IIncurDebt {
    /* ========== TOKEMAK FUNCTIONS ========== */

    /**
     * @notice deposits gOHM to use as collateral
     * - msg.sender must be a borrower
     * - this contract must have been approved _amount
     * @param _amount amount of gOHM
     */
    function deposit(uint256 _amount) external;

    /**
     * @notice allow borrowers to borrow OHM
     * - msg.sender must be a borrower
     * - _ohmAmount must be less than or equal to borrowers debt limit
     * - _ohmAmount must be less than or equal to borrowers available loan limit
     * @param _ohmAmount amount of OHM to borrow
     */
    function borrow(uint256 _ohmAmount) external;

    /**
     * @notice withdraws gOHM
     * - msg.sender must be a borrower
     * - _amount (in OHM) must be less than or equal to depositedOhm - debt
     * @param _amount amount of gOHM/sOHM to withdraw
     */
    function withdraw(uint256 _amount) external;

    /**
     * @notice Creates an LP position by borrowing OHM
     * - msg.sender must be whitelisted
     * - the strategy must be whitelisted
     * - the strategy contract must have been approved _pairAmount of _pairToken
     * - _ohmAmount must be less than or equal to available debt
     * @param _ohmAmount the desired amount of OHM to borrow
     * @param _strategy the address of the AMM strategy to use
     * @param _strategyParams strategy-specific params
     * @return number of LP tokens created
     */
    function createLP(
        uint256 _ohmAmount,
        address _strategy,
        bytes calldata _strategyParams
    ) external returns (uint256);

    /**
     * @notice unwinds an LP position and pays off OHM debt. Excess ohm is sent back to caller.
     * @param _liquidity the amount of LP tokens to remove.
     * @param _strategy the address of the AMM strategy to use
     * @param _lpToken address of lp token to remove liquidity from
     * @param _strategyParams strategy-specific params
     * @return ohmRecieved of _pair token send to _to and OHM to pay
     */
    function removeLP(
        uint256 _liquidity,
        address _strategy,
        address _lpToken,
        bytes calldata _strategyParams
    ) external returns (uint256);

    /**
     * @notice repay debt with collateral
     * - msg.sender must be a borrower
     * - borrower must have outstanding debt
     */
    function repayDebtWithCollateral() external;

    /**
     * @notice repay debt with collateral and withdraw the accrued earnings to gOHM
     * - msg.sender must be a borrower
     * - borrower must have outstanding debt
     */
    function repayDebtWithCollateralAndWithdrawTheRest() external;

    /**
     * @notice deposits OHM to pay debt
     * - msg.sender must be a borrower
     * - msg.sender's OHM allowance must be >= _ohmAmount
     * - borrower must have outstanding debt
     * @param _ohmAmount amount of OHM to borrow
     */
    function repayDebtWithOHM(uint256 _ohmAmount) external;

    /**
     * @notice gets available OHM to borrow for account
     * @return amount OHM available to borrow
     */
    function getAvailableToBorrow() external view returns (uint256);

    /* ========== MANAGEMENT FUNCTIONS ========== */

    /**
     * @notice sets the maximum debt limit for the system
     * - onlyOwner (or governance)
     * - must be greater than or equal to existing debt
     * @param _limit in OHM
     */
    function setGlobalDebtLimit(uint256 _limit) external;

    /// @notice lets a user become a LP borrower
    /// - onlyOwner (or governance)
    /// - user must not be borrower
    /// @param _borrower the address that will interact with contract
    function allowLPBorrower(address _borrower) external;

    /// @notice lets a user become a Non LP borrower
    /// - onlyOwner (or governance)
    /// - user must not be borrower
    /// @param _borrower the address that will interact with contract
    function allowNonLPBorrower(address _borrower) external;

    /**
     * @notice sets the maximum debt limit for a borrower
     * - onlyOwner (or governance)
     * - limit must be greater than or equal to borrower's outstanding debt
     * - limit must be less than or equal to the global debt limit
     * @param _borrower the address that will interact with contract
     * @param _limit borrower's debt limit in OHM
     */
    function setBorrowerDebtLimit(address _borrower, uint256 _limit) external;

    /**
     * @notice revoke user right to borrow
     * - onlyOwner (or governance)
     * - user must be borrower
     * - borrower must not have outstanding debt
     * @param _borrower the address that will interact with contract
     */
    function revokeBorrower(address _borrower) external;

    /**
     * @notice repays debt using collateral and returns remaining tokens to borrower
     * - onlyOwner (or governance)
     * - sends remaining tokens to owner in GOHM
     * @param _borrower the address that will interact with contract
     */
    function forceRepay(address _borrower) external;

    /**
     * @notice seize and burn _borrowers collateral and forgive debt
     * - will burn all collateral, including excess of debt
     * - onlyGovernance
     * @param _borrower the account to seize
     */
    function seize(address _borrower) external;

    /// @notice lets governor withdraw tokens incase of airdrop or error
    /// - onlyOwner (or governance)
    /// @param _tokenAddress the address of the token
    /// @param _amount amount of tokens to withdraw
    function withdrawToken(address _tokenAddress, uint256 _amount) external;
}