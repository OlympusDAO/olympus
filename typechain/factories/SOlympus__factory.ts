/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SOlympus, SOlympusInterface } from "../SOlympus";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rebase",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "LogRebase",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "stakingContract",
        type: "address",
      },
    ],
    name: "LogStakingContractUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalSupply",
        type: "uint256",
      },
    ],
    name: "LogSupply",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gons",
        type: "uint256",
      },
    ],
    name: "balanceForGons",
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
        name: "who",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "debtor",
        type: "address",
      },
      {
        internalType: "bool",
        name: "add",
        type: "bool",
      },
    ],
    name: "changeDebt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "circulatingSupply",
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
        name: "",
        type: "address",
      },
    ],
    name: "debtBalances",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "fromG",
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
    name: "gOHM",
    outputs: [
      {
        internalType: "contract IgOHM",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "gonsForBalance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "index",
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
        name: "_stakingContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "_treasury",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profit_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "epoch_",
        type: "uint256",
      },
    ],
    name: "rebase",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rebases",
    outputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rebase",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalStakedBefore",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalStakedAfter",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountRebased",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blockNumberOccured",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "setIndex",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_gOHM",
        type: "address",
      },
    ],
    name: "setgOHM",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakingContract",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "toG",
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
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "treasury",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6101606040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9610140523480156200003757600080fd5b506040518060400160405280600a8152602001695374616b6564204f484d60b01b81525080604051806040016040528060018152602001603160f81b8152506040518060400160405280600a8152602001695374616b6564204f484d60b01b81525060405180604001604052806005815260200164736d474c5560d81b81525060128260039080519060200190620000d192919062000319565b508151620000e790600490602085019062000319565b5060f81b7fff00000000000000000000000000000000000000000000000000000000000000166080525050815160208084019190912082519183019190912060e08290526101008190524660c081905291907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f62000167818484620001c3565b60a052610120525050600680546001600160a01b0319163317905550506a0422ca8b0a00a4250000006002819055620001ba925090508060001906600019036200020860201b620015781790919060201c565b600b55620003c5565b604080516020808201959095528082019390935260608301919091524660808301523060a0808401919091528151808403909101815260c09092019052805191012090565b60006200025283836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506200025960201b60201c565b9392505050565b60008183620002e95760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015620002ad57818101518382015260200162000293565b50505050905090810190601f168015620002db5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581620002f657fe5b0490508385816200030357fe5b068185020185146200031157fe5b949350505050565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826200035157600085556200039c565b82601f106200036c57805160ff19168380011785556200039c565b828001600101855582156200039c579182015b828111156200039c5782518255916020019190600101906200037f565b50620003aa929150620003ae565b5090565b5b80821115620003aa5760008155600101620003af565b60805160f81c60a05160c05160e051610100516101205161014051611eb26200041c6000398061141b5250806118aa5250806118ec5250806118cb52508061185652508061187e525080610ba05250611eb26000f3fe608060405234801561001057600080fd5b506004361061016a5760003560e01c8063058ecdb41461016f57806306fdde03146101a4578063095be81814610221578063095ea7b31461023e5780630cd305851461027e57806318160ddd146102a25780631bd39674146102aa57806323b872dd146102c7578063245c0e99146102fd5780632986c0e514610325578063313ce5671461032d5780633644e5151461034b578063395093511461035357806340a5737f1461037f578063485cc9551461039c57806361d027b3146103ca57806370a08231146103d257806373c69eb7146103f85780637965d56d1461044d5780637ecebe001461046a5780639358928b1461049057806395d89b4114610498578063a457c2d7146104a0578063a9059cbb146104cc578063ae5c6cd3146104f8578063b8fbd5331461052c578063c4ef1c4c14610549578063d505accf1461056f578063dd62ed3e146105c0578063ee99205c146105ee575b600080fd5b6101926004803603604081101561018557600080fd5b50803590602001356105f6565b60408051918252519081900360200190f35b6101ac610778565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101e65781810151838201526020016101ce565b50505050905090810190601f1680156102135780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101926004803603602081101561023757600080fd5b503561080f565b61026a6004803603604081101561025457600080fd5b506001600160a01b03813516906020013561088d565b604080519115158252519081900360200190f35b6102866108a3565b604080516001600160a01b039092168252519081900360200190f35b6101926108b2565b610192600480360360208110156102c057600080fd5b50356108b8565b61026a600480360360608110156102dd57600080fd5b506001600160a01b038135811691602081013590911690604001356108cf565b6103236004803603602081101561031357600080fd5b50356001600160a01b0316610a84565b005b610192610b8c565b610335610b9e565b6040805160ff9092168252519081900360200190f35b610192610bc2565b61026a6004803603604081101561036957600080fd5b506001600160a01b038135169060200135610bcc565b6103236004803603602081101561039557600080fd5b5035610c07565b610323600480360360408110156103b257600080fd5b506001600160a01b0381358116916020013516610cad565b610286610e6a565b610192600480360360208110156103e857600080fd5b50356001600160a01b0316610e79565b6104156004803603602081101561040e57600080fd5b5035610ea1565b604080519788526020880196909652868601949094526060860192909252608085015260a084015260c0830152519081900360e00190f35b6101926004803603602081101561046357600080fd5b5035610ef3565b6101926004803603602081101561048057600080fd5b50356001600160a01b0316610f0a565b610192610f2b565b6101ac6110b5565b61026a600480360360408110156104b657600080fd5b506001600160a01b038135169060200135611116565b61026a600480360360408110156104e257600080fd5b506001600160a01b03813516906020013561116b565b6103236004803603606081101561050e57600080fd5b508035906001600160a01b036020820135169060400135151561128c565b6101926004803603602081101561054257600080fd5b5035611364565b6101926004803603602081101561055f57600080fd5b50356001600160a01b03166113b0565b610323600480360360e081101561058557600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c001356113c2565b610192600480360360408110156105d657600080fd5b506001600160a01b038135811691602001351661153e565b610286611569565b6008546000906001600160a01b031633146106425760405162461bcd60e51b815260040180806020018281038252602e815260200180611e2f602e913960400191505060405180910390fd5b60008061064d610f2b565b9050846106dc57600254604080519182525185917f0417b340e646d4be71f9b2da63b5c3c69bc9cfa069f0e0db4756271886130bf4919081900360200190a2837f6012dbce857565c4a40974aa5de8373a761fc429077ef0c8c8611d1e20d63fb260006106b8610b8c565b6040805192835260208301919091528051918290030190a260025492505050610772565b801561070857610701816106fb600254886115be90919063ffffffff16565b90611578565b915061070c565b8491505b6002546107199083611617565b60028190556001600160801b031015610738576001600160801b036002555b61075c6002546a0422ca8b0a00a4250000006000198161075457fe5b061990611578565b600b5561076a81868661166f565b600254925050505b92915050565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108045780601f106107d957610100808354040283529160200191610804565b820191906000526020600020905b8154815290600101906020018083116107e757829003601f168201915b505050505090505b90565b600954604080516319a948db60e21b81526004810184905290516000926001600160a01b0316916366a5236c916024808301926020929190829003018186803b15801561085b57600080fd5b505afa15801561086f573d6000803e3d6000fd5b505050506040513d602081101561088557600080fd5b505192915050565b600061089a3384846117ad565b50600192915050565b6009546001600160a01b031681565b60025490565b6000610772600b54836115be90919063ffffffff16565b6001600160a01b0383166000908152600d602090815260408083203384529091528120546108fd908361180f565b6001600160a01b0385166000818152600d60209081526040808320338085529083529281902085905580519485525191937f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929081900390910190a36000610964836108b8565b6001600160a01b0386166000908152600c602052604090205490915061098a908261180f565b6001600160a01b038087166000908152600c602052604080822093909355908616815220546109b99082611617565b6001600160a01b038086166000908152600c60209081526040808320949094559188168152600f90915220546109ee86610e79565b1015610a40576040805162461bcd60e51b815260206004820152601c60248201527b1119589d0e8818d85b9b9bdd081d1c985b9cd9995c88185b5bdd5b9d60221b604482015290519081900360640190fd5b836001600160a01b0316856001600160a01b0316600080516020611e5d833981519152856040518082815260200191505060405180910390a3506001949350505050565b6006546001600160a01b03163314610acd5760405162461bcd60e51b8152600401808060200182810382526027815260200180611e086027913960400191505060405180910390fd5b6009546001600160a01b031615610b25576040805162461bcd60e51b815260206004820152601760248201527619d3d2134e880819d3d21348185b1c9958591e481cd95d604a1b604482015290519081900360640190fd5b6001600160a01b038116610b6a5760405162461bcd60e51b8152600401808060200182810382526023815260200180611d806023913960400191505060405180910390fd5b600980546001600160a01b0319166001600160a01b0392909216919091179055565b6000610b99600754610ef3565b905090565b7f000000000000000000000000000000000000000000000000000000000000000090565b6000610b99611851565b336000818152600d602090815260408083206001600160a01b0387168452909152812054909161089a918590610c029086611617565b6117ad565b6006546001600160a01b03163314610c505760405162461bcd60e51b8152600401808060200182810382526027815260200180611e086027913960400191505060405180910390fd5b60075415610c9e576040805162461bcd60e51b815260206004820152601660248201527521b0b73737ba1039b2ba1024a72222ac1030b3b0b4b760511b604482015290519081900360640190fd5b610ca7816108b8565b60075550565b6006546001600160a01b03163314610cf65760405162461bcd60e51b8152600401808060200182810382526027815260200180611e086027913960400191505060405180910390fd5b6001600160a01b038216610d3b576040805162461bcd60e51b81526020600482015260076024820152665374616b696e6760c81b604482015290519081900360640190fd5b600880546001600160a01b0319166001600160a01b0384811691909117918290559081166000908152600c602052604090206a0357636f35a3ab8fffffff1990558116610dc8576040805162461bcd60e51b81526020600482015260166024820152755a65726f20616464726573733a20547265617375727960501b604482015290519081900360640190fd5b600e80546001600160a01b0319166001600160a01b038381169190911790915560085460025460408051918252519190921691600091600080516020611e5d833981519152916020908290030190a3600854604080516001600160a01b039092168252517f817c653428858ed536dc085c5d8273734c517b55de44b55f5c5877a75e3373a19181900360200190a15050600680546001600160a01b0319169055565b600e546001600160a01b031681565b600b546001600160a01b0382166000908152600c602052604081205490916107729190611578565b600a8181548110610eb157600080fd5b90600052602060002090600702016000915090508060000154908060010154908060020154908060030154908060040154908060050154908060060154905087565b6000610772600b548361157890919063ffffffff16565b6001600160a01b038116600090815260056020526040812061077290611918565b6000610b99600860009054906101000a90046001600160a01b03166001600160a01b031663201386416040518163ffffffff1660e01b815260040160206040518083038186803b158015610f7e57600080fd5b505afa158015610f92573d6000803e3d6000fd5b505050506040513d6020811015610fa857600080fd5b5051600954604080516318160ddd60e01b815290516110af926001600160a01b03169163a82487689183916318160ddd916004808301926020929190829003018186803b158015610ff857600080fd5b505afa15801561100c573d6000803e3d6000fd5b505050506040513d602081101561102257600080fd5b5051604080516001600160e01b031960e085901b1681526004810192909252516024808301926020929190829003018186803b15801561106157600080fd5b505afa158015611075573d6000803e3d6000fd5b505050506040513d602081101561108b57600080fd5b50516008546110af906110a6906001600160a01b0316610e79565b6002549061180f565b90611617565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108045780601f106107d957610100808354040283529160200191610804565b336000908152600d602090815260408083206001600160a01b03861684529091528120548083106111525761114d338560006117ad565b611161565b6111613385610c02848761180f565b5060019392505050565b600080611183600b54846115be90919063ffffffff16565b336000908152600c60205260409020549091506111a0908261180f565b336000908152600c6020526040808220929092556001600160a01b038616815220546111cc9082611617565b6001600160a01b0385166000908152600c602090815260408083209390935533808352600f909152919020549061120290610e79565b1015611254576040805162461bcd60e51b815260206004820152601c60248201527b1119589d0e8818d85b9b9bdd081d1c985b9cd9995c88185b5bdd5b9d60221b604482015290519081900360640190fd5b6040805184815290516001600160a01b038616913391600080516020611e5d8339815191529181900360200190a35060019392505050565b600e546001600160a01b031633146112db576040805162461bcd60e51b815260206004820152600d60248201526c4f6e6c7920747265617375727960981b604482015290519081900360640190fd5b8015611322576001600160a01b0382166000908152600f60205260409020546113049084611617565b6001600160a01b0383166000908152600f602052604090205561135f565b6001600160a01b0382166000908152600f6020526040902054611345908461180f565b6001600160a01b0383166000908152600f60205260409020555b505050565b6009546040805163150490ed60e31b81526004810184905290516000926001600160a01b03169163a8248768916024808301926020929190829003018186803b15801561085b57600080fd5b600f6020526000908152604090205481565b83421115611417576040805162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e65000000604482015290519081900360640190fd5b60007f00000000000000000000000000000000000000000000000000000000000000008888886114468c61191c565b8960405160200180878152602001866001600160a01b03168152602001856001600160a01b03168152602001848152602001838152602001828152602001965050505050505060405160208183030381529060405280519060200120905060006114af8261194e565b905060006114bf82878787611961565b9050896001600160a01b0316816001600160a01b031614611527576040805162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015290519081900360640190fd5b6115328a8a8a6117ad565b50505050505050505050565b6001600160a01b039182166000908152600d6020908152604080832093909416825291909152205490565b6008546001600160a01b031681565b60006115b783836040518060400160405280601a815260200179536166654d6174683a206469766973696f6e206279207a65726f60301b815250611989565b9392505050565b6000826115cd57506000610772565b828202828482816115da57fe5b04146115b75760405162461bcd60e51b8152600401808060200182810382526021815260200180611de76021913960400191505060405180910390fd5b6000828201838110156115b7576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b6000611687846106fb85670de0b6b3a76400006115be565b9050600a6040518060e001604052808481526020018381526020018681526020016116b0610f2b565b81526020018581526020016116c3610b8c565b81524360209182015282546001818101855560009485529382902083516007909202019081558282015193810193909355604080830151600280860191909155606084015160038601556080840151600486015560a0840151600586015560c09093015160069094019390935590548251908152915184927f0417b340e646d4be71f9b2da63b5c3c69bc9cfa069f0e0db4756271886130bf492908290030190a2817f6012dbce857565c4a40974aa5de8373a761fc429077ef0c8c8611d1e20d63fb28261178f610b8c565b6040805192835260208301919091528051918290030190a250505050565b6001600160a01b038084166000818152600d6020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b60006115b783836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611a42565b6000467f00000000000000000000000000000000000000000000000000000000000000008114156118a5577f000000000000000000000000000000000000000000000000000000000000000091505061080c565b6119107f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a9c565b91505061080c565b5490565b6001600160a01b038116600090815260056020526040812061193d81611918565b915061194881611ae1565b50919050565b600061077261195b611851565b83611aea565b600080600061197287878787611b25565b9150915061197f81611c10565b5095945050505050565b60008183611a155760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156119da5781810151838201526020016119c2565b50505050905090810190601f168015611a075780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581611a2157fe5b049050838581611a2d57fe5b06818502018514611a3a57fe5b949350505050565b60008184841115611a945760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156119da5781810151838201526020016119c2565b505050900390565b604080516020808201959095528082019390935260608301919091524660808301523060a0808401919091528151808403909101815260c09092019052805191012090565b80546001019055565b6040805161190160f01b6020808301919091526022820194909452604280820193909352815180820390930183526062019052805191012090565b6000806fa2a8918ca85bafe22016d0b997e4df60600160ff1b03831115611b525750600090506003611c07565b8460ff16601b14158015611b6a57508460ff16601c14155b15611b7b5750600090506004611c07565b600060018787878760405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015611bd7573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611c0057600060019250925050611c07565b9150600090505b94509492505050565b6000816004811115611c1e57fe5b1415611c2957611d7c565b6001816004811115611c3757fe5b1415611c85576040805162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b604482015290519081900360640190fd5b6002816004811115611c9357fe5b1415611ce6576040805162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015290519081900360640190fd5b6003816004811115611cf457fe5b1415611d315760405162461bcd60e51b8152600401808060200182810382526022815260200180611da36022913960400191505060405180910390fd5b6004816004811115611d3f57fe5b1415611d7c5760405162461bcd60e51b8152600401808060200182810382526022815260200180611dc56022913960400191505060405180910390fd5b5056fe674f484d3a2020674f484d206973206e6f7420612076616c696420636f6e747261637445434453413a20696e76616c6964207369676e6174757265202773272076616c756545434453413a20696e76616c6964207369676e6174757265202776272076616c7565536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77496e697469616c697a65723a202063616c6c6572206973206e6f7420696e697469616c697a65725374616b696e67436f6e74726163743a202063616c6c206973206e6f74207374616b696e6720636f6e7472616374ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa264697066735822122042620646d3dc5581023b364a06d869322c3d9283c47bbc65e8d4fd06b4f1ee6664736f6c63430007060033";

export class SOlympus__factory extends ContractFactory {
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
  ): Promise<SOlympus> {
    return super.deploy(overrides || {}) as Promise<SOlympus>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SOlympus {
    return super.attach(address) as SOlympus;
  }
  connect(signer: Signer): SOlympus__factory {
    return super.connect(signer) as SOlympus__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SOlympusInterface {
    return new utils.Interface(_abi) as SOlympusInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SOlympus {
    return new Contract(address, _abi, signerOrProvider) as SOlympus;
  }
}
