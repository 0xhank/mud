declare const abi: [
  {
    inputs: [
      {
        internalType: "string";
        name: "resource";
        type: "string";
      },
      {
        internalType: "address";
        name: "caller";
        type: "address";
      }
    ];
    name: "AccessDenied";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "address";
        name: "delegator";
        type: "address";
      },
      {
        internalType: "address";
        name: "delegatee";
        type: "address";
      }
    ];
    name: "DelegationNotFound";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "bytes4";
        name: "functionSelector";
        type: "bytes4";
      }
    ];
    name: "FunctionSelectorExists";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "bytes4";
        name: "functionSelector";
        type: "bytes4";
      }
    ];
    name: "FunctionSelectorNotFound";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "string";
        name: "resource";
        type: "string";
      }
    ];
    name: "InvalidSelector";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "string";
        name: "module";
        type: "string";
      }
    ];
    name: "ModuleAlreadyInstalled";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "uint256";
        name: "length";
        type: "uint256";
      }
    ];
    name: "PackedCounter_InvalidLength";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "string";
        name: "resource";
        type: "string";
      }
    ];
    name: "ResourceExists";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "string";
        name: "resource";
        type: "string";
      }
    ];
    name: "ResourceNotFound";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "uint256";
        name: "length";
        type: "uint256";
      }
    ];
    name: "SchemaLib_InvalidLength";
    type: "error";
  },
  {
    inputs: [];
    name: "SchemaLib_StaticTypeAfterDynamicType";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "bytes";
        name: "data";
        type: "bytes";
      },
      {
        internalType: "uint256";
        name: "start";
        type: "uint256";
      },
      {
        internalType: "uint256";
        name: "end";
        type: "uint256";
      }
    ];
    name: "Slice_OutOfBounds";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "uint256";
        name: "expected";
        type: "uint256";
      },
      {
        internalType: "uint256";
        name: "received";
        type: "uint256";
      }
    ];
    name: "StoreCore_InvalidDataLength";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "uint256";
        name: "expected";
        type: "uint256";
      },
      {
        internalType: "uint256";
        name: "received";
        type: "uint256";
      }
    ];
    name: "StoreCore_InvalidFieldNamesLength";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "uint256";
        name: "expected";
        type: "uint256";
      },
      {
        internalType: "uint256";
        name: "received";
        type: "uint256";
      }
    ];
    name: "StoreCore_InvalidKeyNamesLength";
    type: "error";
  },
  {
    inputs: [];
    name: "StoreCore_NotDynamicField";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "bytes32";
        name: "tableId";
        type: "bytes32";
      },
      {
        internalType: "string";
        name: "tableIdString";
        type: "string";
      }
    ];
    name: "StoreCore_TableAlreadyExists";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "address";
        name: "system";
        type: "address";
      }
    ];
    name: "SystemExists";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "bytes32";
        name: "tableId";
        type: "bytes32";
      },
      {
        internalType: "contract IStoreHook";
        name: "hookAddress";
        type: "address";
      },
      {
        internalType: "uint8";
        name: "enabledHooksBitmap";
        type: "uint8";
      }
    ];
    name: "registerStoreHook";
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
        internalType: "Schema";
        name: "keySchema";
        type: "bytes32";
      },
      {
        internalType: "Schema";
        name: "valueSchema";
        type: "bytes32";
      },
      {
        internalType: "string[]";
        name: "keyNames";
        type: "string[]";
      },
      {
        internalType: "string[]";
        name: "fieldNames";
        type: "string[]";
      }
    ];
    name: "registerTable";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  }
];
export default abi;
