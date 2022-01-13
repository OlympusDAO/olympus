/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BondTeller, BondTellerInterface } from "../BondTeller";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_depository",
        type: "address",
      },
      {
        internalType: "address",
        name: "_staking",
        type: "address",
      },
      {
        internalType: "address",
        name: "_treasury",
        type: "address",
      },
      {
        internalType: "address",
        name: "_ohm",
        type: "address",
      },
      {
        internalType: "address",
        name: "_sOHM",
        type: "address",
      },
      {
        internalType: "address",
        name: "_authority",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IOlympusAuthority",
        name: "authority",
        type: "address",
      },
    ],
    name: "AuthorityUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "bonder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "payout",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expires",
        type: "uint256",
      },
    ],
    name: "BondCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "bonder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "payout",
        type: "uint256",
      },
    ],
    name: "Redeemed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "FERs",
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
    inputs: [],
    name: "authority",
    outputs: [
      {
        internalType: "contract IOlympusAuthority",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "bonderInfo",
    outputs: [
      {
        internalType: "address",
        name: "principal",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "principalPaid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "payout",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vested",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "created",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "redeemed",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feReward",
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
    inputs: [],
    name: "getReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "indexesFor",
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
        name: "_bonder",
        type: "address",
      },
      {
        internalType: "address",
        name: "_principal",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_principalPaid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_payout",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_expires",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_feo",
        type: "address",
      },
    ],
    name: "newBond",
    outputs: [
      {
        internalType: "uint256",
        name: "index_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bonder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "pendingFor",
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
        name: "_bonder",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_indexes",
        type: "uint256[]",
      },
    ],
    name: "pendingForIndexes",
    outputs: [
      {
        internalType: "uint256",
        name: "pending_",
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
        name: "_bonder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "percentVestedFor",
    outputs: [
      {
        internalType: "uint256",
        name: "percentVested_",
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
        name: "_bonder",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_indexes",
        type: "uint256[]",
      },
    ],
    name: "redeem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bonder",
        type: "address",
      },
    ],
    name: "redeemAll",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOlympusAuthority",
        name: "_newAuthority",
        type: "address",
      },
    ],
    name: "setAuthority",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "setFEReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bonder",
        type: "address",
      },
    ],
    name: "totalPendingFor",
    outputs: [
      {
        internalType: "uint256",
        name: "pending_",
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
        name: "_bonder",
        type: "address",
      },
    ],
    name: "updateIndexesFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x610160604052600c6101208190526b15539055551213d49256915160a21b610140908152620000329160009190620002f3565b503480156200004057600080fd5b5060405162001ca338038062001ca3833981810160405260c08110156200006657600080fd5b50805160208201516040808401516060850151608086015160a090960151600180546001600160a01b0319166001600160a01b038316908117909155935195969495929491939192909182917f2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad90600090a2506001600160a01b03861662000135576040805162461bcd60e51b815260206004820152601860248201527f5a65726f20616464726573733a204465706f7369746f72790000000000000000604482015290519081900360640190fd5b6001600160601b0319606087901b166080526001600160a01b038516620001a3576040805162461bcd60e51b815260206004820152601560248201527f5a65726f20616464726573733a205374616b696e670000000000000000000000604482015290519081900360640190fd5b6001600160601b0319606086901b1660a0526001600160a01b03841662000211576040805162461bcd60e51b815260206004820152601660248201527f5a65726f20616464726573733a20547265617375727900000000000000000000604482015290519081900360640190fd5b6001600160601b0319606085901b1660c0526001600160a01b03831662000273576040805162461bcd60e51b81526020600482015260116024820152705a65726f20616464726573733a204f484d60781b604482015290519081900360640190fd5b6001600160601b0319606084901b1660e0526001600160a01b038216620002d6576040805162461bcd60e51b81526020600482015260126024820152715a65726f20616464726573733a20734f484d60701b604482015290519081900360640190fd5b5060601b6001600160601b03191661010052506200039f92505050565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826200032b576000855562000376565b82601f106200034657805160ff191683800117855562000376565b8280016001018555821562000376579182015b828111156200037657825182559160200191906001019062000359565b506200038492915062000388565b5090565b5b8082111562000384576000815560010162000389565b60805160601c60a05160601c60c05160601c60e05160601c6101005160601c6118976200040c600039806104f15280610a555280610da252806112e152806116ba5250806105ff52806110f152508061106152508061112052806111e7525080610fc652506118976000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063be399be511610097578063d2390aa211610066578063d2390aa21461039a578063ea39a9b61461044d578063f7e4ee1014610473578063fbd030c0146104bb57610100565b8063be399be5146102f8578063bf7e214f1461031e578063c3e0fb1c14610342578063cc248a141461036e57610100565b80636e979c6a116100d35780636e979c6a1461025a5780637a9e5e4b14610286578063845dcb55146102ac578063b3b554d1146102d257610100565b8063222e69c8146101055780632c1133d4146101ca5780633d18b912146102335780633d7319e21461023d575b600080fd5b6101b86004803603604081101561011b57600080fd5b6001600160a01b03823516919081019060408101602082013564010000000081111561014657600080fd5b82018360208201111561015857600080fd5b8035906020019184602083028401116401000000008311171561017a57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506104c3945050505050565b60408051918252519081900360200190f35b6101f6600480360360408110156101e057600080fd5b506001600160a01b038135169060200135610586565b604080516001600160a01b0390971687526020870195909552858501939093526060850191909152608084015260a0830152519081900360c00190f35b61023b6105e4565b005b61023b6004803603602081101561025357600080fd5b5035610631565b6101b86004803603604081101561027057600080fd5b506001600160a01b03813516906020013561075c565b61023b6004803603602081101561029c57600080fd5b50356001600160a01b031661083a565b6101b8600480360360208110156102c257600080fd5b50356001600160a01b031661097d565b6101b8600480360360208110156102e857600080fd5b50356001600160a01b0316610ab7565b6101b86004803603602081101561030e57600080fd5b50356001600160a01b0316610ac9565b610326610b57565b604080516001600160a01b039092168252519081900360200190f35b6101b86004803603604081101561035857600080fd5b506001600160a01b038135169060200135610b66565b6101b86004803603604081101561038457600080fd5b506001600160a01b038135169060200135610c2d565b6101b8600480360360408110156103b057600080fd5b6001600160a01b0382351691908101906040810160208201356401000000008111156103db57600080fd5b8201836020820111156103ed57600080fd5b8035906020019184602083028401116401000000008311171561040f57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610c5e945050505050565b61023b6004803603602081101561046357600080fd5b50356001600160a01b0316610e82565b6101b8600480360360c081101561048957600080fd5b506001600160a01b038135811691602081013582169160408201359160608101359160808201359160a0013516610fb9565b6101b86113f1565b6000805b82518110156104ee576104e46104dd8583610b66565b83906113f7565b91506001016104c7565b507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663b8fbd533826040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561055357600080fd5b505afa158015610567573d6000803e3d6000fd5b505050506040513d602081101561057d57600080fd5b50519392505050565b600260205281600052604060002081815481106105a257600080fd5b60009182526020909120600690910201805460018201546002830154600384015460048501546005909501546001600160a01b03909416965091945092909186565b33600081815260046020526040812080549190559061062e907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169083611451565b50565b600160009054906101000a90046001600160a01b03166001600160a01b0316630505c8c96040518163ffffffff1660e01b815260040160206040518083038186803b15801561067f57600080fd5b505afa158015610693573d6000803e3d6000fd5b505050506040513d60208110156106a957600080fd5b50516000906001600160a01b031633146107565760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156107475780601f1061071c57610100808354040283529160200191610747565b820191906000526020600020905b81548152906001019060200180831161072a57829003601f168201915b50509250505060405180910390fd5b50600555565b60006107666117f8565b6001600160a01b038416600090815260026020526040902080548490811061078a57fe5b600091825260208083206040805160c081018252600690940290910180546001600160a01b031684526001810154928401929092526002820154908301526003810154606083015260048101546080830181905260059091015460a08301529092506107f79042906115d0565b90506000610816836080015184606001516115d090919063ffffffff16565b90506108308161082a84633b9aca00611612565b9061166b565b9695505050505050565b600160009054906101000a90046001600160a01b03166001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b15801561088857600080fd5b505afa15801561089c573d6000803e3d6000fd5b505050506040513d60208110156108b257600080fd5b50516000906001600160a01b031633146109255760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156107475780601f1061071c57610100808354040283529160200191610747565b506001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081179091556040517f2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad90600090a250565b6001600160a01b03811660009081526002602090815260408083208054825181850281018501909352808352606093859084015b82821015610a225760008481526020908190206040805160c0810182526006860290920180546001600160a01b031683526001808201548486015260028201549284019290925260038101546060840152600481015460808401526005015460a083015290835290920191016109b1565b50505050905060005b8151811015610a5257610a48610a418583610b66565b84906113f7565b9250600101610a2b565b507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663b8fbd533836040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561055357600080fd5b60046020526000908152604090205481565b6000610ad482610e82565b610b518260036000856001600160a01b03166001600160a01b03168152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015610b4757602002820191906000526020600020905b815481526020019060010190808311610b33575b5050505050610c5e565b92915050565b6001546001600160a01b031681565b6001600160a01b0382166000908152600260205260408120805483908110610b8a57fe5b9060005260206000209060060201600501546000148015610be257506001600160a01b0383166000908152600260205260409020805443919084908110610bcd57fe5b90600052602060002090600602016003015411155b15610c24576001600160a01b0383166000908152600260205260409020805483908110610c0b57fe5b9060005260206000209060060201600201549050610b51565b50600092915050565b60036020528160005260406000208181548110610c4957600080fd5b90600052602060002001600091509150505481565b60008060005b8351811015610d9f57610c756117f8565b6001600160a01b03861660009081526002602052604090208551869084908110610c9b57fe5b602002602001015181548110610cad57fe5b60009182526020918290206040805160c081018252600690930290910180546001600160a01b03168352600181015493830193909352600283015490820152600382015460608201526004820154608082015260059091015460a08201528551909150610d2f908790879085908110610d2257fe5b6020026020010151610b66565b15610d96576001600160a01b03861660009081526002602052604090208551429190879085908110610d5d57fe5b602002602001015181548110610d6f57fe5b60009182526020909120600560069092020101556040810151610d939084906113f7565b92505b50600101610c64565b507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663b8fbd533826040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b158015610e0457600080fd5b505afa158015610e18573d6000803e3d6000fd5b505050506040513d6020811015610e2e57600080fd5b50516040805182815290519192506001600160a01b038616917f4896181ff8f4543cc00db9fe9b6fb7e6f032b7eb772c72ab1ec1b4d2e03b93699181900360200190a2610e7b84826116ad565b9392505050565b6001600160a01b0381166000908152600260209081526040808320805482518185028101850190935280835260609492939192909184015b82821015610f2b5760008481526020908190206040805160c0810182526006860290920180546001600160a01b031683526001808201548486015260028201549284019290925260038101546060840152600481015460808401526005015460a08301529083529092019101610eba565b5050506001600160a01b0384166000908152600360205260408120929350610f54929150611837565b60005b8151811015610fb457818181518110610f6c57fe5b602002602001015160a0015160001415610fac576001600160a01b0383166000908152600360209081526040822080546001810182559083529120018190555b600101610f57565b505050565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614611038576040805162461bcd60e51b815260206004820152600f60248201527f4f6e6c79206465706f7369746f72790000000000000000000000000000000000604482015290519081900360640190fd5b600061105561271061082a6005548861161290919063ffffffff16565b90506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166340c10f193061109188856113f7565b6040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156110d757600080fd5b505af11580156110eb573d6000803e3d6000fd5b505050507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663095ea7b37f0000000000000000000000000000000000000000000000000000000000000000876040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b15801561118657600080fd5b505af115801561119a573d6000803e3d6000fd5b505050506040513d60208110156111b057600080fd5b505060408051631b0cd93b60e31b815230600482015260248101879052600160448201819052606482015290516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163d866c9d89160848083019260209291908290030181600087803b15801561122f57600080fd5b505af1158015611243573d6000803e3d6000fd5b505050506040513d602081101561125957600080fd5b50506001600160a01b03831660009081526004602052604090205461127e90826113f7565b6001600160a01b038085166000908152600460208181526040808420959095558c8416835260028152918490208054855160c0810187528d861681528085018d9052865163012b7d0360e31b81529384018c9052865191985091959194918501937f00000000000000000000000000000000000000000000000000000000000000009092169263095be818926024808301939192829003018186803b15801561132657600080fd5b505afa15801561133a573d6000803e3d6000fd5b505050506040513d602081101561135057600080fd5b505181526020808201979097524260408083019190915260006060928301819052845460018082018755958252908990208451600690920201805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0390921691909117815597830151938801939093559181015160028701559081015160038601556080810151600486015560a001516005909401939093559695505050505050565b60055481565b600082820183811015610e7b576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1663a9059cbb60e01b178152925182516000946060949389169392918291908083835b602083106114e35780518252601f1990920191602091820191016114c4565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611545576040519150601f19603f3d011682016040523d82523d6000602084013e61154a565b606091505b5091509150818015611578575080511580611578575080806020019051602081101561157557600080fd5b50515b6115c9576040805162461bcd60e51b815260206004820152600f60248201527f5452414e534645525f4641494c45440000000000000000000000000000000000604482015290519081900360640190fd5b5050505050565b6000610e7b83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506116e5565b60008261162157506000610b51565b8282028284828161162e57fe5b0414610e7b5760405162461bcd60e51b815260040180806020018281038252602181526020018061186a6021913960400191505060405180910390fd5b6000610e7b83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525061177c565b6116e16001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168383611451565b5050565b600081848411156117745760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611739578181015183820152602001611721565b50505050905090810190601f1680156117665780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600081836117cb5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611739578181015183820152602001611721565b5060008385816117d757fe5b0490508385816117e357fe5b068185020185146117f057fe5b949350505050565b6040518060c0016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b508054600082559060005260206000209081019061062e91905b808211156118655760008155600101611851565b509056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a164736f6c6343000705000a";

export class BondTeller__factory extends ContractFactory {
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
    _depository: string,
    _staking: string,
    _treasury: string,
    _ohm: string,
    _sOHM: string,
    _authority: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BondTeller> {
    return super.deploy(
      _depository,
      _staking,
      _treasury,
      _ohm,
      _sOHM,
      _authority,
      overrides || {}
    ) as Promise<BondTeller>;
  }
  getDeployTransaction(
    _depository: string,
    _staking: string,
    _treasury: string,
    _ohm: string,
    _sOHM: string,
    _authority: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _depository,
      _staking,
      _treasury,
      _ohm,
      _sOHM,
      _authority,
      overrides || {}
    );
  }
  attach(address: string): BondTeller {
    return super.attach(address) as BondTeller;
  }
  connect(signer: Signer): BondTeller__factory {
    return super.connect(signer) as BondTeller__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BondTellerInterface {
    return new utils.Interface(_abi) as BondTellerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BondTeller {
    return new Contract(address, _abi, signerOrProvider) as BondTeller;
  }
}
