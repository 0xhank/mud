/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface IWorldEphemeralInterface extends utils.Interface {
  functions: {
    "emitEphemeralRecord(bytes16,bytes16,bytes32[],bytes)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "emitEphemeralRecord"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "emitEphemeralRecord",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "emitEphemeralRecord",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IWorldEphemeral extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IWorldEphemeralInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    emitEphemeralRecord(
      namespace: PromiseOrValue<BytesLike>,
      name: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  emitEphemeralRecord(
    namespace: PromiseOrValue<BytesLike>,
    name: PromiseOrValue<BytesLike>,
    key: PromiseOrValue<BytesLike>[],
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    emitEphemeralRecord(
      namespace: PromiseOrValue<BytesLike>,
      name: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    emitEphemeralRecord(
      namespace: PromiseOrValue<BytesLike>,
      name: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    emitEphemeralRecord(
      namespace: PromiseOrValue<BytesLike>,
      name: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<BytesLike>[],
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
