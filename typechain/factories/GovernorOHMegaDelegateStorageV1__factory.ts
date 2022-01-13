/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GovernorOHMegaDelegateStorageV1,
  GovernorOHMegaDelegateStorageV1Interface,
} from "../GovernorOHMegaDelegateStorageV1";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "gOHM",
    outputs: [
      {
        internalType: "contract gOHMInterface",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "initialProposalId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "latestProposalIds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "pendingAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "proposalCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "proposalThreshold",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "proposer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "forVotes",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "againstVotes",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "abstainVotes",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "thresholdAtStart",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "votesNeeded",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "canceled",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "sOHM",
    outputs: [
      {
        internalType: "contract sOHMInterface",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "timelock",
    outputs: [
      {
        internalType: "contract TimelockInterface",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "votingDelay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "votingPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610778806100206000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80633932abb11161008c578063d33219b411610066578063d33219b414610211578063da35c6641461022f578063f851a4401461024d578063fc4eee421461026b576100cf565b80633932abb1146101b75780635c60da1b146101d5578063b58131b0146101f3576100cf565b8063013cf08b146100d457806302a251a31461010f5780630cd305851461012d578063150799251461014b57806317977c61146101695780632678224714610199575b600080fd5b6100ee60048036036100e9919081019061048f565b610289565b6040516101069c9b9a99989796959493929190610599565b60405180910390f35b610117610323565b604051610124919061057e565b60405180910390f35b610135610329565b6040516101429190610548565b60405180910390f35b61015361034f565b6040516101609190610563565b60405180910390f35b610183600480360361017e9190810190610466565b610375565b604051610190919061057e565b60405180910390f35b6101a161038d565b6040516101ae9190610512565b60405180910390f35b6101bf6103b3565b6040516101cc919061057e565b60405180910390f35b6101dd6103b9565b6040516101ea9190610512565b60405180910390f35b6101fb6103df565b604051610208919061057e565b60405180910390f35b6102196103e5565b604051610226919061052d565b60405180910390f35b61023761040b565b604051610244919061057e565b60405180910390f35b610255610411565b6040516102629190610512565b60405180910390f35b610273610436565b604051610280919061057e565b60405180910390f35b600b6020528060005260406000206000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600201549080600701549080600801549080600901549080600a01549080600b01549080600c01549080600d01549080600e0160009054906101000a900460ff169080600e0160019054906101000a900460ff1690508c565b60045481565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600c6020528060005260406000206000915090505481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60035481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60055481565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60075481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60065481565b60008135905061044b81610707565b92915050565b6000813590506104608161071e565b92915050565b60006020828403121561047857600080fd5b60006104868482850161043c565b91505092915050565b6000602082840312156104a157600080fd5b60006104af84828501610451565b91505092915050565b6104c181610653565b82525050565b6104d081610665565b82525050565b6104df8161069b565b82525050565b6104ee816106bf565b82525050565b6104fd816106e3565b82525050565b61050c81610691565b82525050565b600060208201905061052760008301846104b8565b92915050565b600060208201905061054260008301846104d6565b92915050565b600060208201905061055d60008301846104e5565b92915050565b600060208201905061057860008301846104f4565b92915050565b60006020820190506105936000830184610503565b92915050565b6000610180820190506105af600083018f610503565b6105bc602083018e6104b8565b6105c9604083018d610503565b6105d6606083018c610503565b6105e3608083018b610503565b6105f060a083018a610503565b6105fd60c0830189610503565b61060a60e0830188610503565b610618610100830187610503565b610626610120830186610503565b6106346101408301856104c7565b6106426101608301846104c7565b9d9c50505050505050505050505050565b600061065e82610671565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006106a6826106ad565b9050919050565b60006106b882610671565b9050919050565b60006106ca826106d1565b9050919050565b60006106dc82610671565b9050919050565b60006106ee826106f5565b9050919050565b600061070082610671565b9050919050565b61071081610653565b811461071b57600080fd5b50565b61072781610691565b811461073257600080fd5b5056fea365627a7a72315820e7887ac005cef1daa0bb7a60450214f66174ecf0329352d708c1dc9f15561b496c6578706572696d656e74616cf564736f6c63430005100040";

export class GovernorOHMegaDelegateStorageV1__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GovernorOHMegaDelegateStorageV1> {
    return super.deploy(
      overrides || {}
    ) as Promise<GovernorOHMegaDelegateStorageV1>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GovernorOHMegaDelegateStorageV1 {
    return super.attach(address) as GovernorOHMegaDelegateStorageV1;
  }
  connect(signer: Signer): GovernorOHMegaDelegateStorageV1__factory {
    return super.connect(signer) as GovernorOHMegaDelegateStorageV1__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GovernorOHMegaDelegateStorageV1Interface {
    return new utils.Interface(
      _abi
    ) as GovernorOHMegaDelegateStorageV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GovernorOHMegaDelegateStorageV1 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as GovernorOHMegaDelegateStorageV1;
  }
}
