declare const abi: [
  {
    inputs: [
      {
        internalType: "string";
        name: "resourceSelector";
        type: "string";
      }
    ];
    name: "RequiredModuleNotFound";
    type: "error";
  },
  {
    inputs: [];
    name: "getName";
    outputs: [
      {
        internalType: "bytes16";
        name: "name";
        type: "bytes16";
      }
    ];
    stateMutability: "view";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "bytes";
        name: "args";
        type: "bytes";
      }
    ];
    name: "install";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  }
];
export default abi;
