/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "OlympusBondDepository",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OlympusBondDepository__factory>;
    getContractFactory(
      name: "BondTeller",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BondTeller__factory>;
    getContractFactory(
      name: "GOHM",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GOHM__factory>;
    getContractFactory(
      name: "GOHMInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GOHMInterface__factory>;
    getContractFactory(
      name: "GovernorAlpha",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorAlpha__factory>;
    getContractFactory(
      name: "SOHMInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SOHMInterface__factory>;
    getContractFactory(
      name: "TimelockInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TimelockInterface__factory>;
    getContractFactory(
      name: "GovernorOHMegaDelegate",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorOHMegaDelegate__factory>;
    getContractFactory(
      name: "GovernorOHMegaDelegator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorOHMegaDelegator__factory>;
    getContractFactory(
      name: "GOHMInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GOHMInterface__factory>;
    getContractFactory(
      name: "GovernorAlpha",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorAlpha__factory>;
    getContractFactory(
      name: "GovernorOHMegaDelegateStorageV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorOHMegaDelegateStorageV1__factory>;
    getContractFactory(
      name: "GovernorOHMegaDelegatorStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorOHMegaDelegatorStorage__factory>;
    getContractFactory(
      name: "GovernorOHMegaEvents",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorOHMegaEvents__factory>;
    getContractFactory(
      name: "SOHMInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SOHMInterface__factory>;
    getContractFactory(
      name: "TimelockInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TimelockInterface__factory>;
    getContractFactory(
      name: "Timelock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Timelock__factory>;
    getContractFactory(
      name: "IBondingCalculator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBondingCalculator__factory>;
    getContractFactory(
      name: "IDistributor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDistributor__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "IgOHM",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IgOHM__factory>;
    getContractFactory(
      name: "IGovernable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGovernable__factory>;
    getContractFactory(
      name: "IGuardable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGuardable__factory>;
    getContractFactory(
      name: "IOHM",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOHM__factory>;
    getContractFactory(
      name: "IOlympusAuthority",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOlympusAuthority__factory>;
    getContractFactory(
      name: "IOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOracle__factory>;
    getContractFactory(
      name: "IOwnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOwnable__factory>;
    getContractFactory(
      name: "IsOHM",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IsOHM__factory>;
    getContractFactory(
      name: "IStaking",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStaking__factory>;
    getContractFactory(
      name: "IStakingV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStakingV1__factory>;
    getContractFactory(
      name: "ITeller",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITeller__factory>;
    getContractFactory(
      name: "ITreasury",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITreasury__factory>;
    getContractFactory(
      name: "ITreasuryV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITreasuryV1__factory>;
    getContractFactory(
      name: "IUniswapV2ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2ERC20__factory>;
    getContractFactory(
      name: "IUniswapV2Pair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Pair__factory>;
    getContractFactory(
      name: "IUniswapV2Router",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Router__factory>;
    getContractFactory(
      name: "IWarmup",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWarmup__factory>;
    getContractFactory(
      name: "IwsOHM",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IwsOHM__factory>;
    getContractFactory(
      name: "CrossChainMigrator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CrossChainMigrator__factory>;
    getContractFactory(
      name: "OlympusTokenMigrator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OlympusTokenMigrator__factory>;
    getContractFactory(
      name: "AccessControlledMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControlledMock__factory>;
    getContractFactory(
      name: "DAI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DAI__factory>;
    getContractFactory(
      name: "IDAI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDAI__factory>;
    getContractFactory(
      name: "LibNote",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LibNote__factory>;
    getContractFactory(
      name: "FRAX",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FRAX__factory>;
    getContractFactory(
      name: "IFRAX",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFRAX__factory>;
    getContractFactory(
      name: "LibNote",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LibNote__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IsOHMOLD",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IsOHMOLD__factory>;
    getContractFactory(
      name: "WOHM",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WOHM__factory>;
    getContractFactory(
      name: "OlympusAuthority",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OlympusAuthority__factory>;
    getContractFactory(
      name: "OlympusERC20Token",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OlympusERC20Token__factory>;
    getContractFactory(
      name: "SOlympus",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SOlympus__factory>;
    getContractFactory(
      name: "OlympusStaking",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OlympusStaking__factory>;
    getContractFactory(
      name: "Distributor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Distributor__factory>;
    getContractFactory(
      name: "OlympusBondingCalculator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OlympusBondingCalculator__factory>;
    getContractFactory(
      name: "OlympusTreasury",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OlympusTreasury__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Permit__factory>;
    getContractFactory(
      name: "Governable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Governable__factory>;
    getContractFactory(
      name: "Guardable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Guardable__factory>;
    getContractFactory(
      name: "OlympusAccessControlled",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OlympusAccessControlled__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "VaultOwned",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VaultOwned__factory>;
    getContractFactory(
      name: "VCASH",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VCASH__factory>;

    getContractAt(
      name: "AccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "OlympusBondDepository",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OlympusBondDepository>;
    getContractAt(
      name: "BondTeller",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BondTeller>;
    getContractAt(
      name: "GOHM",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GOHM>;
    getContractAt(
      name: "GOHMInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GOHMInterface>;
    getContractAt(
      name: "GovernorAlpha",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorAlpha>;
    getContractAt(
      name: "SOHMInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SOHMInterface>;
    getContractAt(
      name: "TimelockInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TimelockInterface>;
    getContractAt(
      name: "GovernorOHMegaDelegate",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorOHMegaDelegate>;
    getContractAt(
      name: "GovernorOHMegaDelegator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorOHMegaDelegator>;
    getContractAt(
      name: "GOHMInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GOHMInterface>;
    getContractAt(
      name: "GovernorAlpha",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorAlpha>;
    getContractAt(
      name: "GovernorOHMegaDelegateStorageV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorOHMegaDelegateStorageV1>;
    getContractAt(
      name: "GovernorOHMegaDelegatorStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorOHMegaDelegatorStorage>;
    getContractAt(
      name: "GovernorOHMegaEvents",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorOHMegaEvents>;
    getContractAt(
      name: "SOHMInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SOHMInterface>;
    getContractAt(
      name: "TimelockInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TimelockInterface>;
    getContractAt(
      name: "Timelock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Timelock>;
    getContractAt(
      name: "IBondingCalculator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBondingCalculator>;
    getContractAt(
      name: "IDistributor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDistributor>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "IgOHM",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IgOHM>;
    getContractAt(
      name: "IGovernable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGovernable>;
    getContractAt(
      name: "IGuardable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGuardable>;
    getContractAt(
      name: "IOHM",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOHM>;
    getContractAt(
      name: "IOlympusAuthority",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOlympusAuthority>;
    getContractAt(
      name: "IOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOracle>;
    getContractAt(
      name: "IOwnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOwnable>;
    getContractAt(
      name: "IsOHM",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IsOHM>;
    getContractAt(
      name: "IStaking",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStaking>;
    getContractAt(
      name: "IStakingV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStakingV1>;
    getContractAt(
      name: "ITeller",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITeller>;
    getContractAt(
      name: "ITreasury",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITreasury>;
    getContractAt(
      name: "ITreasuryV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITreasuryV1>;
    getContractAt(
      name: "IUniswapV2ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2ERC20>;
    getContractAt(
      name: "IUniswapV2Pair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Pair>;
    getContractAt(
      name: "IUniswapV2Router",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Router>;
    getContractAt(
      name: "IWarmup",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWarmup>;
    getContractAt(
      name: "IwsOHM",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IwsOHM>;
    getContractAt(
      name: "CrossChainMigrator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CrossChainMigrator>;
    getContractAt(
      name: "OlympusTokenMigrator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OlympusTokenMigrator>;
    getContractAt(
      name: "AccessControlledMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControlledMock>;
    getContractAt(
      name: "DAI",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DAI>;
    getContractAt(
      name: "IDAI",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDAI>;
    getContractAt(
      name: "LibNote",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LibNote>;
    getContractAt(
      name: "FRAX",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FRAX>;
    getContractAt(
      name: "IFRAX",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFRAX>;
    getContractAt(
      name: "LibNote",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LibNote>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IsOHMOLD",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IsOHMOLD>;
    getContractAt(
      name: "WOHM",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WOHM>;
    getContractAt(
      name: "OlympusAuthority",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OlympusAuthority>;
    getContractAt(
      name: "OlympusERC20Token",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OlympusERC20Token>;
    getContractAt(
      name: "SOlympus",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SOlympus>;
    getContractAt(
      name: "OlympusStaking",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OlympusStaking>;
    getContractAt(
      name: "Distributor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Distributor>;
    getContractAt(
      name: "OlympusBondingCalculator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OlympusBondingCalculator>;
    getContractAt(
      name: "OlympusTreasury",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OlympusTreasury>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Permit>;
    getContractAt(
      name: "Governable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Governable>;
    getContractAt(
      name: "Guardable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Guardable>;
    getContractAt(
      name: "OlympusAccessControlled",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OlympusAccessControlled>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "VaultOwned",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VaultOwned>;
    getContractAt(
      name: "VCASH",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VCASH>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
