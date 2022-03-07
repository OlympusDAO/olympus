// SPDX-License-Identifier: AGPL-3.0
pragma solidity ^0.8.10;

import "../libraries/SafeERC20.sol";

import "../interfaces/ITreasury.sol";
import "../interfaces/IERC20.sol";
import "../interfaces/IUniswapV2Router.sol";
import "../interfaces/IOlympusAuthority.sol";

import "../types/OlympusAccessControlled.sol";

interface ICurvePool {
    function add_liquidity(
        uint256[2] memory amounts,
        uint256 min_mint_amount,
        bool use_eth,
        address receiver
    ) external payable returns (uint256);
}

contract CurveLiquidityMigrator is OlympusAccessControlled {
    using SafeERC20 for IERC20;

    ICurvePool internal immutable curvePool = ICurvePool(0x6ec38b3228251a0C5D491Faf66858e2E23d7728B);

    // Olympus Treasury
    ITreasury internal immutable treasury = ITreasury(0x9A315BdF513367C0377FB36545857d12e85813Ef);

    // Sushiswap Router
    IUniswapV2Router internal immutable router = IUniswapV2Router(0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F);

    address internal immutable OHMETHSLP = 0x69b81152c5A8d35A67B32A4D3772795d96CaE4da;
    address internal immutable OHMETHCRVToken = 0x3660BD168494d61ffDac21E403d0F6356cF90fD7;
    address internal immutable OHM = 0x64aa3364F17a4D01c6f1751Fd97C2BD3D7e7f1D5;
    address internal immutable WETH = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;

    constructor(IOlympusAuthority _authority) OlympusAccessControlled(_authority) {}

    function moveLiquidity(
        uint256 _amountToRemove,
        uint256[2] memory _minRemoval,
        uint256 _minMintAmount,
        uint256 _deadline
    ) external onlyGuardian {
        // Remove LP From Treasury
        treasury.manage(OHMETHSLP, _amountToRemove);

        // Approve LP to be spent by the Sushiswap router
        IERC20(OHMETHSLP).approve(address(router), _amountToRemove);

        // Remove specified liquidity from OHM/ETH SLP
        (uint256 amountOHM, uint256 amountWETH) = router.removeLiquidity(
            OHM,
            WETH,
            _amountToRemove,
            _minRemoval[0],
            _minRemoval[1],
            address(this),
            _deadline
        );

        // Approve curve pool vault to spend tokens
        IERC20(OHM).approve(address(curvePool), amountOHM);
        IERC20(WETH).approve(address(curvePool), amountWETH);

        // Add liquidity to the curve pool
        curvePool.add_liquidity([amountOHM, amountWETH], _minMintAmount, false, address(treasury));
        

        // Send any leftover OHM back to guardian and WETH to treasury
        IERC20(OHM).safeTransfer(authority.guardian(), IERC20(OHM).balanceOf(address(this)));
        IERC20(WETH).safeTransfer(address(treasury), IERC20(WETH).balanceOf(address(this)));
    }
}
