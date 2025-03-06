import * as reified from "../../_framework/reified";
import { Bag } from "../../_dependencies/source/0x2/bag/structs";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../_framework/reified";
import { FieldsWithTypes } from "../../_framework/util";
import { Vector } from "../../_framework/vector";
import { PKG_V1 } from "../index";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
export declare function isReserveConfig(type: string): boolean;
export interface ReserveConfigFields {
    openLtvPct: ToField<"u8">;
    closeLtvPct: ToField<"u8">;
    maxCloseLtvPct: ToField<"u8">;
    borrowWeightBps: ToField<"u64">;
    depositLimit: ToField<"u64">;
    borrowLimit: ToField<"u64">;
    liquidationBonusBps: ToField<"u64">;
    maxLiquidationBonusBps: ToField<"u64">;
    depositLimitUsd: ToField<"u64">;
    borrowLimitUsd: ToField<"u64">;
    interestRateUtils: ToField<Vector<"u8">>;
    interestRateAprs: ToField<Vector<"u64">>;
    borrowFeeBps: ToField<"u64">;
    spreadFeeBps: ToField<"u64">;
    protocolLiquidationFeeBps: ToField<"u64">;
    isolated: ToField<"bool">;
    openAttributedBorrowLimitUsd: ToField<"u64">;
    closeAttributedBorrowLimitUsd: ToField<"u64">;
    additionalFields: ToField<Bag>;
}
export type ReserveConfigReified = Reified<ReserveConfig, ReserveConfigFields>;
export declare class ReserveConfig implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::reserve_config::ReserveConfig`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly openLtvPct: ToField<"u8">;
    readonly closeLtvPct: ToField<"u8">;
    readonly maxCloseLtvPct: ToField<"u8">;
    readonly borrowWeightBps: ToField<"u64">;
    readonly depositLimit: ToField<"u64">;
    readonly borrowLimit: ToField<"u64">;
    readonly liquidationBonusBps: ToField<"u64">;
    readonly maxLiquidationBonusBps: ToField<"u64">;
    readonly depositLimitUsd: ToField<"u64">;
    readonly borrowLimitUsd: ToField<"u64">;
    readonly interestRateUtils: ToField<Vector<"u8">>;
    readonly interestRateAprs: ToField<Vector<"u64">>;
    readonly borrowFeeBps: ToField<"u64">;
    readonly spreadFeeBps: ToField<"u64">;
    readonly protocolLiquidationFeeBps: ToField<"u64">;
    readonly isolated: ToField<"bool">;
    readonly openAttributedBorrowLimitUsd: ToField<"u64">;
    readonly closeAttributedBorrowLimitUsd: ToField<"u64">;
    readonly additionalFields: ToField<Bag>;
    private constructor();
    static reified(): ReserveConfigReified;
    static get r(): reified.StructClassReified<ReserveConfig, ReserveConfigFields>;
    static phantom(): PhantomReified<ToTypeStr<ReserveConfig>>;
    static get p(): reified.PhantomReified<"0x1f54a9a2d71799553197e9ea24557797c6398d6a65f2d4d3818c9304b75d5e21::reserve_config::ReserveConfig" | "0xf95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve_config::ReserveConfig">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        open_ltv_pct: number;
        close_ltv_pct: number;
        max_close_ltv_pct: number;
        borrow_weight_bps: string;
        deposit_limit: string;
        borrow_limit: string;
        liquidation_bonus_bps: string;
        max_liquidation_bonus_bps: string;
        deposit_limit_usd: string;
        borrow_limit_usd: string;
        interest_rate_utils: number[];
        interest_rate_aprs: string[];
        borrow_fee_bps: string;
        spread_fee_bps: string;
        protocol_liquidation_fee_bps: string;
        isolated: boolean;
        open_attributed_borrow_limit_usd: string;
        close_attributed_borrow_limit_usd: string;
        additional_fields: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string;
        };
    }, {
        open_ltv_pct: number;
        close_ltv_pct: number;
        max_close_ltv_pct: number;
        borrow_weight_bps: string | number | bigint;
        deposit_limit: string | number | bigint;
        borrow_limit: string | number | bigint;
        liquidation_bonus_bps: string | number | bigint;
        max_liquidation_bonus_bps: string | number | bigint;
        deposit_limit_usd: string | number | bigint;
        borrow_limit_usd: string | number | bigint;
        interest_rate_utils: Iterable<number> & {
            length: number;
        };
        interest_rate_aprs: Iterable<string | number | bigint> & {
            length: number;
        };
        borrow_fee_bps: string | number | bigint;
        spread_fee_bps: string | number | bigint;
        protocol_liquidation_fee_bps: string | number | bigint;
        isolated: boolean;
        open_attributed_borrow_limit_usd: string | number | bigint;
        close_attributed_borrow_limit_usd: string | number | bigint;
        additional_fields: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string | number | bigint;
        };
    }>;
    static fromFields(fields: Record<string, any>): ReserveConfig;
    static fromFieldsWithTypes(item: FieldsWithTypes): ReserveConfig;
    static fromBcs(data: Uint8Array): ReserveConfig;
    toJSONField(): {
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
    };
    toJSON(): {
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
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ReserveConfig;
    static fromJSON(json: Record<string, any>): ReserveConfig;
    static fromSuiParsedData(content: SuiParsedData): ReserveConfig;
    static fromSuiObjectData(data: SuiObjectData): ReserveConfig;
    static fetch(client: SuiClient, id: string): Promise<ReserveConfig>;
}
export declare function isReserveConfigBuilder(type: string): boolean;
export interface ReserveConfigBuilderFields {
    fields: ToField<Bag>;
}
export type ReserveConfigBuilderReified = Reified<ReserveConfigBuilder, ReserveConfigBuilderFields>;
export declare class ReserveConfigBuilder implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::reserve_config::ReserveConfigBuilder`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly fields: ToField<Bag>;
    private constructor();
    static reified(): ReserveConfigBuilderReified;
    static get r(): reified.StructClassReified<ReserveConfigBuilder, ReserveConfigBuilderFields>;
    static phantom(): PhantomReified<ToTypeStr<ReserveConfigBuilder>>;
    static get p(): reified.PhantomReified<"0x1f54a9a2d71799553197e9ea24557797c6398d6a65f2d4d3818c9304b75d5e21::reserve_config::ReserveConfigBuilder" | "0xf95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve_config::ReserveConfigBuilder">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        fields: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string;
        };
    }, {
        fields: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string | number | bigint;
        };
    }>;
    static fromFields(fields: Record<string, any>): ReserveConfigBuilder;
    static fromFieldsWithTypes(item: FieldsWithTypes): ReserveConfigBuilder;
    static fromBcs(data: Uint8Array): ReserveConfigBuilder;
    toJSONField(): {
        fields: {
            id: string;
            size: string;
        };
    };
    toJSON(): {
        fields: {
            id: string;
            size: string;
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ReserveConfigBuilder;
    static fromJSON(json: Record<string, any>): ReserveConfigBuilder;
    static fromSuiParsedData(content: SuiParsedData): ReserveConfigBuilder;
    static fromSuiObjectData(data: SuiObjectData): ReserveConfigBuilder;
    static fetch(client: SuiClient, id: string): Promise<ReserveConfigBuilder>;
}
