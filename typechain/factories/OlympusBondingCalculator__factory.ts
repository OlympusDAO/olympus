/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  OlympusBondingCalculator,
  OlympusBondingCalculatorInterface,
} from "../OlympusBondingCalculator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_OHM",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pair",
        type: "address",
      },
    ],
    name: "getKValue",
    outputs: [
      {
        internalType: "uint256",
        name: "k_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pair",
        type: "address",
      },
    ],
    name: "getTotalValue",
    outputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pair",
        type: "address",
      },
    ],
    name: "markdown",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pair",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "valuation",
    outputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610e40380380610e408339818101604052602081101561003357600080fd5b50516001600160a01b038116610084576040805162461bcd60e51b81526020600482015260116024820152705a65726f20616464726573733a204f484d60781b604482015290519081900360640190fd5b606081901b6001600160601b0319166080526001600160a01b0316610d806100c0600039806101a2528061022e52806103195250610d806000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806332da80a3146100515780634249719f14610089578063490084ef146100b557806368637549146100db575b600080fd5b6100776004803603602081101561006757600080fd5b50356001600160a01b0316610101565b60408051918252519081900360200190f35b6100776004803603604081101561009f57600080fd5b506001600160a01b0381351690602001356103bd565b610077600480360360208110156100cb57600080fd5b50356001600160a01b0316610465565b610077600480360360208110156100f157600080fd5b50356001600160a01b031661074b565b6000806000836001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561013f57600080fd5b505afa158015610153573d6000803e3d6000fd5b505050506040513d606081101561016957600080fd5b50805160209182015160408051630dfe168160e01b815290516001600160701b0393841696509290911693506000926001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169390891692630dfe1681926004808301939192829003018186803b1580156101ea57600080fd5b505afa1580156101fe573d6000803e3d6000fd5b505050506040513d602081101561021457600080fd5b50516001600160a01b0316141561022c575080610308565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316856001600160a01b031663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b15801561028f57600080fd5b505afa1580156102a3573d6000803e3d6000fd5b505050506040513d60208110156102b957600080fd5b50516001600160a01b031614610305576040805162461bcd60e51b815260206004820152600c60248201526b24b73b30b634b2103830b4b960a11b604482015290519081900360640190fd5b50815b6103b26103148661074b565b6103ac7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561037057600080fd5b505afa158015610384573d6000803e3d6000fd5b505050506040513d602081101561039a57600080fd5b5051849060ff16600a0a60020261076f565b906107cf565b93505050505b919050565b6000806103c98461074b565b90506000846001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561040657600080fd5b505afa15801561041a573d6000803e3d6000fd5b505050506040513d602081101561043057600080fd5b5051905061045c670de0b6b3a76400006103ac610455610450888661080e565b61097a565b859061076f565b95945050505050565b600080826001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b1580156104a157600080fd5b505afa1580156104b5573d6000803e3d6000fd5b505050506040513d60208110156104cb57600080fd5b50516040805163313ce56760e01b815290516001600160a01b039092169163313ce56791600480820192602092909190829003018186803b15801561050f57600080fd5b505afa158015610523573d6000803e3d6000fd5b505050506040513d602081101561053957600080fd5b50516040805163d21220a760e01b8152905160ff90921692506000916001600160a01b0386169163d21220a7916004808301926020929190829003018186803b15801561058557600080fd5b505afa158015610599573d6000803e3d6000fd5b505050506040513d60208110156105af57600080fd5b50516040805163313ce56760e01b815290516001600160a01b039092169163313ce56791600480820192602092909190829003018186803b1580156105f357600080fd5b505afa158015610607573d6000803e3d6000fd5b505050506040513d602081101561061d57600080fd5b50516040805163313ce56760e01b8152905160ff90921692506000916106ad916001600160a01b0388169163313ce56791600480820192602092909190829003018186803b15801561066e57600080fd5b505afa158015610682573d6000803e3d6000fd5b505050506040513d602081101561069857600080fd5b505160ff166106a78585610992565b906109ea565b9050600080866001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b1580156106eb57600080fd5b505afa1580156106ff573d6000803e3d6000fd5b505050506040513d606081101561071557600080fd5b5080516020909101516001600160701b039182169350169050610740600a84900a6103ac848461076f565b979650505050505050565b6000610769600261076361075e85610465565b610a2c565b9061076f565b92915050565b60008261077e57506000610769565b8282028284828161078b57fe5b04146107c85760405162461bcd60e51b8152600401808060200182810382526021815260200180610d2a6021913960400191505060405180910390fd5b9392505050565b60006107c883836040518060400160405280601a815260200179536166654d6174683a206469766973696f6e206279207a65726f60301b815250610a96565b610816610cf1565b600082116108555760405162461bcd60e51b8152600401808060200182810382526026815260200180610d046026913960400191505060405180910390fd5b8261086f5750604080516020810190915260008152610769565b6001600160901b03831161090b57600082607085901b8161088c57fe5b0490506001600160e01b038111156108eb576040805162461bcd60e51b815260206004820152601e60248201527f4669786564506f696e743a3a6672616374696f6e3a206f766572666c6f770000604482015290519081900360640190fd5b6040518060200160405280826001600160e01b0316815250915050610769565b600061091c84600160701b85610b4f565b90506001600160e01b038111156108eb576040805162461bcd60e51b815260206004820152601e60248201527f4669786564506f696e743a3a6672616374696f6e3a206f766572666c6f770000604482015290519081900360640190fd5b516612725dd1d243ab6001600160e01b039091160490565b6000828201838110156107c8576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b60006107c883836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610bfa565b60006003821115610a885750806000610a50610a498360026107cf565b6001610992565b90505b81811015610a8257809150610a7b610a74610a6e85846107cf565b83610992565b60026107cf565b9050610a53565b506103b8565b81156103b857506001919050565b60008183610b225760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610ae7578181015183820152602001610acf565b50505050905090810190601f168015610b145780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581610b2e57fe5b049050838581610b3a57fe5b06818502018514610b4757fe5b949350505050565b6000806000610b5e8686610c54565b9150915060008480610b6c57fe5b868809905082811115610b80576001820391505b918290039181610b9e57848381610b9357fe5b0493505050506107c8565b848210610bef576040805162461bcd60e51b815260206004820152601a60248201527946756c6c4d6174683a2046554c4c4449565f4f564552464c4f5760301b604482015290519081900360640190fd5b610740838387610c81565b60008184841115610c4c5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610ae7578181015183820152602001610acf565b505050900390565b6000808060001984860990508385029250828103915082811015610c79576001820391505b509250929050565b60008181038216808381610c9157fe5b049250808581610c9d57fe5b049450808160000381610cac57fe5b60028581038087028203028087028203028087028203028087028203028087028203028087028203029586029003909402930460010193909302939093010292915050565b6040805160208101909152600081529056fe4669786564506f696e743a3a6672616374696f6e3a206469766973696f6e206279207a65726f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a2646970667358221220f335dc427f8f0946311be0c786a1197a1895516f5d8f1484646e061e987d14ba64736f6c63430007060033";

export class OlympusBondingCalculator__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _OHM: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OlympusBondingCalculator> {
    return super.deploy(
      _OHM,
      overrides || {}
    ) as Promise<OlympusBondingCalculator>;
  }
  getDeployTransaction(
    _OHM: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_OHM, overrides || {});
  }
  attach(address: string): OlympusBondingCalculator {
    return super.attach(address) as OlympusBondingCalculator;
  }
  connect(signer: Signer): OlympusBondingCalculator__factory {
    return super.connect(signer) as OlympusBondingCalculator__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OlympusBondingCalculatorInterface {
    return new utils.Interface(_abi) as OlympusBondingCalculatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OlympusBondingCalculator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as OlympusBondingCalculator;
  }
}