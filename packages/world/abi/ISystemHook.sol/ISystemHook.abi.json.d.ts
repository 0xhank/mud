declare const abi: [
  {
    inputs: [
      {
        internalType: "address";
        name: "msgSender";
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
    name: "onAfterCallSystem";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "address";
        name: "msgSender";
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
    name: "onBeforeCallSystem";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  }
];
export default abi;
