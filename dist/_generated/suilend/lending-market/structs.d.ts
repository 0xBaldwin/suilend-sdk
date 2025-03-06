import * as reified from "../../_framework/reified";
import { TypeName } from "../../_dependencies/source/0x1/type-name/structs";
import { ObjectTable } from "../../_dependencies/source/0x2/object-table/structs";
import { ID, UID } from "../../_dependencies/source/0x2/object/structs";
import { PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, ToTypeStr as ToPhantom } from "../../_framework/reified";
import { FieldsWithTypes } from "../../_framework/util";
import { Vector } from "../../_framework/vector";
import { Decimal } from "../decimal/structs";
import { PKG_V1, PKG_V10 } from "../index";
import { Obligation } from "../obligation/structs";
import { RateLimiter } from "../rate-limiter/structs";
import { Reserve } from "../reserve/structs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
export declare function isMintEvent(type: string): boolean;
export interface MintEventFields {
    lendingMarketId: ToField<"address">;
    coinType: ToField<TypeName>;
    reserveId: ToField<"address">;
    liquidityAmount: ToField<"u64">;
    ctokenAmount: ToField<"u64">;
}
export type MintEventReified = Reified<MintEvent, MintEventFields>;
export declare class MintEvent implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::lending_market::MintEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly lendingMarketId: ToField<"address">;
    readonly coinType: ToField<TypeName>;
    readonly reserveId: ToField<"address">;
    readonly liquidityAmount: ToField<"u64">;
    readonly ctokenAmount: ToField<"u64">;
    private constructor();
    static reified(): MintEventReified;
    static get r(): reified.StructClassReified<MintEvent, MintEventFields>;
    static phantom(): PhantomReified<ToTypeStr<MintEvent>>;
    static get p(): reified.PhantomReified<"0x1f54a9a2d71799553197e9ea24557797c6398d6a65f2d4d3818c9304b75d5e21::lending_market::MintEvent" | "0xf95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market::MintEvent">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        lending_market_id: string;
        coin_type: {
            name: {
                bytes: number[];
            };
        };
        reserve_id: string;
        liquidity_amount: string;
        ctoken_amount: string;
    }, {
        lending_market_id: string;
        coin_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        reserve_id: string;
        liquidity_amount: string | number | bigint;
        ctoken_amount: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): MintEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): MintEvent;
    static fromBcs(data: Uint8Array): MintEvent;
    toJSONField(): {
        lendingMarketId: string;
        coinType: {
            name: string;
        };
        reserveId: string;
        liquidityAmount: string;
        ctokenAmount: string;
    };
    toJSON(): {
        lendingMarketId: string;
        coinType: {
            name: string;
        };
        reserveId: string;
        liquidityAmount: string;
        ctokenAmount: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): MintEvent;
    static fromJSON(json: Record<string, any>): MintEvent;
    static fromSuiParsedData(content: SuiParsedData): MintEvent;
    static fromSuiObjectData(data: SuiObjectData): MintEvent;
    static fetch(client: SuiClient, id: string): Promise<MintEvent>;
}
export declare function isRedeemEvent(type: string): boolean;
export interface RedeemEventFields {
    lendingMarketId: ToField<"address">;
    coinType: ToField<TypeName>;
    reserveId: ToField<"address">;
    ctokenAmount: ToField<"u64">;
    liquidityAmount: ToField<"u64">;
}
export type RedeemEventReified = Reified<RedeemEvent, RedeemEventFields>;
export declare class RedeemEvent implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::lending_market::RedeemEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly lendingMarketId: ToField<"address">;
    readonly coinType: ToField<TypeName>;
    readonly reserveId: ToField<"address">;
    readonly ctokenAmount: ToField<"u64">;
    readonly liquidityAmount: ToField<"u64">;
    private constructor();
    static reified(): RedeemEventReified;
    static get r(): reified.StructClassReified<RedeemEvent, RedeemEventFields>;
    static phantom(): PhantomReified<ToTypeStr<RedeemEvent>>;
    static get p(): reified.PhantomReified<"0x1f54a9a2d71799553197e9ea24557797c6398d6a65f2d4d3818c9304b75d5e21::lending_market::RedeemEvent" | "0xf95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market::RedeemEvent">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        lending_market_id: string;
        coin_type: {
            name: {
                bytes: number[];
            };
        };
        reserve_id: string;
        ctoken_amount: string;
        liquidity_amount: string;
    }, {
        lending_market_id: string;
        coin_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        reserve_id: string;
        ctoken_amount: string | number | bigint;
        liquidity_amount: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): RedeemEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): RedeemEvent;
    static fromBcs(data: Uint8Array): RedeemEvent;
    toJSONField(): {
        lendingMarketId: string;
        coinType: {
            name: string;
        };
        reserveId: string;
        ctokenAmount: string;
        liquidityAmount: string;
    };
    toJSON(): {
        lendingMarketId: string;
        coinType: {
            name: string;
        };
        reserveId: string;
        ctokenAmount: string;
        liquidityAmount: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): RedeemEvent;
    static fromJSON(json: Record<string, any>): RedeemEvent;
    static fromSuiParsedData(content: SuiParsedData): RedeemEvent;
    static fromSuiObjectData(data: SuiObjectData): RedeemEvent;
    static fetch(client: SuiClient, id: string): Promise<RedeemEvent>;
}
export declare function isBorrowEvent(type: string): boolean;
export interface BorrowEventFields {
    lendingMarketId: ToField<"address">;
    coinType: ToField<TypeName>;
    reserveId: ToField<"address">;
    obligationId: ToField<"address">;
    liquidityAmount: ToField<"u64">;
    originationFeeAmount: ToField<"u64">;
}
export type BorrowEventReified = Reified<BorrowEvent, BorrowEventFields>;
export declare class BorrowEvent implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::lending_market::BorrowEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly lendingMarketId: ToField<"address">;
    readonly coinType: ToField<TypeName>;
    readonly reserveId: ToField<"address">;
    readonly obligationId: ToField<"address">;
    readonly liquidityAmount: ToField<"u64">;
    readonly originationFeeAmount: ToField<"u64">;
    private constructor();
    static reified(): BorrowEventReified;
    static get r(): reified.StructClassReified<BorrowEvent, BorrowEventFields>;
    static phantom(): PhantomReified<ToTypeStr<BorrowEvent>>;
    static get p(): reified.PhantomReified<"0x1f54a9a2d71799553197e9ea24557797c6398d6a65f2d4d3818c9304b75d5e21::lending_market::BorrowEvent" | "0xf95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market::BorrowEvent">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        lending_market_id: string;
        coin_type: {
            name: {
                bytes: number[];
            };
        };
        reserve_id: string;
        obligation_id: string;
        liquidity_amount: string;
        origination_fee_amount: string;
    }, {
        lending_market_id: string;
        coin_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        reserve_id: string;
        obligation_id: string;
        liquidity_amount: string | number | bigint;
        origination_fee_amount: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): BorrowEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): BorrowEvent;
    static fromBcs(data: Uint8Array): BorrowEvent;
    toJSONField(): {
        lendingMarketId: string;
        coinType: {
            name: string;
        };
        reserveId: string;
        obligationId: string;
        liquidityAmount: string;
        originationFeeAmount: string;
    };
    toJSON(): {
        lendingMarketId: string;
        coinType: {
            name: string;
        };
        reserveId: string;
        obligationId: string;
        liquidityAmount: string;
        originationFeeAmount: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): BorrowEvent;
    static fromJSON(json: Record<string, any>): BorrowEvent;
    static fromSuiParsedData(content: SuiParsedData): BorrowEvent;
    static fromSuiObjectData(data: SuiObjectData): BorrowEvent;
    static fetch(client: SuiClient, id: string): Promise<BorrowEvent>;
}
export declare function isClaimRewardEvent(type: string): boolean;
export interface ClaimRewardEventFields {
    lendingMarketId: ToField<"address">;
    reserveId: ToField<"address">;
    obligationId: ToField<"address">;
    isDepositReward: ToField<"bool">;
    poolRewardId: ToField<"address">;
    coinType: ToField<TypeName>;
    liquidityAmount: ToField<"u64">;
}
export type ClaimRewardEventReified = Reified<ClaimRewardEvent, ClaimRewardEventFields>;
export declare class ClaimRewardEvent implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::lending_market::ClaimRewardEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly lendingMarketId: ToField<"address">;
    readonly reserveId: ToField<"address">;
    readonly obligationId: ToField<"address">;
    readonly isDepositReward: ToField<"bool">;
    readonly poolRewardId: ToField<"address">;
    readonly coinType: ToField<TypeName>;
    readonly liquidityAmount: ToField<"u64">;
    private constructor();
    static reified(): ClaimRewardEventReified;
    static get r(): reified.StructClassReified<ClaimRewardEvent, ClaimRewardEventFields>;
    static phantom(): PhantomReified<ToTypeStr<ClaimRewardEvent>>;
    static get p(): reified.PhantomReified<"0x1f54a9a2d71799553197e9ea24557797c6398d6a65f2d4d3818c9304b75d5e21::lending_market::ClaimRewardEvent" | "0xf95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market::ClaimRewardEvent">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        lending_market_id: string;
        reserve_id: string;
        obligation_id: string;
        is_deposit_reward: boolean;
        pool_reward_id: string;
        coin_type: {
            name: {
                bytes: number[];
            };
        };
        liquidity_amount: string;
    }, {
        lending_market_id: string;
        reserve_id: string;
        obligation_id: string;
        is_deposit_reward: boolean;
        pool_reward_id: string;
        coin_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        liquidity_amount: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): ClaimRewardEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): ClaimRewardEvent;
    static fromBcs(data: Uint8Array): ClaimRewardEvent;
    toJSONField(): {
        lendingMarketId: string;
        reserveId: string;
        obligationId: string;
        isDepositReward: boolean;
        poolRewardId: string;
        coinType: {
            name: string;
        };
        liquidityAmount: string;
    };
    toJSON(): {
        lendingMarketId: string;
        reserveId: string;
        obligationId: string;
        isDepositReward: boolean;
        poolRewardId: string;
        coinType: {
            name: string;
        };
        liquidityAmount: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ClaimRewardEvent;
    static fromJSON(json: Record<string, any>): ClaimRewardEvent;
    static fromSuiParsedData(content: SuiParsedData): ClaimRewardEvent;
    static fromSuiObjectData(data: SuiObjectData): ClaimRewardEvent;
    static fetch(client: SuiClient, id: string): Promise<ClaimRewardEvent>;
}
export declare function isDepositEvent(type: string): boolean;
export interface DepositEventFields {
    lendingMarketId: ToField<"address">;
    coinType: ToField<TypeName>;
    reserveId: ToField<"address">;
    obligationId: ToField<"address">;
    ctokenAmount: ToField<"u64">;
}
export type DepositEventReified = Reified<DepositEvent, DepositEventFields>;
export declare class DepositEvent implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::lending_market::DepositEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly lendingMarketId: ToField<"address">;
    readonly coinType: ToField<TypeName>;
    readonly reserveId: ToField<"address">;
    readonly obligationId: ToField<"address">;
    readonly ctokenAmount: ToField<"u64">;
    private constructor();
    static reified(): DepositEventReified;
    static get r(): reified.StructClassReified<DepositEvent, DepositEventFields>;
    static phantom(): PhantomReified<ToTypeStr<DepositEvent>>;
    static get p(): reified.PhantomReified<"0x1f54a9a2d71799553197e9ea24557797c6398d6a65f2d4d3818c9304b75d5e21::lending_market::DepositEvent" | "0xf95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market::DepositEvent">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        lending_market_id: string;
        coin_type: {
            name: {
                bytes: number[];
            };
        };
        reserve_id: string;
        obligation_id: string;
        ctoken_amount: string;
    }, {
        lending_market_id: string;
        coin_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        reserve_id: string;
        obligation_id: string;
        ctoken_amount: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): DepositEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): DepositEvent;
    static fromBcs(data: Uint8Array): DepositEvent;
    toJSONField(): {
        lendingMarketId: string;
        coinType: {
            name: string;
        };
        reserveId: string;
        obligationId: string;
        ctokenAmount: string;
    };
    toJSON(): {
        lendingMarketId: string;
        coinType: {
            name: string;
        };
        reserveId: string;
        obligationId: string;
        ctokenAmount: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): DepositEvent;
    static fromJSON(json: Record<string, any>): DepositEvent;
    static fromSuiParsedData(content: SuiParsedData): DepositEvent;
    static fromSuiObjectData(data: SuiObjectData): DepositEvent;
    static fetch(client: SuiClient, id: string): Promise<DepositEvent>;
}
export declare function isFeeReceivers(type: string): boolean;
export interface FeeReceiversFields {
    receivers: ToField<Vector<"address">>;
    weights: ToField<Vector<"u64">>;
    totalWeight: ToField<"u64">;
}
export type FeeReceiversReified = Reified<FeeReceivers, FeeReceiversFields>;
export declare class FeeReceivers implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V10}::lending_market::FeeReceivers`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly receivers: ToField<Vector<"address">>;
    readonly weights: ToField<Vector<"u64">>;
    readonly totalWeight: ToField<"u64">;
    private constructor();
    static reified(): FeeReceiversReified;
    static get r(): reified.StructClassReified<FeeReceivers, FeeReceiversFields>;
    static phantom(): PhantomReified<ToTypeStr<FeeReceivers>>;
    static get p(): reified.PhantomReified<"0xe37cc7bb50fd9b6dbd3873df66fa2c554e973697f50ef97707311dc78bd08444::lending_market::FeeReceivers" | "0xe5ed361add4433f4d23e56fc0e3bacab39b93592d5e65d508e33fd19ff696669::lending_market::FeeReceivers">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        receivers: string[];
        weights: string[];
        total_weight: string;
    }, {
        receivers: Iterable<string> & {
            length: number;
        };
        weights: Iterable<string | number | bigint> & {
            length: number;
        };
        total_weight: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): FeeReceivers;
    static fromFieldsWithTypes(item: FieldsWithTypes): FeeReceivers;
    static fromBcs(data: Uint8Array): FeeReceivers;
    toJSONField(): {
        receivers: string[];
        weights: string[];
        totalWeight: string;
    };
    toJSON(): {
        receivers: string[];
        weights: string[];
        totalWeight: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): FeeReceivers;
    static fromJSON(json: Record<string, any>): FeeReceivers;
    static fromSuiParsedData(content: SuiParsedData): FeeReceivers;
    static fromSuiObjectData(data: SuiObjectData): FeeReceivers;
    static fetch(client: SuiClient, id: string): Promise<FeeReceivers>;
}
export declare function isFeeReceiversKey(type: string): boolean;
export interface FeeReceiversKeyFields {
    dummyField: ToField<"bool">;
}
export type FeeReceiversKeyReified = Reified<FeeReceiversKey, FeeReceiversKeyFields>;
export declare class FeeReceiversKey implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V10}::lending_market::FeeReceiversKey`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): FeeReceiversKeyReified;
    static get r(): reified.StructClassReified<FeeReceiversKey, FeeReceiversKeyFields>;
    static phantom(): PhantomReified<ToTypeStr<FeeReceiversKey>>;
    static get p(): reified.PhantomReified<"0xe37cc7bb50fd9b6dbd3873df66fa2c554e973697f50ef97707311dc78bd08444::lending_market::FeeReceiversKey" | "0xe5ed361add4433f4d23e56fc0e3bacab39b93592d5e65d508e33fd19ff696669::lending_market::FeeReceiversKey">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields(fields: Record<string, any>): FeeReceiversKey;
    static fromFieldsWithTypes(item: FieldsWithTypes): FeeReceiversKey;
    static fromBcs(data: Uint8Array): FeeReceiversKey;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): FeeReceiversKey;
    static fromJSON(json: Record<string, any>): FeeReceiversKey;
    static fromSuiParsedData(content: SuiParsedData): FeeReceiversKey;
    static fromSuiObjectData(data: SuiObjectData): FeeReceiversKey;
    static fetch(client: SuiClient, id: string): Promise<FeeReceiversKey>;
}
export declare function isForgiveEvent(type: string): boolean;
export interface ForgiveEventFields {
    lendingMarketId: ToField<"address">;
    coinType: ToField<TypeName>;
    reserveId: ToField<"address">;
    obligationId: ToField<"address">;
    liquidityAmount: ToField<"u64">;
}
export type ForgiveEventReified = Reified<ForgiveEvent, ForgiveEventFields>;
export declare class ForgiveEvent implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::lending_market::ForgiveEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly lendingMarketId: ToField<"address">;
    readonly coinType: ToField<TypeName>;
    readonly reserveId: ToField<"address">;
    readonly obligationId: ToField<"address">;
    readonly liquidityAmount: ToField<"u64">;
    private constructor();
    static reified(): ForgiveEventReified;
    static get r(): reified.StructClassReified<ForgiveEvent, ForgiveEventFields>;
    static phantom(): PhantomReified<ToTypeStr<ForgiveEvent>>;
    static get p(): reified.PhantomReified<"0x1f54a9a2d71799553197e9ea24557797c6398d6a65f2d4d3818c9304b75d5e21::lending_market::ForgiveEvent" | "0xf95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market::ForgiveEvent">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        lending_market_id: string;
        coin_type: {
            name: {
                bytes: number[];
            };
        };
        reserve_id: string;
        obligation_id: string;
        liquidity_amount: string;
    }, {
        lending_market_id: string;
        coin_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        reserve_id: string;
        obligation_id: string;
        liquidity_amount: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): ForgiveEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): ForgiveEvent;
    static fromBcs(data: Uint8Array): ForgiveEvent;
    toJSONField(): {
        lendingMarketId: string;
        coinType: {
            name: string;
        };
        reserveId: string;
        obligationId: string;
        liquidityAmount: string;
    };
    toJSON(): {
        lendingMarketId: string;
        coinType: {
            name: string;
        };
        reserveId: string;
        obligationId: string;
        liquidityAmount: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ForgiveEvent;
    static fromJSON(json: Record<string, any>): ForgiveEvent;
    static fromSuiParsedData(content: SuiParsedData): ForgiveEvent;
    static fromSuiObjectData(data: SuiObjectData): ForgiveEvent;
    static fetch(client: SuiClient, id: string): Promise<ForgiveEvent>;
}
export declare function isLENDING_MARKET(type: string): boolean;
export interface LENDING_MARKETFields {
    dummyField: ToField<"bool">;
}
export type LENDING_MARKETReified = Reified<LENDING_MARKET, LENDING_MARKETFields>;
export declare class LENDING_MARKET implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::lending_market::LENDING_MARKET`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): LENDING_MARKETReified;
    static get r(): reified.StructClassReified<LENDING_MARKET, LENDING_MARKETFields>;
    static phantom(): PhantomReified<ToTypeStr<LENDING_MARKET>>;
    static get p(): reified.PhantomReified<"0x1f54a9a2d71799553197e9ea24557797c6398d6a65f2d4d3818c9304b75d5e21::lending_market::LENDING_MARKET" | "0xf95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market::LENDING_MARKET">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields(fields: Record<string, any>): LENDING_MARKET;
    static fromFieldsWithTypes(item: FieldsWithTypes): LENDING_MARKET;
    static fromBcs(data: Uint8Array): LENDING_MARKET;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): LENDING_MARKET;
    static fromJSON(json: Record<string, any>): LENDING_MARKET;
    static fromSuiParsedData(content: SuiParsedData): LENDING_MARKET;
    static fromSuiObjectData(data: SuiObjectData): LENDING_MARKET;
    static fetch(client: SuiClient, id: string): Promise<LENDING_MARKET>;
}
export declare function isLendingMarket(type: string): boolean;
export interface LendingMarketFields<P extends PhantomTypeArgument> {
    id: ToField<UID>;
    version: ToField<"u64">;
    reserves: ToField<Vector<Reserve<P>>>;
    obligations: ToField<ObjectTable<ToPhantom<ID>, ToPhantom<Obligation<P>>>>;
    rateLimiter: ToField<RateLimiter>;
    feeReceiver: ToField<"address">;
    badDebtUsd: ToField<Decimal>;
    badDebtLimitUsd: ToField<Decimal>;
}
export type LendingMarketReified<P extends PhantomTypeArgument> = Reified<LendingMarket<P>, LendingMarketFields<P>>;
export declare class LendingMarket<P extends PhantomTypeArgument> implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 1;
    static readonly $isPhantom: readonly [true];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::lending_market::LendingMarket<${PhantomToTypeStr<P>}>`;
    readonly $typeArgs: [PhantomToTypeStr<P>];
    readonly $isPhantom: readonly [true];
    readonly id: ToField<UID>;
    readonly version: ToField<"u64">;
    readonly reserves: ToField<Vector<Reserve<P>>>;
    readonly obligations: ToField<ObjectTable<ToPhantom<ID>, ToPhantom<Obligation<P>>>>;
    readonly rateLimiter: ToField<RateLimiter>;
    readonly feeReceiver: ToField<"address">;
    readonly badDebtUsd: ToField<Decimal>;
    readonly badDebtLimitUsd: ToField<Decimal>;
    private constructor();
    static reified<P extends PhantomReified<PhantomTypeArgument>>(P: P): LendingMarketReified<ToPhantomTypeArgument<P>>;
    static get r(): typeof LendingMarket.reified;
    static phantom<P extends PhantomReified<PhantomTypeArgument>>(P: P): PhantomReified<ToTypeStr<LendingMarket<ToPhantomTypeArgument<P>>>>;
    static get p(): typeof LendingMarket.phantom;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        version: string;
        reserves: {
            id: {
                id: {
                    bytes: string;
                };
            };
            lending_market_id: {
                bytes: string;
            };
            array_index: string;
            coin_type: {
                name: {
                    bytes: number[];
                };
            };
            config: {
                element: {
                    vec: any[];
                };
            };
            mint_decimals: number;
            price_identifier: {
                bytes: number[];
            };
            price: {
                value: string;
            };
            smoothed_price: {
                value: string;
            };
            price_last_update_timestamp_s: string;
            available_amount: string;
            ctoken_supply: string;
            borrowed_amount: {
                value: string;
            };
            cumulative_borrow_rate: {
                value: string;
            };
            interest_last_update_timestamp_s: string;
            unclaimed_spread_fees: {
                value: string;
            };
            attributed_borrow_value: {
                value: string;
            };
            deposits_pool_reward_manager: {
                id: {
                    id: {
                        bytes: string;
                    };
                };
                total_shares: string;
                pool_rewards: {
                    vec: any[];
                }[];
                last_update_time_ms: string;
            };
            borrows_pool_reward_manager: {
                id: {
                    id: {
                        bytes: string;
                    };
                };
                total_shares: string;
                pool_rewards: {
                    vec: any[];
                }[];
                last_update_time_ms: string;
            };
        }[];
        obligations: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string;
        };
        rate_limiter: {
            config: {
                window_duration: string;
                max_outflow: string;
            };
            prev_qty: {
                value: string;
            };
            window_start: string;
            cur_qty: {
                value: string;
            };
        };
        fee_receiver: string;
        bad_debt_usd: {
            value: string;
        };
        bad_debt_limit_usd: {
            value: string;
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        version: string | number | bigint;
        reserves: Iterable<{
            id: {
                id: {
                    bytes: string;
                };
            };
            lending_market_id: {
                bytes: string;
            };
            array_index: string | number | bigint;
            coin_type: {
                name: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
            config: {
                element: {
                    vec: Iterable<any> & {
                        length: number;
                    };
                };
            };
            mint_decimals: number;
            price_identifier: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
            price: {
                value: string | number | bigint;
            };
            smoothed_price: {
                value: string | number | bigint;
            };
            price_last_update_timestamp_s: string | number | bigint;
            available_amount: string | number | bigint;
            ctoken_supply: string | number | bigint;
            borrowed_amount: {
                value: string | number | bigint;
            };
            cumulative_borrow_rate: {
                value: string | number | bigint;
            };
            interest_last_update_timestamp_s: string | number | bigint;
            unclaimed_spread_fees: {
                value: string | number | bigint;
            };
            attributed_borrow_value: {
                value: string | number | bigint;
            };
            deposits_pool_reward_manager: {
                id: {
                    id: {
                        bytes: string;
                    };
                };
                total_shares: string | number | bigint;
                pool_rewards: Iterable<{
                    vec: Iterable<any> & {
                        length: number;
                    };
                }> & {
                    length: number;
                };
                last_update_time_ms: string | number | bigint;
            };
            borrows_pool_reward_manager: {
                id: {
                    id: {
                        bytes: string;
                    };
                };
                total_shares: string | number | bigint;
                pool_rewards: Iterable<{
                    vec: Iterable<any> & {
                        length: number;
                    };
                }> & {
                    length: number;
                };
                last_update_time_ms: string | number | bigint;
            };
        }> & {
            length: number;
        };
        obligations: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string | number | bigint;
        };
        rate_limiter: {
            config: {
                window_duration: string | number | bigint;
                max_outflow: string | number | bigint;
            };
            prev_qty: {
                value: string | number | bigint;
            };
            window_start: string | number | bigint;
            cur_qty: {
                value: string | number | bigint;
            };
        };
        fee_receiver: string;
        bad_debt_usd: {
            value: string | number | bigint;
        };
        bad_debt_limit_usd: {
            value: string | number | bigint;
        };
    }>;
    static fromFields<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, fields: Record<string, any>): LendingMarket<ToPhantomTypeArgument<P>>;
    static fromFieldsWithTypes<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, item: FieldsWithTypes): LendingMarket<ToPhantomTypeArgument<P>>;
    static fromBcs<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, data: Uint8Array): LendingMarket<ToPhantomTypeArgument<P>>;
    toJSONField(): {
        id: string;
        version: string;
        reserves: {
            id: string;
            lendingMarketId: string;
            arrayIndex: string;
            coinType: {
                name: string;
            };
            config: {
                element: {
                    openLtvPct: number;
                    closeLtvPct: number;
                    maxCloseLtvPct: number;
                    borrowWeightBps: string;
                    depositLimit: string;
                    borrowLimit: string;
                    liquidationBonusBps: string;
                    maxLiquidationBonusBps: string;
                    depositLimitUsd: string;
                    borrowLimitUsd: string;
                    interestRateUtils: number[];
                    interestRateAprs: string[];
                    borrowFeeBps: string;
                    spreadFeeBps: string;
                    protocolLiquidationFeeBps: string;
                    isolated: boolean;
                    openAttributedBorrowLimitUsd: string;
                    closeAttributedBorrowLimitUsd: string;
                    additionalFields: {
                        id: string;
                        size: string;
                    };
                } | null;
            };
            mintDecimals: number;
            priceIdentifier: {
                bytes: number[];
            };
            price: {
                value: string;
            };
            smoothedPrice: {
                value: string;
            };
            priceLastUpdateTimestampS: string;
            availableAmount: string;
            ctokenSupply: string;
            borrowedAmount: {
                value: string;
            };
            cumulativeBorrowRate: {
                value: string;
            };
            interestLastUpdateTimestampS: string;
            unclaimedSpreadFees: {
                value: string;
            };
            attributedBorrowValue: {
                value: string;
            };
            depositsPoolRewardManager: {
                id: string;
                totalShares: string;
                poolRewards: ({
                    id: string;
                    poolRewardManagerId: string;
                    coinType: {
                        name: string;
                    };
                    startTimeMs: string;
                    endTimeMs: string;
                    totalRewards: string;
                    allocatedRewards: {
                        value: string;
                    };
                    cumulativeRewardsPerShare: {
                        value: string;
                    };
                    numUserRewardManagers: string;
                    additionalFields: {
                        id: string;
                        size: string;
                    };
                } | null)[];
                lastUpdateTimeMs: string;
            };
            borrowsPoolRewardManager: {
                id: string;
                totalShares: string;
                poolRewards: ({
                    id: string;
                    poolRewardManagerId: string;
                    coinType: {
                        name: string;
                    };
                    startTimeMs: string;
                    endTimeMs: string;
                    totalRewards: string;
                    allocatedRewards: {
                        value: string;
                    };
                    cumulativeRewardsPerShare: {
                        value: string;
                    };
                    numUserRewardManagers: string;
                    additionalFields: {
                        id: string;
                        size: string;
                    };
                } | null)[];
                lastUpdateTimeMs: string;
            };
        }[];
        obligations: {
            id: string;
            size: string;
        };
        rateLimiter: {
            config: {
                windowDuration: string;
                maxOutflow: string;
            };
            prevQty: {
                value: string;
            };
            windowStart: string;
            curQty: {
                value: string;
            };
        };
        feeReceiver: string;
        badDebtUsd: {
            value: string;
        };
        badDebtLimitUsd: {
            value: string;
        };
    };
    toJSON(): {
        id: string;
        version: string;
        reserves: {
            id: string;
            lendingMarketId: string;
            arrayIndex: string;
            coinType: {
                name: string;
            };
            config: {
                element: {
                    openLtvPct: number;
                    closeLtvPct: number;
                    maxCloseLtvPct: number;
                    borrowWeightBps: string;
                    depositLimit: string;
                    borrowLimit: string;
                    liquidationBonusBps: string;
                    maxLiquidationBonusBps: string;
                    depositLimitUsd: string;
                    borrowLimitUsd: string;
                    interestRateUtils: number[];
                    interestRateAprs: string[];
                    borrowFeeBps: string;
                    spreadFeeBps: string;
                    protocolLiquidationFeeBps: string;
                    isolated: boolean;
                    openAttributedBorrowLimitUsd: string;
                    closeAttributedBorrowLimitUsd: string;
                    additionalFields: {
                        id: string;
                        size: string;
                    };
                } | null;
            };
            mintDecimals: number;
            priceIdentifier: {
                bytes: number[];
            };
            price: {
                value: string;
            };
            smoothedPrice: {
                value: string;
            };
            priceLastUpdateTimestampS: string;
            availableAmount: string;
            ctokenSupply: string;
            borrowedAmount: {
                value: string;
            };
            cumulativeBorrowRate: {
                value: string;
            };
            interestLastUpdateTimestampS: string;
            unclaimedSpreadFees: {
                value: string;
            };
            attributedBorrowValue: {
                value: string;
            };
            depositsPoolRewardManager: {
                id: string;
                totalShares: string;
                poolRewards: ({
                    id: string;
                    poolRewardManagerId: string;
                    coinType: {
                        name: string;
                    };
                    startTimeMs: string;
                    endTimeMs: string;
                    totalRewards: string;
                    allocatedRewards: {
                        value: string;
                    };
                    cumulativeRewardsPerShare: {
                        value: string;
                    };
                    numUserRewardManagers: string;
                    additionalFields: {
                        id: string;
                        size: string;
                    };
                } | null)[];
                lastUpdateTimeMs: string;
            };
            borrowsPoolRewardManager: {
                id: string;
                totalShares: string;
                poolRewards: ({
                    id: string;
                    poolRewardManagerId: string;
                    coinType: {
                        name: string;
                    };
                    startTimeMs: string;
                    endTimeMs: string;
                    totalRewards: string;
                    allocatedRewards: {
                        value: string;
                    };
                    cumulativeRewardsPerShare: {
                        value: string;
                    };
                    numUserRewardManagers: string;
                    additionalFields: {
                        id: string;
                        size: string;
                    };
                } | null)[];
                lastUpdateTimeMs: string;
            };
        }[];
        obligations: {
            id: string;
            size: string;
        };
        rateLimiter: {
            config: {
                windowDuration: string;
                maxOutflow: string;
            };
            prevQty: {
                value: string;
            };
            windowStart: string;
            curQty: {
                value: string;
            };
        };
        feeReceiver: string;
        badDebtUsd: {
            value: string;
        };
        badDebtLimitUsd: {
            value: string;
        };
        $typeName: string;
        $typeArgs: [reified.PhantomToTypeStr<P>];
    };
    static fromJSONField<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, field: any): LendingMarket<ToPhantomTypeArgument<P>>;
    static fromJSON<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, json: Record<string, any>): LendingMarket<ToPhantomTypeArgument<P>>;
    static fromSuiParsedData<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, content: SuiParsedData): LendingMarket<ToPhantomTypeArgument<P>>;
    static fromSuiObjectData<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, data: SuiObjectData): LendingMarket<ToPhantomTypeArgument<P>>;
    static fetch<P extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: P, id: string): Promise<LendingMarket<ToPhantomTypeArgument<P>>>;
}
export declare function isLendingMarketOwnerCap(type: string): boolean;
export interface LendingMarketOwnerCapFields<P extends PhantomTypeArgument> {
    id: ToField<UID>;
    lendingMarketId: ToField<ID>;
}
export type LendingMarketOwnerCapReified<P extends PhantomTypeArgument> = Reified<LendingMarketOwnerCap<P>, LendingMarketOwnerCapFields<P>>;
export declare class LendingMarketOwnerCap<P extends PhantomTypeArgument> implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 1;
    static readonly $isPhantom: readonly [true];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::lending_market::LendingMarketOwnerCap<${PhantomToTypeStr<P>}>`;
    readonly $typeArgs: [PhantomToTypeStr<P>];
    readonly $isPhantom: readonly [true];
    readonly id: ToField<UID>;
    readonly lendingMarketId: ToField<ID>;
    private constructor();
    static reified<P extends PhantomReified<PhantomTypeArgument>>(P: P): LendingMarketOwnerCapReified<ToPhantomTypeArgument<P>>;
    static get r(): typeof LendingMarketOwnerCap.reified;
    static phantom<P extends PhantomReified<PhantomTypeArgument>>(P: P): PhantomReified<ToTypeStr<LendingMarketOwnerCap<ToPhantomTypeArgument<P>>>>;
    static get p(): typeof LendingMarketOwnerCap.phantom;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        lending_market_id: {
            bytes: string;
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        lending_market_id: {
            bytes: string;
        };
    }>;
    static fromFields<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, fields: Record<string, any>): LendingMarketOwnerCap<ToPhantomTypeArgument<P>>;
    static fromFieldsWithTypes<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, item: FieldsWithTypes): LendingMarketOwnerCap<ToPhantomTypeArgument<P>>;
    static fromBcs<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, data: Uint8Array): LendingMarketOwnerCap<ToPhantomTypeArgument<P>>;
    toJSONField(): {
        id: string;
        lendingMarketId: string;
    };
    toJSON(): {
        id: string;
        lendingMarketId: string;
        $typeName: string;
        $typeArgs: [reified.PhantomToTypeStr<P>];
    };
    static fromJSONField<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, field: any): LendingMarketOwnerCap<ToPhantomTypeArgument<P>>;
    static fromJSON<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, json: Record<string, any>): LendingMarketOwnerCap<ToPhantomTypeArgument<P>>;
    static fromSuiParsedData<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, content: SuiParsedData): LendingMarketOwnerCap<ToPhantomTypeArgument<P>>;
    static fromSuiObjectData<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, data: SuiObjectData): LendingMarketOwnerCap<ToPhantomTypeArgument<P>>;
    static fetch<P extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: P, id: string): Promise<LendingMarketOwnerCap<ToPhantomTypeArgument<P>>>;
}
export declare function isLiquidateEvent(type: string): boolean;
export interface LiquidateEventFields {
    lendingMarketId: ToField<"address">;
    repayReserveId: ToField<"address">;
    withdrawReserveId: ToField<"address">;
    obligationId: ToField<"address">;
    repayCoinType: ToField<TypeName>;
    withdrawCoinType: ToField<TypeName>;
    repayAmount: ToField<"u64">;
    withdrawAmount: ToField<"u64">;
    protocolFeeAmount: ToField<"u64">;
    liquidatorBonusAmount: ToField<"u64">;
}
export type LiquidateEventReified = Reified<LiquidateEvent, LiquidateEventFields>;
export declare class LiquidateEvent implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::lending_market::LiquidateEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly lendingMarketId: ToField<"address">;
    readonly repayReserveId: ToField<"address">;
    readonly withdrawReserveId: ToField<"address">;
    readonly obligationId: ToField<"address">;
    readonly repayCoinType: ToField<TypeName>;
    readonly withdrawCoinType: ToField<TypeName>;
    readonly repayAmount: ToField<"u64">;
    readonly withdrawAmount: ToField<"u64">;
    readonly protocolFeeAmount: ToField<"u64">;
    readonly liquidatorBonusAmount: ToField<"u64">;
    private constructor();
    static reified(): LiquidateEventReified;
    static get r(): reified.StructClassReified<LiquidateEvent, LiquidateEventFields>;
    static phantom(): PhantomReified<ToTypeStr<LiquidateEvent>>;
    static get p(): reified.PhantomReified<"0x1f54a9a2d71799553197e9ea24557797c6398d6a65f2d4d3818c9304b75d5e21::lending_market::LiquidateEvent" | "0xf95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market::LiquidateEvent">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        lending_market_id: string;
        repay_reserve_id: string;
        withdraw_reserve_id: string;
        obligation_id: string;
        repay_coin_type: {
            name: {
                bytes: number[];
            };
        };
        withdraw_coin_type: {
            name: {
                bytes: number[];
            };
        };
        repay_amount: string;
        withdraw_amount: string;
        protocol_fee_amount: string;
        liquidator_bonus_amount: string;
    }, {
        lending_market_id: string;
        repay_reserve_id: string;
        withdraw_reserve_id: string;
        obligation_id: string;
        repay_coin_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        withdraw_coin_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        repay_amount: string | number | bigint;
        withdraw_amount: string | number | bigint;
        protocol_fee_amount: string | number | bigint;
        liquidator_bonus_amount: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): LiquidateEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): LiquidateEvent;
    static fromBcs(data: Uint8Array): LiquidateEvent;
    toJSONField(): {
        lendingMarketId: string;
        repayReserveId: string;
        withdrawReserveId: string;
        obligationId: string;
        repayCoinType: {
            name: string;
        };
        withdrawCoinType: {
            name: string;
        };
        repayAmount: string;
        withdrawAmount: string;
        protocolFeeAmount: string;
        liquidatorBonusAmount: string;
    };
    toJSON(): {
        lendingMarketId: string;
        repayReserveId: string;
        withdrawReserveId: string;
        obligationId: string;
        repayCoinType: {
            name: string;
        };
        withdrawCoinType: {
            name: string;
        };
        repayAmount: string;
        withdrawAmount: string;
        protocolFeeAmount: string;
        liquidatorBonusAmount: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): LiquidateEvent;
    static fromJSON(json: Record<string, any>): LiquidateEvent;
    static fromSuiParsedData(content: SuiParsedData): LiquidateEvent;
    static fromSuiObjectData(data: SuiObjectData): LiquidateEvent;
    static fetch(client: SuiClient, id: string): Promise<LiquidateEvent>;
}
export declare function isObligationOwnerCap(type: string): boolean;
export interface ObligationOwnerCapFields<P extends PhantomTypeArgument> {
    id: ToField<UID>;
    obligationId: ToField<ID>;
}
export type ObligationOwnerCapReified<P extends PhantomTypeArgument> = Reified<ObligationOwnerCap<P>, ObligationOwnerCapFields<P>>;
export declare class ObligationOwnerCap<P extends PhantomTypeArgument> implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 1;
    static readonly $isPhantom: readonly [true];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::lending_market::ObligationOwnerCap<${PhantomToTypeStr<P>}>`;
    readonly $typeArgs: [PhantomToTypeStr<P>];
    readonly $isPhantom: readonly [true];
    readonly id: ToField<UID>;
    readonly obligationId: ToField<ID>;
    private constructor();
    static reified<P extends PhantomReified<PhantomTypeArgument>>(P: P): ObligationOwnerCapReified<ToPhantomTypeArgument<P>>;
    static get r(): typeof ObligationOwnerCap.reified;
    static phantom<P extends PhantomReified<PhantomTypeArgument>>(P: P): PhantomReified<ToTypeStr<ObligationOwnerCap<ToPhantomTypeArgument<P>>>>;
    static get p(): typeof ObligationOwnerCap.phantom;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        obligation_id: {
            bytes: string;
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        obligation_id: {
            bytes: string;
        };
    }>;
    static fromFields<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, fields: Record<string, any>): ObligationOwnerCap<ToPhantomTypeArgument<P>>;
    static fromFieldsWithTypes<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, item: FieldsWithTypes): ObligationOwnerCap<ToPhantomTypeArgument<P>>;
    static fromBcs<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, data: Uint8Array): ObligationOwnerCap<ToPhantomTypeArgument<P>>;
    toJSONField(): {
        id: string;
        obligationId: string;
    };
    toJSON(): {
        id: string;
        obligationId: string;
        $typeName: string;
        $typeArgs: [reified.PhantomToTypeStr<P>];
    };
    static fromJSONField<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, field: any): ObligationOwnerCap<ToPhantomTypeArgument<P>>;
    static fromJSON<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, json: Record<string, any>): ObligationOwnerCap<ToPhantomTypeArgument<P>>;
    static fromSuiParsedData<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, content: SuiParsedData): ObligationOwnerCap<ToPhantomTypeArgument<P>>;
    static fromSuiObjectData<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, data: SuiObjectData): ObligationOwnerCap<ToPhantomTypeArgument<P>>;
    static fetch<P extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: P, id: string): Promise<ObligationOwnerCap<ToPhantomTypeArgument<P>>>;
}
export declare function isRateLimiterExemption(type: string): boolean;
export interface RateLimiterExemptionFields<P extends PhantomTypeArgument, T extends PhantomTypeArgument> {
    amount: ToField<"u64">;
}
export type RateLimiterExemptionReified<P extends PhantomTypeArgument, T extends PhantomTypeArgument> = Reified<RateLimiterExemption<P, T>, RateLimiterExemptionFields<P, T>>;
export declare class RateLimiterExemption<P extends PhantomTypeArgument, T extends PhantomTypeArgument> implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 2;
    static readonly $isPhantom: readonly [true, true];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::lending_market::RateLimiterExemption<${PhantomToTypeStr<P>}, ${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<P>, PhantomToTypeStr<T>];
    readonly $isPhantom: readonly [true, true];
    readonly amount: ToField<"u64">;
    private constructor();
    static reified<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(P: P, T: T): RateLimiterExemptionReified<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>;
    static get r(): typeof RateLimiterExemption.reified;
    static phantom<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(P: P, T: T): PhantomReified<ToTypeStr<RateLimiterExemption<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>>>;
    static get p(): typeof RateLimiterExemption.phantom;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        amount: string;
    }, {
        amount: string | number | bigint;
    }>;
    static fromFields<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(typeArgs: [P, T], fields: Record<string, any>): RateLimiterExemption<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(typeArgs: [P, T], item: FieldsWithTypes): RateLimiterExemption<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>;
    static fromBcs<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(typeArgs: [P, T], data: Uint8Array): RateLimiterExemption<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>;
    toJSONField(): {
        amount: string;
    };
    toJSON(): {
        amount: string;
        $typeName: string;
        $typeArgs: [reified.PhantomToTypeStr<P>, reified.PhantomToTypeStr<T>];
    };
    static fromJSONField<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(typeArgs: [P, T], field: any): RateLimiterExemption<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>;
    static fromJSON<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(typeArgs: [P, T], json: Record<string, any>): RateLimiterExemption<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(typeArgs: [P, T], content: SuiParsedData): RateLimiterExemption<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>;
    static fromSuiObjectData<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(typeArgs: [P, T], data: SuiObjectData): RateLimiterExemption<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>;
    static fetch<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArgs: [P, T], id: string): Promise<RateLimiterExemption<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>>;
}
export declare function isRepayEvent(type: string): boolean;
export interface RepayEventFields {
    lendingMarketId: ToField<"address">;
    coinType: ToField<TypeName>;
    reserveId: ToField<"address">;
    obligationId: ToField<"address">;
    liquidityAmount: ToField<"u64">;
}
export type RepayEventReified = Reified<RepayEvent, RepayEventFields>;
export declare class RepayEvent implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::lending_market::RepayEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly lendingMarketId: ToField<"address">;
    readonly coinType: ToField<TypeName>;
    readonly reserveId: ToField<"address">;
    readonly obligationId: ToField<"address">;
    readonly liquidityAmount: ToField<"u64">;
    private constructor();
    static reified(): RepayEventReified;
    static get r(): reified.StructClassReified<RepayEvent, RepayEventFields>;
    static phantom(): PhantomReified<ToTypeStr<RepayEvent>>;
    static get p(): reified.PhantomReified<"0x1f54a9a2d71799553197e9ea24557797c6398d6a65f2d4d3818c9304b75d5e21::lending_market::RepayEvent" | "0xf95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market::RepayEvent">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        lending_market_id: string;
        coin_type: {
            name: {
                bytes: number[];
            };
        };
        reserve_id: string;
        obligation_id: string;
        liquidity_amount: string;
    }, {
        lending_market_id: string;
        coin_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        reserve_id: string;
        obligation_id: string;
        liquidity_amount: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): RepayEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): RepayEvent;
    static fromBcs(data: Uint8Array): RepayEvent;
    toJSONField(): {
        lendingMarketId: string;
        coinType: {
            name: string;
        };
        reserveId: string;
        obligationId: string;
        liquidityAmount: string;
    };
    toJSON(): {
        lendingMarketId: string;
        coinType: {
            name: string;
        };
        reserveId: string;
        obligationId: string;
        liquidityAmount: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): RepayEvent;
    static fromJSON(json: Record<string, any>): RepayEvent;
    static fromSuiParsedData(content: SuiParsedData): RepayEvent;
    static fromSuiObjectData(data: SuiObjectData): RepayEvent;
    static fetch(client: SuiClient, id: string): Promise<RepayEvent>;
}
export declare function isWithdrawEvent(type: string): boolean;
export interface WithdrawEventFields {
    lendingMarketId: ToField<"address">;
    coinType: ToField<TypeName>;
    reserveId: ToField<"address">;
    obligationId: ToField<"address">;
    ctokenAmount: ToField<"u64">;
}
export type WithdrawEventReified = Reified<WithdrawEvent, WithdrawEventFields>;
export declare class WithdrawEvent implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::lending_market::WithdrawEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly lendingMarketId: ToField<"address">;
    readonly coinType: ToField<TypeName>;
    readonly reserveId: ToField<"address">;
    readonly obligationId: ToField<"address">;
    readonly ctokenAmount: ToField<"u64">;
    private constructor();
    static reified(): WithdrawEventReified;
    static get r(): reified.StructClassReified<WithdrawEvent, WithdrawEventFields>;
    static phantom(): PhantomReified<ToTypeStr<WithdrawEvent>>;
    static get p(): reified.PhantomReified<"0x1f54a9a2d71799553197e9ea24557797c6398d6a65f2d4d3818c9304b75d5e21::lending_market::WithdrawEvent" | "0xf95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market::WithdrawEvent">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        lending_market_id: string;
        coin_type: {
            name: {
                bytes: number[];
            };
        };
        reserve_id: string;
        obligation_id: string;
        ctoken_amount: string;
    }, {
        lending_market_id: string;
        coin_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        reserve_id: string;
        obligation_id: string;
        ctoken_amount: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): WithdrawEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): WithdrawEvent;
    static fromBcs(data: Uint8Array): WithdrawEvent;
    toJSONField(): {
        lendingMarketId: string;
        coinType: {
            name: string;
        };
        reserveId: string;
        obligationId: string;
        ctokenAmount: string;
    };
    toJSON(): {
        lendingMarketId: string;
        coinType: {
            name: string;
        };
        reserveId: string;
        obligationId: string;
        ctokenAmount: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): WithdrawEvent;
    static fromJSON(json: Record<string, any>): WithdrawEvent;
    static fromSuiParsedData(content: SuiParsedData): WithdrawEvent;
    static fromSuiObjectData(data: SuiObjectData): WithdrawEvent;
    static fetch(client: SuiClient, id: string): Promise<WithdrawEvent>;
}
