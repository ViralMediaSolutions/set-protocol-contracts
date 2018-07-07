export const ExchangeHandler = 
{
  "contractName": "ExchangeHandler",
  "abi": [],
  "bytecode": "0x605a602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600080fd00a265627a7a723058200dab4a360739800d3cc4791c5224568f1774dd6815c1c3c51567a7de55dca9e86c6578706572696d656e74616cf50037",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fd00a265627a7a723058200dab4a360739800d3cc4791c5224568f1774dd6815c1c3c51567a7de55dca9e86c6578706572696d656e74616cf50037",
  "sourceMap": "811:960:24:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24",
  "deployedSourceMap": "811:960:24:-;;;;;;;;",
  "source": "/*\n    Copyright 2018 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.4.24;\npragma experimental \"ABIEncoderV2\";\n\n\n/**\n * @title ExchangeHandler\n * @author Set Protocol\n *\n * This library contains functions and structs to assist with parsing exchange orders data\n */\nlibrary ExchangeHandler {\n\n    // ============ Structs ============\n\n    struct OrderHeader {\n        uint8 exchange;\n        uint256 orderLength;\n    }\n\n    // ============ Internal Functions ============\n\n    /**\n     * Function to convert bytes into OrderHeader\n     *\n     * This will always trail an ExchangeOrderHeader, so we don't need to skip\n     * the first 32. See Notes in parseExchangeOrdersHeader\n     *\n     * @param _headerData   Bytes representing the order body information\n     * @return OrderHeader  Struct containing exchange order body data\n     */\n    function parseOrderHeader(\n        bytes _headerData\n    )\n        internal\n        pure\n        returns (OrderHeader memory)\n    {\n        OrderHeader memory header;\n\n        assembly {\n            mstore(header,          mload(add(_headerData, 32))) // exchange\n            mstore(add(header, 32), mload(add(_headerData, 64))) // orderLength\n        }\n\n        return header;\n    }\n}\n",
  "sourcePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/lib/ExchangeHandler.sol",
  "ast": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/lib/ExchangeHandler.sol",
    "exportedSymbols": {
      "ExchangeHandler": [
        2868
      ]
    },
    "id": 2869,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2847,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:24"
      },
      {
        "id": 2848,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "621:35:24"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "@title ExchangeHandler\n@author Set Protocol\n * This library contains functions and structs to assist with parsing exchange orders data",
        "fullyImplemented": true,
        "id": 2868,
        "linearizedBaseContracts": [
          2868
        ],
        "name": "ExchangeHandler",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "ExchangeHandler.OrderHeader",
            "id": 2853,
            "members": [
              {
                "constant": false,
                "id": 2850,
                "name": "exchange",
                "nodeType": "VariableDeclaration",
                "scope": 2853,
                "src": "913:14:24",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint8",
                  "typeString": "uint8"
                },
                "typeName": {
                  "id": 2849,
                  "name": "uint8",
                  "nodeType": "ElementaryTypeName",
                  "src": "913:5:24",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 2852,
                "name": "orderLength",
                "nodeType": "VariableDeclaration",
                "scope": 2853,
                "src": "937:19:24",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 2851,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "937:7:24",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "OrderHeader",
            "nodeType": "StructDefinition",
            "scope": 2868,
            "src": "884:79:24",
            "visibility": "public"
          },
          {
            "body": {
              "id": 2866,
              "nodeType": "Block",
              "src": "1516:253:24",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2861,
                      "name": "header",
                      "nodeType": "VariableDeclaration",
                      "scope": 2867,
                      "src": "1526:25:24",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_OrderHeader_$2853_memory_ptr",
                        "typeString": "struct ExchangeHandler.OrderHeader"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 2860,
                        "name": "OrderHeader",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 2853,
                        "src": "1526:11:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_OrderHeader_$2853_storage_ptr",
                          "typeString": "struct ExchangeHandler.OrderHeader"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2862,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1526:25:24"
                },
                {
                  "externalReferences": [
                    {
                      "_headerData": {
                        "declaration": 2855,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1619:11:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "header": {
                        "declaration": 2861,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1592:6:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "header": {
                        "declaration": 2861,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1673:6:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "_headerData": {
                        "declaration": 2855,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1696:11:24",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 2863,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    mstore(header, mload(add(_headerData, 32)))\n    mstore(add(header, 32), mload(add(_headerData, 64)))\n}",
                  "src": "1562:193:24"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2864,
                    "name": "header",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2861,
                    "src": "1756:6:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_OrderHeader_$2853_memory_ptr",
                      "typeString": "struct ExchangeHandler.OrderHeader memory"
                    }
                  },
                  "functionReturnParameters": 2859,
                  "id": 2865,
                  "nodeType": "Return",
                  "src": "1749:13:24"
                }
              ]
            },
            "documentation": "Function to convert bytes into OrderHeader\n     * This will always trail an ExchangeOrderHeader, so we don't need to skip\nthe first 32. See Notes in parseExchangeOrdersHeader\n     * @param _headerData   Bytes representing the order body information\n@return OrderHeader  Struct containing exchange order body data",
            "id": 2867,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "parseOrderHeader",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2856,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2855,
                  "name": "_headerData",
                  "nodeType": "VariableDeclaration",
                  "scope": 2867,
                  "src": "1421:17:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 2854,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1421:5:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1411:33:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 2859,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2858,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2867,
                  "src": "1492:11:24",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_OrderHeader_$2853_memory_ptr",
                    "typeString": "struct ExchangeHandler.OrderHeader"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 2857,
                    "name": "OrderHeader",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 2853,
                    "src": "1492:11:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_OrderHeader_$2853_storage_ptr",
                      "typeString": "struct ExchangeHandler.OrderHeader"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1491:20:24"
            },
            "scope": 2868,
            "src": "1386:383:24",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 2869,
        "src": "811:960:24"
      }
    ],
    "src": "597:1175:24"
  },
  "legacyAST": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/lib/ExchangeHandler.sol",
    "exportedSymbols": {
      "ExchangeHandler": [
        2868
      ]
    },
    "id": 2869,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2847,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:24"
      },
      {
        "id": 2848,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "621:35:24"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "@title ExchangeHandler\n@author Set Protocol\n * This library contains functions and structs to assist with parsing exchange orders data",
        "fullyImplemented": true,
        "id": 2868,
        "linearizedBaseContracts": [
          2868
        ],
        "name": "ExchangeHandler",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "ExchangeHandler.OrderHeader",
            "id": 2853,
            "members": [
              {
                "constant": false,
                "id": 2850,
                "name": "exchange",
                "nodeType": "VariableDeclaration",
                "scope": 2853,
                "src": "913:14:24",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint8",
                  "typeString": "uint8"
                },
                "typeName": {
                  "id": 2849,
                  "name": "uint8",
                  "nodeType": "ElementaryTypeName",
                  "src": "913:5:24",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 2852,
                "name": "orderLength",
                "nodeType": "VariableDeclaration",
                "scope": 2853,
                "src": "937:19:24",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 2851,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "937:7:24",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "OrderHeader",
            "nodeType": "StructDefinition",
            "scope": 2868,
            "src": "884:79:24",
            "visibility": "public"
          },
          {
            "body": {
              "id": 2866,
              "nodeType": "Block",
              "src": "1516:253:24",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2861,
                      "name": "header",
                      "nodeType": "VariableDeclaration",
                      "scope": 2867,
                      "src": "1526:25:24",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_OrderHeader_$2853_memory_ptr",
                        "typeString": "struct ExchangeHandler.OrderHeader"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 2860,
                        "name": "OrderHeader",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 2853,
                        "src": "1526:11:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_OrderHeader_$2853_storage_ptr",
                          "typeString": "struct ExchangeHandler.OrderHeader"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2862,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1526:25:24"
                },
                {
                  "externalReferences": [
                    {
                      "_headerData": {
                        "declaration": 2855,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1619:11:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "header": {
                        "declaration": 2861,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1592:6:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "header": {
                        "declaration": 2861,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1673:6:24",
                        "valueSize": 1
                      }
                    },
                    {
                      "_headerData": {
                        "declaration": 2855,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1696:11:24",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 2863,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    mstore(header, mload(add(_headerData, 32)))\n    mstore(add(header, 32), mload(add(_headerData, 64)))\n}",
                  "src": "1562:193:24"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2864,
                    "name": "header",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2861,
                    "src": "1756:6:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_OrderHeader_$2853_memory_ptr",
                      "typeString": "struct ExchangeHandler.OrderHeader memory"
                    }
                  },
                  "functionReturnParameters": 2859,
                  "id": 2865,
                  "nodeType": "Return",
                  "src": "1749:13:24"
                }
              ]
            },
            "documentation": "Function to convert bytes into OrderHeader\n     * This will always trail an ExchangeOrderHeader, so we don't need to skip\nthe first 32. See Notes in parseExchangeOrdersHeader\n     * @param _headerData   Bytes representing the order body information\n@return OrderHeader  Struct containing exchange order body data",
            "id": 2867,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "parseOrderHeader",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2856,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2855,
                  "name": "_headerData",
                  "nodeType": "VariableDeclaration",
                  "scope": 2867,
                  "src": "1421:17:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 2854,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1421:5:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1411:33:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 2859,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2858,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2867,
                  "src": "1492:11:24",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_OrderHeader_$2853_memory_ptr",
                    "typeString": "struct ExchangeHandler.OrderHeader"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 2857,
                    "name": "OrderHeader",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 2853,
                    "src": "1492:11:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_OrderHeader_$2853_storage_ptr",
                      "typeString": "struct ExchangeHandler.OrderHeader"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1491:20:24"
            },
            "scope": 2868,
            "src": "1386:383:24",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 2869,
        "src": "811:960:24"
      }
    ],
    "src": "597:1175:24"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-07-07T07:45:08.905Z"
}