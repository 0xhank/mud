declare const abi: [
  {
    inputs: [
      {
        internalType: "bytes32";
        name: "resourceSelector";
        type: "bytes32";
      },
      {
        internalType: "address";
        name: "grantee";
        type: "address";
      }
    ];
    name: "grantAccess";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "bytes32";
        name: "resourceSelector";
        type: "bytes32";
      },
      {
        internalType: "address";
        name: "grantee";
        type: "address";
      }
    ];
    name: "revokeAccess";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "bytes16";
        name: "namespace";
        type: "bytes16";
      },
      {
        internalType: "address";
        name: "newOwner";
        type: "address";
      }
    ];
    name: "transferOwnership";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  }
];
export default abi;
