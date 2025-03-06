import * as reified from "../../_framework/reified";
import { TypeName } from "../../_dependencies/source/0x1/type-name/structs";
import { Balance, Supply } from "../../_dependencies/source/0x2/balance/structs";
import { ID, UID } from "../../_dependencies/source/0x2/object/structs";
import { PriceIdentifier } from "../../_dependencies/source/0x8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e/price-identifier/structs";
import { PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, ToTypeStr as ToPhantom } from "../../_framework/reified";
import { FieldsWithTypes } from "../../_framework/util";
import { Cell } from "../cell/structs";
import { Decimal } from "../decimal/structs";
import { PKG_V1, PKG_V8 } from "../index";
import { PoolRewardManager } from "../liquidity-mining/structs";
import { ReserveConfig } from "../reserve-config/structs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
export declare function isBalanceKey(type: string): boolean;
export interface BalanceKeyFields {
    dummyField: ToField<"bool">;
}
export type BalanceKeyReified = Reified<BalanceKey, BalanceKeyFields>;
export declare class BalanceKey implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::reserve::BalanceKey`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): BalanceKeyReified;
    static get r(): reified.StructClassReified<BalanceKey, BalanceKeyFields>;
    static phantom(): PhantomReified<ToTypeStr<BalanceKey>>;
    static get p(): reified.PhantomReified<"0x1f54a9a2d71799553197e9ea24557797c6398d6a65f2d4d3818c9304b75d5e21::reserve::BalanceKey" | "0xf95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve::BalanceKey">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields(fields: Record<string, any>): BalanceKey;
    static fromFieldsWithTypes(item: FieldsWithTypes): BalanceKey;
    static fromBcs(data: Uint8Array): BalanceKey;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): BalanceKey;
    static fromJSON(json: Record<string, any>): BalanceKey;
    static fromSuiParsedData(content: SuiParsedData): BalanceKey;
    static fromSuiObjectData(data: SuiObjectData): BalanceKey;
    static fetch(client: SuiClient, id: string): Promise<BalanceKey>;
}
export declare function isBalances(type: string): boolean;
export interface BalancesFields<P extends PhantomTypeArgument, T extends PhantomTypeArgument> {
    availableAmount: ToField<Balance<T>>;
    ctokenSupply: ToField<Supply<ToPhantom<CToken<P, T>>>>;
    fees: ToField<Balance<T>>;
    ctokenFees: ToField<Balance<ToPhantom<CToken<P, T>>>>;
    depositedCtokens: ToField<Balance<ToPhantom<CToken<P, T>>>>;
}
export type BalancesReified<P extends PhantomTypeArgument, T extends PhantomTypeArgument> = Reified<Balances<P, T>, BalancesFields<P, T>>;
export declare class Balances<P extends PhantomTypeArgument, T extends PhantomTypeArgument> implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 2;
    static readonly $isPhantom: readonly [true, true];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::reserve::Balances<${PhantomToTypeStr<P>}, ${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<P>, PhantomToTypeStr<T>];
    readonly $isPhantom: readonly [true, true];
    readonly availableAmount: ToField<Balance<T>>;
    readonly ctokenSupply: ToField<Supply<ToPhantom<CToken<P, T>>>>;
    readonly fees: ToField<Balance<T>>;
    readonly ctokenFees: ToField<Balance<ToPhantom<CToken<P, T>>>>;
    readonly depositedCtokens: ToField<Balance<ToPhantom<CToken<P, T>>>>;
    private constructor();
    static reified<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(P: P, T: T): BalancesReified<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>;
    static get r(): typeof Balances.reified;
    static phantom<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(P: P, T: T): PhantomReified<ToTypeStr<Balances<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>>>;
    static get p(): typeof Balances.phantom;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        available_amount: {
            value: string;
        };
        ctoken_supply: {
            value: string;
        };
        fees: {
            value: string;
        };
        ctoken_fees: {
            value: string;
        };
        deposited_ctokens: {
            value: string;
        };
    }, {
        available_amount: {
            value: string | number | bigint;
        };
        ctoken_supply: {
            value: string | number | bigint;
        };
        fees: {
            value: string | number | bigint;
        };
        ctoken_fees: {
            value: string | number | bigint;
        };
        deposited_ctokens: {
            value: string | number | bigint;
        };
    }>;
    static fromFields<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(typeArgs: [P, T], fields: Record<string, any>): Balances<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(typeArgs: [P, T], item: FieldsWithTypes): Balances<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>;
    static fromBcs<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(typeArgs: [P, T], data: Uint8Array): Balances<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>;
    toJSONField(): {
        availableAmount: {
            value: string;
        };
        ctokenSupply: {
            value: string;
        };
        fees: {
            value: string;
        };
        ctokenFees: {
            value: string;
        };
        depositedCtokens: {
            value: string;
        };
    };
    toJSON(): {
        availableAmount: {
            value: string;
        };
        ctokenSupply: {
            value: string;
        };
        fees: {
            value: string;
        };
        ctokenFees: {
            value: string;
        };
        depositedCtokens: {
            value: string;
        };
        $typeName: string;
        $typeArgs: [reified.PhantomToTypeStr<P>, reified.PhantomToTypeStr<T>];
    };
    static fromJSONField<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(typeArgs: [P, T], field: any): Balances<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>;
    static fromJSON<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(typeArgs: [P, T], json: Record<string, any>): Balances<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(typeArgs: [P, T], content: SuiParsedData): Balances<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>;
    static fromSuiObjectData<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(typeArgs: [P, T], data: SuiObjectData): Balances<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>;
    static fetch<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArgs: [P, T], id: string): Promise<Balances<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>>;
}
export declare function isCToken(type: string): boolean;
export interface CTokenFields<P extends PhantomTypeArgument, T extends PhantomTypeArgument> {
    dummyField: ToField<"bool">;
}
export type CTokenReified<P extends PhantomTypeArgument, T extends PhantomTypeArgument> = Reified<CToken<P, T>, CTokenFields<P, T>>;
export declare class CToken<P extends PhantomTypeArgument, T extends PhantomTypeArgument> implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 2;
    static readonly $isPhantom: readonly [true, true];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::reserve::CToken<${PhantomToTypeStr<P>}, ${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<P>, PhantomToTypeStr<T>];
    readonly $isPhantom: readonly [true, true];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(P: P, T: T): CTokenReified<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>;
    static get r(): typeof CToken.reified;
    static phantom<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(P: P, T: T): PhantomReified<ToTypeStr<CToken<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>>>;
    static get p(): typeof CToken.phantom;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(typeArgs: [P, T], fields: Record<string, any>): CToken<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(typeArgs: [P, T], item: FieldsWithTypes): CToken<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>;
    static fromBcs<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(typeArgs: [P, T], data: Uint8Array): CToken<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [reified.PhantomToTypeStr<P>, reified.PhantomToTypeStr<T>];
    };
    static fromJSONField<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(typeArgs: [P, T], field: any): CToken<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>;
    static fromJSON<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(typeArgs: [P, T], json: Record<string, any>): CToken<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(typeArgs: [P, T], content: SuiParsedData): CToken<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>;
    static fromSuiObjectData<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(typeArgs: [P, T], data: SuiObjectData): CToken<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>;
    static fetch<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArgs: [P, T], id: string): Promise<CToken<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>>;
}
export declare function isClaimStakingRewardsEvent(type: string): boolean;
export interface ClaimStakingRewardsEventFields {
    lendingMarketId: ToField<"address">;
    coinType: ToField<TypeName>;
    reserveId: ToField<"address">;
    amount: ToField<"u64">;
}
export type ClaimStakingRewardsEventReified = Reified<ClaimStakingRewardsEvent, ClaimStakingRewardsEventFields>;
export declare class ClaimStakingRewardsEvent implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V8}::reserve::ClaimStakingRewardsEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly lendingMarketId: ToField<"address">;
    readonly coinType: ToField<TypeName>;
    readonly reserveId: ToField<"address">;
    readonly amount: ToField<"u64">;
    private constructor();
    static reified(): ClaimStakingRewardsEventReified;
    static get r(): reified.StructClassReified<ClaimStakingRewardsEvent, ClaimStakingRewardsEventFields>;
    static phantom(): PhantomReified<ToTypeStr<ClaimStakingRewardsEvent>>;
    static get p(): reified.PhantomReified<"0xe5ed361add4433f4d23e56fc0e3bacab39b93592d5e65d508e33fd19ff696669::reserve::ClaimStakingRewardsEvent" | "0x5b54b47971238403d6ade3c8c2cc75814cb55145a5184af916bb5b12aaf184cb::reserve::ClaimStakingRewardsEvent">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        lending_market_id: string;
        coin_type: {
            name: {
                bytes: number[];
            };
        };
        reserve_id: string;
        amount: string;
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
        amount: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): ClaimStakingRewardsEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): ClaimStakingRewardsEvent;
    static fromBcs(data: Uint8Array): ClaimStakingRewardsEvent;
    toJSONField(): {
        lendingMarketId: string;
        coinType: {
            name: string;
        };
        reserveId: string;
        amount: string;
    };
    toJSON(): {
        lendingMarketId: string;
        coinType: {
            name: string;
        };
        reserveId: string;
        amount: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ClaimStakingRewardsEvent;
    static fromJSON(json: Record<string, any>): ClaimStakingRewardsEvent;
    static fromSuiParsedData(content: SuiParsedData): ClaimStakingRewardsEvent;
    static fromSuiObjectData(data: SuiObjectData): ClaimStakingRewardsEvent;
    static fetch(client: SuiClient, id: string): Promise<ClaimStakingRewardsEvent>;
}
export declare function isInterestUpdateEvent(type: string): boolean;
export interface InterestUpdateEventFields {
    lendingMarketId: ToField<"address">;
    coinType: ToField<TypeName>;
    reserveId: ToField<"address">;
    cumulativeBorrowRate: ToField<Decimal>;
    availableAmount: ToField<"u64">;
    borrowedAmount: ToField<Decimal>;
    unclaimedSpreadFees: ToField<Decimal>;
    ctokenSupply: ToField<"u64">;
    borrowInterestPaid: ToField<Decimal>;
    spreadFee: ToField<Decimal>;
    supplyInterestEarned: ToField<Decimal>;
    borrowInterestPaidUsdEstimate: ToField<Decimal>;
    protocolFeeUsdEstimate: ToField<Decimal>;
    supplyInterestEarnedUsdEstimate: ToField<Decimal>;
}
export type InterestUpdateEventReified = Reified<InterestUpdateEvent, InterestUpdateEventFields>;
export declare class InterestUpdateEvent implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::reserve::InterestUpdateEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly lendingMarketId: ToField<"address">;
    readonly coinType: ToField<TypeName>;
    readonly reserveId: ToField<"address">;
    readonly cumulativeBorrowRate: ToField<Decimal>;
    readonly availableAmount: ToField<"u64">;
    readonly borrowedAmount: ToField<Decimal>;
    readonly unclaimedSpreadFees: ToField<Decimal>;
    readonly ctokenSupply: ToField<"u64">;
    readonly borrowInterestPaid: ToField<Decimal>;
    readonly spreadFee: ToField<Decimal>;
    readonly supplyInterestEarned: ToField<Decimal>;
    readonly borrowInterestPaidUsdEstimate: ToField<Decimal>;
    readonly protocolFeeUsdEstimate: ToField<Decimal>;
    readonly supplyInterestEarnedUsdEstimate: ToField<Decimal>;
    private constructor();
    static reified(): InterestUpdateEventReified;
    static get r(): reified.StructClassReified<InterestUpdateEvent, InterestUpdateEventFields>;
    static phantom(): PhantomReified<ToTypeStr<InterestUpdateEvent>>;
    static get p(): reified.PhantomReified<"0x1f54a9a2d71799553197e9ea24557797c6398d6a65f2d4d3818c9304b75d5e21::reserve::InterestUpdateEvent" | "0xf95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve::InterestUpdateEvent">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        lending_market_id: string;
        coin_type: {
            name: {
                bytes: number[];
            };
        };
        reserve_id: string;
        cumulative_borrow_rate: {
            value: string;
        };
        available_amount: string;
        borrowed_amount: {
            value: string;
        };
        unclaimed_spread_fees: {
            value: string;
        };
        ctoken_supply: string;
        borrow_interest_paid: {
            value: string;
        };
        spread_fee: {
            value: string;
        };
        supply_interest_earned: {
            value: string;
        };
        borrow_interest_paid_usd_estimate: {
            value: string;
        };
        protocol_fee_usd_estimate: {
            value: string;
        };
        supply_interest_earned_usd_estimate: {
            value: string;
        };
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
        cumulative_borrow_rate: {
            value: string | number | bigint;
        };
        available_amount: string | number | bigint;
        borrowed_amount: {
            value: string | number | bigint;
        };
        unclaimed_spread_fees: {
            value: string | number | bigint;
        };
        ctoken_supply: string | number | bigint;
        borrow_interest_paid: {
            value: string | number | bigint;
        };
        spread_fee: {
            value: string | number | bigint;
        };
        supply_interest_earned: {
            value: string | number | bigint;
        };
        borrow_interest_paid_usd_estimate: {
            value: string | number | bigint;
        };
        protocol_fee_usd_estimate: {
            value: string | number | bigint;
        };
        supply_interest_earned_usd_estimate: {
            value: string | number | bigint;
        };
    }>;
    static fromFields(fields: Record<string, any>): InterestUpdateEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): InterestUpdateEvent;
    static fromBcs(data: Uint8Array): InterestUpdateEvent;
    toJSONField(): {
        lendingMarketId: string;
        coinType: {
            name: string;
        };
        reserveId: string;
        cumulativeBorrowRate: {
            value: string;
        };
        availableAmount: string;
        borrowedAmount: {
            value: string;
        };
        unclaimedSpreadFees: {
            value: string;
        };
        ctokenSupply: string;
        borrowInterestPaid: {
            value: string;
        };
        spreadFee: {
            value: string;
        };
        supplyInterestEarned: {
            value: string;
        };
        borrowInterestPaidUsdEstimate: {
            value: string;
        };
        protocolFeeUsdEstimate: {
            value: string;
        };
        supplyInterestEarnedUsdEstimate: {
            value: string;
        };
    };
    toJSON(): {
        lendingMarketId: string;
        coinType: {
            name: string;
        };
        reserveId: string;
        cumulativeBorrowRate: {
            value: string;
        };
        availableAmount: string;
        borrowedAmount: {
            value: string;
        };
        unclaimedSpreadFees: {
            value: string;
        };
        ctokenSupply: string;
        borrowInterestPaid: {
            value: string;
        };
        spreadFee: {
            value: string;
        };
        supplyInterestEarned: {
            value: string;
        };
        borrowInterestPaidUsdEstimate: {
            value: string;
        };
        protocolFeeUsdEstimate: {
            value: string;
        };
        supplyInterestEarnedUsdEstimate: {
            value: string;
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): InterestUpdateEvent;
    static fromJSON(json: Record<string, any>): InterestUpdateEvent;
    static fromSuiParsedData(content: SuiParsedData): InterestUpdateEvent;
    static fromSuiObjectData(data: SuiObjectData): InterestUpdateEvent;
    static fetch(client: SuiClient, id: string): Promise<InterestUpdateEvent>;
}
export declare function isLiquidityRequest(type: string): boolean;
export interface LiquidityRequestFields<P extends PhantomTypeArgument, T extends PhantomTypeArgument> {
    amount: ToField<"u64">;
    fee: ToField<"u64">;
}
export type LiquidityRequestReified<P extends PhantomTypeArgument, T extends PhantomTypeArgument> = Reified<LiquidityRequest<P, T>, LiquidityRequestFields<P, T>>;
export declare class LiquidityRequest<P extends PhantomTypeArgument, T extends PhantomTypeArgument> implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 2;
    static readonly $isPhantom: readonly [true, true];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V8}::reserve::LiquidityRequest<${PhantomToTypeStr<P>}, ${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<P>, PhantomToTypeStr<T>];
    readonly $isPhantom: readonly [true, true];
    readonly amount: ToField<"u64">;
    readonly fee: ToField<"u64">;
    private constructor();
    static reified<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(P: P, T: T): LiquidityRequestReified<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>;
    static get r(): typeof LiquidityRequest.reified;
    static phantom<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(P: P, T: T): PhantomReified<ToTypeStr<LiquidityRequest<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>>>;
    static get p(): typeof LiquidityRequest.phantom;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        amount: string;
        fee: string;
    }, {
        amount: string | number | bigint;
        fee: string | number | bigint;
    }>;
    static fromFields<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(typeArgs: [P, T], fields: Record<string, any>): LiquidityRequest<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(typeArgs: [P, T], item: FieldsWithTypes): LiquidityRequest<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>;
    static fromBcs<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(typeArgs: [P, T], data: Uint8Array): LiquidityRequest<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>;
    toJSONField(): {
        amount: string;
        fee: string;
    };
    toJSON(): {
        amount: string;
        fee: string;
        $typeName: string;
        $typeArgs: [reified.PhantomToTypeStr<P>, reified.PhantomToTypeStr<T>];
    };
    static fromJSONField<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(typeArgs: [P, T], field: any): LiquidityRequest<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>;
    static fromJSON<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(typeArgs: [P, T], json: Record<string, any>): LiquidityRequest<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(typeArgs: [P, T], content: SuiParsedData): LiquidityRequest<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>;
    static fromSuiObjectData<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(typeArgs: [P, T], data: SuiObjectData): LiquidityRequest<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>;
    static fetch<P extends PhantomReified<PhantomTypeArgument>, T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArgs: [P, T], id: string): Promise<LiquidityRequest<ToPhantomTypeArgument<P>, ToPhantomTypeArgument<T>>>;
}
export declare function isReserve(type: string): boolean;
export interface ReserveFields<P extends PhantomTypeArgument> {
    id: ToField<UID>;
    lendingMarketId: ToField<ID>;
    arrayIndex: ToField<"u64">;
    coinType: ToField<TypeName>;
    config: ToField<Cell<ReserveConfig>>;
    mintDecimals: ToField<"u8">;
    priceIdentifier: ToField<PriceIdentifier>;
    price: ToField<Decimal>;
    smoothedPrice: ToField<Decimal>;
    priceLastUpdateTimestampS: ToField<"u64">;
    availableAmount: ToField<"u64">;
    ctokenSupply: ToField<"u64">;
    borrowedAmount: ToField<Decimal>;
    cumulativeBorrowRate: ToField<Decimal>;
    interestLastUpdateTimestampS: ToField<"u64">;
    unclaimedSpreadFees: ToField<Decimal>;
    attributedBorrowValue: ToField<Decimal>;
    depositsPoolRewardManager: ToField<PoolRewardManager>;
    borrowsPoolRewardManager: ToField<PoolRewardManager>;
}
export type ReserveReified<P extends PhantomTypeArgument> = Reified<Reserve<P>, ReserveFields<P>>;
export declare class Reserve<P extends PhantomTypeArgument> implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 1;
    static readonly $isPhantom: readonly [true];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::reserve::Reserve<${PhantomToTypeStr<P>}>`;
    readonly $typeArgs: [PhantomToTypeStr<P>];
    readonly $isPhantom: readonly [true];
    readonly id: ToField<UID>;
    readonly lendingMarketId: ToField<ID>;
    readonly arrayIndex: ToField<"u64">;
    readonly coinType: ToField<TypeName>;
    readonly config: ToField<Cell<ReserveConfig>>;
    readonly mintDecimals: ToField<"u8">;
    readonly priceIdentifier: ToField<PriceIdentifier>;
    readonly price: ToField<Decimal>;
    readonly smoothedPrice: ToField<Decimal>;
    readonly priceLastUpdateTimestampS: ToField<"u64">;
    readonly availableAmount: ToField<"u64">;
    readonly ctokenSupply: ToField<"u64">;
    readonly borrowedAmount: ToField<Decimal>;
    readonly cumulativeBorrowRate: ToField<Decimal>;
    readonly interestLastUpdateTimestampS: ToField<"u64">;
    readonly unclaimedSpreadFees: ToField<Decimal>;
    readonly attributedBorrowValue: ToField<Decimal>;
    readonly depositsPoolRewardManager: ToField<PoolRewardManager>;
    readonly borrowsPoolRewardManager: ToField<PoolRewardManager>;
    private constructor();
    static reified<P extends PhantomReified<PhantomTypeArgument>>(P: P): ReserveReified<ToPhantomTypeArgument<P>>;
    static get r(): typeof Reserve.reified;
    static phantom<P extends PhantomReified<PhantomTypeArgument>>(P: P): PhantomReified<ToTypeStr<Reserve<ToPhantomTypeArgument<P>>>>;
    static get p(): typeof Reserve.phantom;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
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
    }, {
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
    }>;
    static fromFields<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, fields: Record<string, any>): Reserve<ToPhantomTypeArgument<P>>;
    static fromFieldsWithTypes<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, item: FieldsWithTypes): Reserve<ToPhantomTypeArgument<P>>;
    static fromBcs<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, data: Uint8Array): Reserve<ToPhantomTypeArgument<P>>;
    toJSONField(): {
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
    };
    toJSON(): {
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
        $typeName: string;
        $typeArgs: [reified.PhantomToTypeStr<P>];
    };
    static fromJSONField<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, field: any): Reserve<ToPhantomTypeArgument<P>>;
    static fromJSON<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, json: Record<string, any>): Reserve<ToPhantomTypeArgument<P>>;
    static fromSuiParsedData<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, content: SuiParsedData): Reserve<ToPhantomTypeArgument<P>>;
    static fromSuiObjectData<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, data: SuiObjectData): Reserve<ToPhantomTypeArgument<P>>;
    static fetch<P extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: P, id: string): Promise<Reserve<ToPhantomTypeArgument<P>>>;
}
export declare function isReserveAssetDataEvent(type: string): boolean;
export interface ReserveAssetDataEventFields {
    lendingMarketId: ToField<"address">;
    coinType: ToField<TypeName>;
    reserveId: ToField<"address">;
    availableAmount: ToField<Decimal>;
    supplyAmount: ToField<Decimal>;
    borrowedAmount: ToField<Decimal>;
    availableAmountUsdEstimate: ToField<Decimal>;
    supplyAmountUsdEstimate: ToField<Decimal>;
    borrowedAmountUsdEstimate: ToField<Decimal>;
    borrowApr: ToField<Decimal>;
    supplyApr: ToField<Decimal>;
    ctokenSupply: ToField<"u64">;
    cumulativeBorrowRate: ToField<Decimal>;
    price: ToField<Decimal>;
    smoothedPrice: ToField<Decimal>;
    priceLastUpdateTimestampS: ToField<"u64">;
}
export type ReserveAssetDataEventReified = Reified<ReserveAssetDataEvent, ReserveAssetDataEventFields>;
export declare class ReserveAssetDataEvent implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::reserve::ReserveAssetDataEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly lendingMarketId: ToField<"address">;
    readonly coinType: ToField<TypeName>;
    readonly reserveId: ToField<"address">;
    readonly availableAmount: ToField<Decimal>;
    readonly supplyAmount: ToField<Decimal>;
    readonly borrowedAmount: ToField<Decimal>;
    readonly availableAmountUsdEstimate: ToField<Decimal>;
    readonly supplyAmountUsdEstimate: ToField<Decimal>;
    readonly borrowedAmountUsdEstimate: ToField<Decimal>;
    readonly borrowApr: ToField<Decimal>;
    readonly supplyApr: ToField<Decimal>;
    readonly ctokenSupply: ToField<"u64">;
    readonly cumulativeBorrowRate: ToField<Decimal>;
    readonly price: ToField<Decimal>;
    readonly smoothedPrice: ToField<Decimal>;
    readonly priceLastUpdateTimestampS: ToField<"u64">;
    private constructor();
    static reified(): ReserveAssetDataEventReified;
    static get r(): reified.StructClassReified<ReserveAssetDataEvent, ReserveAssetDataEventFields>;
    static phantom(): PhantomReified<ToTypeStr<ReserveAssetDataEvent>>;
    static get p(): reified.PhantomReified<"0x1f54a9a2d71799553197e9ea24557797c6398d6a65f2d4d3818c9304b75d5e21::reserve::ReserveAssetDataEvent" | "0xf95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve::ReserveAssetDataEvent">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        lending_market_id: string;
        coin_type: {
            name: {
                bytes: number[];
            };
        };
        reserve_id: string;
        available_amount: {
            value: string;
        };
        supply_amount: {
            value: string;
        };
        borrowed_amount: {
            value: string;
        };
        available_amount_usd_estimate: {
            value: string;
        };
        supply_amount_usd_estimate: {
            value: string;
        };
        borrowed_amount_usd_estimate: {
            value: string;
        };
        borrow_apr: {
            value: string;
        };
        supply_apr: {
            value: string;
        };
        ctoken_supply: string;
        cumulative_borrow_rate: {
            value: string;
        };
        price: {
            value: string;
        };
        smoothed_price: {
            value: string;
        };
        price_last_update_timestamp_s: string;
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
        available_amount: {
            value: string | number | bigint;
        };
        supply_amount: {
            value: string | number | bigint;
        };
        borrowed_amount: {
            value: string | number | bigint;
        };
        available_amount_usd_estimate: {
            value: string | number | bigint;
        };
        supply_amount_usd_estimate: {
            value: string | number | bigint;
        };
        borrowed_amount_usd_estimate: {
            value: string | number | bigint;
        };
        borrow_apr: {
            value: string | number | bigint;
        };
        supply_apr: {
            value: string | number | bigint;
        };
        ctoken_supply: string | number | bigint;
        cumulative_borrow_rate: {
            value: string | number | bigint;
        };
        price: {
            value: string | number | bigint;
        };
        smoothed_price: {
            value: string | number | bigint;
        };
        price_last_update_timestamp_s: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): ReserveAssetDataEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): ReserveAssetDataEvent;
    static fromBcs(data: Uint8Array): ReserveAssetDataEvent;
    toJSONField(): {
        lendingMarketId: string;
        coinType: {
            name: string;
        };
        reserveId: string;
        availableAmount: {
            value: string;
        };
        supplyAmount: {
            value: string;
        };
        borrowedAmount: {
            value: string;
        };
        availableAmountUsdEstimate: {
            value: string;
        };
        supplyAmountUsdEstimate: {
            value: string;
        };
        borrowedAmountUsdEstimate: {
            value: string;
        };
        borrowApr: {
            value: string;
        };
        supplyApr: {
            value: string;
        };
        ctokenSupply: string;
        cumulativeBorrowRate: {
            value: string;
        };
        price: {
            value: string;
        };
        smoothedPrice: {
            value: string;
        };
        priceLastUpdateTimestampS: string;
    };
    toJSON(): {
        lendingMarketId: string;
        coinType: {
            name: string;
        };
        reserveId: string;
        availableAmount: {
            value: string;
        };
        supplyAmount: {
            value: string;
        };
        borrowedAmount: {
            value: string;
        };
        availableAmountUsdEstimate: {
            value: string;
        };
        supplyAmountUsdEstimate: {
            value: string;
        };
        borrowedAmountUsdEstimate: {
            value: string;
        };
        borrowApr: {
            value: string;
        };
        supplyApr: {
            value: string;
        };
        ctokenSupply: string;
        cumulativeBorrowRate: {
            value: string;
        };
        price: {
            value: string;
        };
        smoothedPrice: {
            value: string;
        };
        priceLastUpdateTimestampS: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ReserveAssetDataEvent;
    static fromJSON(json: Record<string, any>): ReserveAssetDataEvent;
    static fromSuiParsedData(content: SuiParsedData): ReserveAssetDataEvent;
    static fromSuiObjectData(data: SuiObjectData): ReserveAssetDataEvent;
    static fetch(client: SuiClient, id: string): Promise<ReserveAssetDataEvent>;
}
export declare function isStakerKey(type: string): boolean;
export interface StakerKeyFields {
    dummyField: ToField<"bool">;
}
export type StakerKeyReified = Reified<StakerKey, StakerKeyFields>;
export declare class StakerKey implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V8}::reserve::StakerKey`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): StakerKeyReified;
    static get r(): reified.StructClassReified<StakerKey, StakerKeyFields>;
    static phantom(): PhantomReified<ToTypeStr<StakerKey>>;
    static get p(): reified.PhantomReified<"0xe5ed361add4433f4d23e56fc0e3bacab39b93592d5e65d508e33fd19ff696669::reserve::StakerKey" | "0x5b54b47971238403d6ade3c8c2cc75814cb55145a5184af916bb5b12aaf184cb::reserve::StakerKey">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields(fields: Record<string, any>): StakerKey;
    static fromFieldsWithTypes(item: FieldsWithTypes): StakerKey;
    static fromBcs(data: Uint8Array): StakerKey;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): StakerKey;
    static fromJSON(json: Record<string, any>): StakerKey;
    static fromSuiParsedData(content: SuiParsedData): StakerKey;
    static fromSuiObjectData(data: SuiObjectData): StakerKey;
    static fetch(client: SuiClient, id: string): Promise<StakerKey>;
}
