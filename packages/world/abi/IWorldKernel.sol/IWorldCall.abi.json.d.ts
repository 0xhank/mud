declare const abi: [
  {
    inputs: [
      {
        internalType: "bytes32";
        name: "resourceSelector";
        type: "bytes32";
      },
      {
        internalType: "bytes";
        name: "funcSelectorAndArgs";
        type: "bytes";
      }
    ];
    name: "call";
    outputs: [
      {
        internalType: "bytes";
        name: "";
        type: "bytes";
      }
    ];
    stateMutability: "payable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "address";
        name: "delegator";
        type: "address";
      },
      {
        internalType: "bytes32";
        name: "resourceSelector";
        type: "bytes32";
      },
      {
        internalType: "bytes";
        name: "funcSelectorAndArgs";
        type: "bytes";
      }
    ];
    name: "callFrom";
    outputs: [
      {
        internalType: "bytes";
        name: "";
        type: "bytes";
      }
    ];
    stateMutability: "payable";
    type: "function";
  }
];
export default abi;
