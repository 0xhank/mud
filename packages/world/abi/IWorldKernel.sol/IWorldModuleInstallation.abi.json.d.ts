declare const abi: [
  {
    inputs: [
      {
        internalType: "contract IModule";
        name: "module";
        type: "address";
      },
      {
        internalType: "bytes";
        name: "args";
        type: "bytes";
      }
    ];
    name: "installRootModule";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  }
];
export default abi;
