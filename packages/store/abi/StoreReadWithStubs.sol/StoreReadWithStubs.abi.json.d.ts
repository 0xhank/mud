declare const abi: [
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
        name: "length";
        type: "uint256";
      },
      {
        internalType: "uint256";
        name: "received";
        type: "uint256";
      }
    ];
    name: "StoreCore_DataIndexOverflow";
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
    inputs: [];
    name: "StoreCore_NotImplemented";
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
    name: "StoreCore_TableNotFound";
    type: "error";
  },
  {
    inputs: [];
    name: "StoreReadWithStubs_NotImplemented";
    type: "error";
  },
  {
    anonymous: false;
    inputs: [
      {
        indexed: false;
        internalType: "bytes32";
        name: "table";
        type: "bytes32";
      },
      {
        indexed: false;
        internalType: "bytes32[]";
        name: "key";
        type: "bytes32[]";
      }
    ];
    name: "StoreDeleteRecord";
    type: "event";
  },
  {
    anonymous: false;
    inputs: [
      {
        indexed: false;
        internalType: "bytes32";
        name: "table";
        type: "bytes32";
      },
      {
        indexed: false;
        internalType: "bytes32[]";
        name: "key";
        type: "bytes32[]";
      },
      {
        indexed: false;
        internalType: "bytes";
        name: "data";
        type: "bytes";
      }
    ];
    name: "StoreEphemeralRecord";
    type: "event";
  },
  {
    anonymous: false;
    inputs: [
      {
        indexed: false;
        internalType: "bytes32";
        name: "table";
        type: "bytes32";
      },
      {
        indexed: false;
        internalType: "bytes32[]";
        name: "key";
        type: "bytes32[]";
      },
      {
        indexed: false;
        internalType: "uint8";
        name: "schemaIndex";
        type: "uint8";
      },
      {
        indexed: false;
        internalType: "bytes";
        name: "data";
        type: "bytes";
      }
    ];
    name: "StoreSetField";
    type: "event";
  },
  {
    anonymous: false;
    inputs: [
      {
        indexed: false;
        internalType: "bytes32";
        name: "table";
        type: "bytes32";
      },
      {
        indexed: false;
        internalType: "bytes32[]";
        name: "key";
        type: "bytes32[]";
      },
      {
        indexed: false;
        internalType: "bytes";
        name: "data";
        type: "bytes";
      }
    ];
    name: "StoreSetRecord";
    type: "event";
  },
  {
    inputs: [
      {
        internalType: "bytes32";
        name: "";
        type: "bytes32";
      },
      {
        internalType: "bytes32[]";
        name: "";
        type: "bytes32[]";
      },
      {
        internalType: "Schema";
        name: "";
        type: "bytes32";
      }
    ];
    name: "deleteRecord";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "bytes32";
        name: "";
        type: "bytes32";
      },
      {
        internalType: "bytes32[]";
        name: "";
        type: "bytes32[]";
      },
      {
        internalType: "bytes";
        name: "";
        type: "bytes";
      },
      {
        internalType: "Schema";
        name: "";
        type: "bytes32";
      }
    ];
    name: "emitEphemeralRecord";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "bytes32";
        name: "table";
        type: "bytes32";
      },
      {
        internalType: "bytes32[]";
        name: "key";
        type: "bytes32[]";
      },
      {
        internalType: "uint8";
        name: "schemaIndex";
        type: "uint8";
      },
      {
        internalType: "Schema";
        name: "valueSchema";
        type: "bytes32";
      }
    ];
    name: "getField";
    outputs: [
      {
        internalType: "bytes";
        name: "data";
        type: "bytes";
      }
    ];
    stateMutability: "view";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "bytes32";
        name: "tableId";
        type: "bytes32";
      },
      {
        internalType: "bytes32[]";
        name: "key";
        type: "bytes32[]";
      },
      {
        internalType: "uint8";
        name: "schemaIndex";
        type: "uint8";
      },
      {
        internalType: "Schema";
        name: "schema";
        type: "bytes32";
      }
    ];
    name: "getFieldLength";
    outputs: [
      {
        internalType: "uint256";
        name: "";
        type: "uint256";
      }
    ];
    stateMutability: "view";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "bytes32";
        name: "tableId";
        type: "bytes32";
      },
      {
        internalType: "bytes32[]";
        name: "key";
        type: "bytes32[]";
      },
      {
        internalType: "uint8";
        name: "schemaIndex";
        type: "uint8";
      },
      {
        internalType: "Schema";
        name: "schema";
        type: "bytes32";
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
    name: "getFieldSlice";
    outputs: [
      {
        internalType: "bytes";
        name: "";
        type: "bytes";
      }
    ];
    stateMutability: "view";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "bytes32";
        name: "table";
        type: "bytes32";
      }
    ];
    name: "getKeySchema";
    outputs: [
      {
        internalType: "Schema";
        name: "schema";
        type: "bytes32";
      }
    ];
    stateMutability: "view";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "bytes32";
        name: "table";
        type: "bytes32";
      },
      {
        internalType: "bytes32[]";
        name: "key";
        type: "bytes32[]";
      },
      {
        internalType: "Schema";
        name: "valueSchema";
        type: "bytes32";
      }
    ];
    name: "getRecord";
    outputs: [
      {
        internalType: "bytes";
        name: "data";
        type: "bytes";
      }
    ];
    stateMutability: "view";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "bytes32";
        name: "table";
        type: "bytes32";
      }
    ];
    name: "getValueSchema";
    outputs: [
      {
        internalType: "Schema";
        name: "schema";
        type: "bytes32";
      }
    ];
    stateMutability: "view";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "bytes32";
        name: "";
        type: "bytes32";
      },
      {
        internalType: "bytes32[]";
        name: "";
        type: "bytes32[]";
      },
      {
        internalType: "uint8";
        name: "";
        type: "uint8";
      },
      {
        internalType: "uint256";
        name: "";
        type: "uint256";
      },
      {
        internalType: "Schema";
        name: "";
        type: "bytes32";
      }
    ];
    name: "popFromField";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "bytes32";
        name: "";
        type: "bytes32";
      },
      {
        internalType: "bytes32[]";
        name: "";
        type: "bytes32[]";
      },
      {
        internalType: "uint8";
        name: "";
        type: "uint8";
      },
      {
        internalType: "bytes";
        name: "";
        type: "bytes";
      },
      {
        internalType: "Schema";
        name: "";
        type: "bytes32";
      }
    ];
    name: "pushToField";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "bytes32";
        name: "";
        type: "bytes32";
      },
      {
        internalType: "contract IStoreHook";
        name: "";
        type: "address";
      },
      {
        internalType: "uint8";
        name: "";
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
        name: "";
        type: "bytes32";
      },
      {
        internalType: "Schema";
        name: "";
        type: "bytes32";
      },
      {
        internalType: "Schema";
        name: "";
        type: "bytes32";
      },
      {
        internalType: "string[]";
        name: "";
        type: "string[]";
      },
      {
        internalType: "string[]";
        name: "";
        type: "string[]";
      }
    ];
    name: "registerTable";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "bytes32";
        name: "";
        type: "bytes32";
      },
      {
        internalType: "bytes32[]";
        name: "";
        type: "bytes32[]";
      },
      {
        internalType: "uint8";
        name: "";
        type: "uint8";
      },
      {
        internalType: "bytes";
        name: "";
        type: "bytes";
      },
      {
        internalType: "Schema";
        name: "";
        type: "bytes32";
      }
    ];
    name: "setField";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "bytes32";
        name: "";
        type: "bytes32";
      },
      {
        internalType: "bytes32[]";
        name: "";
        type: "bytes32[]";
      },
      {
        internalType: "bytes";
        name: "";
        type: "bytes";
      },
      {
        internalType: "Schema";
        name: "";
        type: "bytes32";
      }
    ];
    name: "setRecord";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "bytes32";
        name: "";
        type: "bytes32";
      },
      {
        internalType: "bytes32[]";
        name: "";
        type: "bytes32[]";
      },
      {
        internalType: "uint8";
        name: "";
        type: "uint8";
      },
      {
        internalType: "uint256";
        name: "";
        type: "uint256";
      },
      {
        internalType: "bytes";
        name: "";
        type: "bytes";
      },
      {
        internalType: "Schema";
        name: "";
        type: "bytes32";
      }
    ];
    name: "updateInField";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  }
];
export default abi;
