/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { SliceLib, SliceLibInterface } from "../../Slice.sol/SliceLib";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "end",
        type: "uint256",
      },
    ],
    name: "Slice_OutOfBounds",
    type: "error",
  },
] as const;

const _bytecode =
  "0x602d6037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080d000a";

type SliceLibConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SliceLibConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SliceLib__factory extends ContractFactory {
  constructor(...args: SliceLibConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SliceLib> {
    return super.deploy(overrides || {}) as Promise<SliceLib>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SliceLib {
    return super.attach(address) as SliceLib;
  }
  override connect(signer: Signer): SliceLib__factory {
    return super.connect(signer) as SliceLib__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SliceLibInterface {
    return new utils.Interface(_abi) as SliceLibInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SliceLib {
    return new Contract(address, _abi, signerOrProvider) as SliceLib;
  }
}
