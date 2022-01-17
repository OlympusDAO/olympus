import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { CONTRACTS, INITIAL_MINT, TOKEN_DECIMAL } from "../../constants";
import { OlympusERC20Token__factory, OlympusTreasury__factory, DAI__factory } from "../../../types";
import { waitFor } from "../../txHelper";

const faucetContract = "OhmFaucet";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const { deployments, getNamedAccounts, network, ethers } = hre;

    if (network.name == "mainnet") {
        console.log("Faucet cannot be deployed to mainnet");
        return;
    }

    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
    const signer = await ethers.provider.getSigner(deployer);

    const ohmDeployment = await deployments.get(CONTRACTS.ohm);
    const treasuryDeployment = await deployments.get(CONTRACTS.treasury);
    const daiDeployment = await deployments.get(CONTRACTS.DAI);

    const ohm = OlympusERC20Token__factory.connect(ohmDeployment.address, signer);
    const mockDai = DAI__factory.connect(daiDeployment.address, signer);
    const treasury = OlympusTreasury__factory.connect(treasuryDeployment.address, signer);

    // Deploy Faucuet
    await deploy(faucetContract, {
        from: deployer,
        args: [ohmDeployment.address],
        log: true,
        skipIfAlreadyDeployed: true,
    });
    const faucetDeployment = await deployments.get(faucetContract);

    let faucetBalance = await ohm.balanceOf(faucetDeployment.address);
    if (faucetBalance.gt(10000)) {
        // short circuit if faucet balance is above 10k ohm
        console.log("Sufficient faucet balance");
        console.log("Faucet Balance: ", ethers.utils.formatUnits(faucetBalance, TOKEN_DECIMAL));
        return;
    }
    // Mint Dai
    const daiAmount = INITIAL_MINT;
    await waitFor(mockDai.mint(deployer, daiAmount));
    const daiBalance = await mockDai.balanceOf(deployer);
    console.log("Dai minted: ", ethers.utils.formatUnits(daiBalance, TOKEN_DECIMAL));

    // Treasury Actions
    await waitFor(treasury.enable(0, deployer, ethers.constants.AddressZero)); // Enable the deployer to deposit reserve tokens
    await waitFor(treasury.enable(2, daiDeployment.address, ethers.constants.AddressZero)); // Enable Dai as a reserve Token

    // Deposit and mint ohm
    await waitFor(mockDai.approve(treasury.address, daiAmount)); // Approve treasury to use the dai
    await waitFor(treasury.deposit(daiAmount, daiDeployment.address, 0)); // Deposit Dai into treasury
    const ohmMinted = await ohm.balanceOf(deployer);
    console.log("Ohm minted: ", ethers.utils.formatUnits(ohmMinted, TOKEN_DECIMAL));

    // Fund faucet w/ newly minted dai.
    await waitFor(ohm.approve(faucetDeployment.address, ohmMinted));
    await waitFor(ohm.transfer(faucetDeployment.address, ohmMinted));

    faucetBalance = await ohm.balanceOf(faucetDeployment.address);
    console.log("Faucet balance:", ethers.utils.formatUnits(faucetBalance, TOKEN_DECIMAL));
};

func.tags = ["faucet", "testnet"];
func.dependencies = [CONTRACTS.ohm, CONTRACTS.DAI, CONTRACTS.treasury];
func.runAtTheEnd = true;

export default func;
