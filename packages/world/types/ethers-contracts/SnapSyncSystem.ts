/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
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

export type SyncRecordStruct = {
  tableId: PromiseOrValue<BytesLike>;
  keyTuple: PromiseOrValue<BytesLike>[];
  value: PromiseOrValue<BytesLike>;
};

export type SyncRecordStructOutput = [string, string[], string] & {
  tableId: string;
  keyTuple: string[];
  value: string;
};

export interface SnapSyncSystemInterface extends utils.Interface {
  functions: {
    "getNumKeysInTable(bytes32)": FunctionFragment;
    "getRecords(bytes32,uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getNumKeysInTable" | "getRecords"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getNumKeysInTable",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRecords",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getNumKeysInTable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getRecords", data: BytesLike): Result;

  events: {};
}

export interface SnapSyncSystem extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SnapSyncSystemInterface;

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
    getNumKeysInTable(
      tableId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRecords(
      tableId: PromiseOrValue<BytesLike>,
      limit: PromiseOrValue<BigNumberish>,
      offset: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [SyncRecordStructOutput[]] & { records: SyncRecordStructOutput[] }
    >;
  };

  getNumKeysInTable(
    tableId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRecords(
    tableId: PromiseOrValue<BytesLike>,
    limit: PromiseOrValue<BigNumberish>,
    offset: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<SyncRecordStructOutput[]>;

  callStatic: {
    getNumKeysInTable(
      tableId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRecords(
      tableId: PromiseOrValue<BytesLike>,
      limit: PromiseOrValue<BigNumberish>,
      offset: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<SyncRecordStructOutput[]>;
  };

  filters: {};

  estimateGas: {
    getNumKeysInTable(
      tableId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRecords(
      tableId: PromiseOrValue<BytesLike>,
      limit: PromiseOrValue<BigNumberish>,
      offset: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getNumKeysInTable(
      tableId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRecords(
      tableId: PromiseOrValue<BytesLike>,
      limit: PromiseOrValue<BigNumberish>,
      offset: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
