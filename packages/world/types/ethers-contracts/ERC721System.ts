/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
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

export interface ERC721SystemInterface extends utils.Interface {
  functions: {
    "approve(bytes16,address,uint256)": FunctionFragment;
    "balanceOf(bytes16,address)": FunctionFragment;
    "getAddress()": FunctionFragment;
    "getApproved(bytes16,uint256)": FunctionFragment;
    "isApprovedForAll(bytes16,address,address)": FunctionFragment;
    "name(bytes16)": FunctionFragment;
    "ownerOf(bytes16,uint256)": FunctionFragment;
    "proxy(bytes16)": FunctionFragment;
    "safeTransferFrom(bytes16,address,address,uint256)": FunctionFragment;
    "safeTransferFromWithData(bytes16,address,address,uint256,bytes)": FunctionFragment;
    "setApprovalForAll(bytes16,address,bool)": FunctionFragment;
    "symbol(bytes16)": FunctionFragment;
    "tokenURI(bytes16,uint256)": FunctionFragment;
    "totalSupply(bytes16)": FunctionFragment;
    "transferFrom(bytes16,address,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "approve"
      | "balanceOf"
      | "getAddress"
      | "getApproved"
      | "isApprovedForAll"
      | "name"
      | "ownerOf"
      | "proxy"
      | "safeTransferFrom"
      | "safeTransferFromWithData"
      | "setApprovalForAll"
      | "symbol"
      | "tokenURI"
      | "totalSupply"
      | "transferFrom"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "approve",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getApproved",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "name",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "proxy",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFromWithData",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "symbol",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "proxy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFromWithData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ERC721System extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC721SystemInterface;

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
    approve(
      namespace: PromiseOrValue<BytesLike>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    balanceOf(
      namespace: PromiseOrValue<BytesLike>,
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getAddress(overrides?: CallOverrides): Promise<[string]>;

    getApproved(
      namespace: PromiseOrValue<BytesLike>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    isApprovedForAll(
      namespace: PromiseOrValue<BytesLike>,
      owner: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    name(
      namespace: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    ownerOf(
      namespace: PromiseOrValue<BytesLike>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    proxy(
      namespace: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    safeTransferFrom(
      namespace: PromiseOrValue<BytesLike>,
      _from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    safeTransferFromWithData(
      namespace: PromiseOrValue<BytesLike>,
      _from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      namespace: PromiseOrValue<BytesLike>,
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    symbol(
      namespace: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    tokenURI(
      namespace: PromiseOrValue<BytesLike>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    totalSupply(
      namespace: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    transferFrom(
      namespace: PromiseOrValue<BytesLike>,
      _from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  approve(
    namespace: PromiseOrValue<BytesLike>,
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  balanceOf(
    namespace: PromiseOrValue<BytesLike>,
    owner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAddress(overrides?: CallOverrides): Promise<string>;

  getApproved(
    namespace: PromiseOrValue<BytesLike>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  isApprovedForAll(
    namespace: PromiseOrValue<BytesLike>,
    owner: PromiseOrValue<string>,
    operator: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  name(
    namespace: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  ownerOf(
    namespace: PromiseOrValue<BytesLike>,
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  proxy(
    namespace: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  safeTransferFrom(
    namespace: PromiseOrValue<BytesLike>,
    _from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  safeTransferFromWithData(
    namespace: PromiseOrValue<BytesLike>,
    _from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    namespace: PromiseOrValue<BytesLike>,
    operator: PromiseOrValue<string>,
    approved: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  symbol(
    namespace: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  tokenURI(
    namespace: PromiseOrValue<BytesLike>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  totalSupply(
    namespace: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  transferFrom(
    namespace: PromiseOrValue<BytesLike>,
    _from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    approve(
      namespace: PromiseOrValue<BytesLike>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(
      namespace: PromiseOrValue<BytesLike>,
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAddress(overrides?: CallOverrides): Promise<string>;

    getApproved(
      namespace: PromiseOrValue<BytesLike>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    isApprovedForAll(
      namespace: PromiseOrValue<BytesLike>,
      owner: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    name(
      namespace: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    ownerOf(
      namespace: PromiseOrValue<BytesLike>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    proxy(
      namespace: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    safeTransferFrom(
      namespace: PromiseOrValue<BytesLike>,
      _from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    safeTransferFromWithData(
      namespace: PromiseOrValue<BytesLike>,
      _from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setApprovalForAll(
      namespace: PromiseOrValue<BytesLike>,
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    symbol(
      namespace: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    tokenURI(
      namespace: PromiseOrValue<BytesLike>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    totalSupply(
      namespace: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferFrom(
      namespace: PromiseOrValue<BytesLike>,
      _from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    approve(
      namespace: PromiseOrValue<BytesLike>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    balanceOf(
      namespace: PromiseOrValue<BytesLike>,
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAddress(overrides?: CallOverrides): Promise<BigNumber>;

    getApproved(
      namespace: PromiseOrValue<BytesLike>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isApprovedForAll(
      namespace: PromiseOrValue<BytesLike>,
      owner: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(
      namespace: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ownerOf(
      namespace: PromiseOrValue<BytesLike>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proxy(
      namespace: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    safeTransferFrom(
      namespace: PromiseOrValue<BytesLike>,
      _from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    safeTransferFromWithData(
      namespace: PromiseOrValue<BytesLike>,
      _from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setApprovalForAll(
      namespace: PromiseOrValue<BytesLike>,
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    symbol(
      namespace: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenURI(
      namespace: PromiseOrValue<BytesLike>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSupply(
      namespace: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferFrom(
      namespace: PromiseOrValue<BytesLike>,
      _from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approve(
      namespace: PromiseOrValue<BytesLike>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      namespace: PromiseOrValue<BytesLike>,
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getApproved(
      namespace: PromiseOrValue<BytesLike>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isApprovedForAll(
      namespace: PromiseOrValue<BytesLike>,
      owner: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    name(
      namespace: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ownerOf(
      namespace: PromiseOrValue<BytesLike>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proxy(
      namespace: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    safeTransferFrom(
      namespace: PromiseOrValue<BytesLike>,
      _from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    safeTransferFromWithData(
      namespace: PromiseOrValue<BytesLike>,
      _from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      namespace: PromiseOrValue<BytesLike>,
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    symbol(
      namespace: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenURI(
      namespace: PromiseOrValue<BytesLike>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalSupply(
      namespace: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferFrom(
      namespace: PromiseOrValue<BytesLike>,
      _from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
