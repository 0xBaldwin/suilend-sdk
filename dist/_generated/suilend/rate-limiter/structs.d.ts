import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../_framework/reified";
import { FieldsWithTypes } from "../../_framework/util";
import { Decimal } from "../decimal/structs";
import { PKG_V1 } from "../index";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
export declare function isRateLimiter(type: string): boolean;
export interface RateLimiterFields {
    config: ToField<RateLimiterConfig>;
    prevQty: ToField<Decimal>;
    windowStart: ToField<"u64">;
    curQty: ToField<Decimal>;
}
export type RateLimiterReified = Reified<RateLimiter, RateLimiterFields>;
export declare class RateLimiter implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::rate_limiter::RateLimiter`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly config: ToField<RateLimiterConfig>;
    readonly prevQty: ToField<Decimal>;
    readonly windowStart: ToField<"u64">;
    readonly curQty: ToField<Decimal>;
    private constructor();
    static reified(): RateLimiterReified;
    static get r(): import("../../_framework/reified").StructClassReified<RateLimiter, RateLimiterFields>;
    static phantom(): PhantomReified<ToTypeStr<RateLimiter>>;
    static get p(): PhantomReified<"0x1f54a9a2d71799553197e9ea24557797c6398d6a65f2d4d3818c9304b75d5e21::rate_limiter::RateLimiter" | "0xf95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::rate_limiter::RateLimiter">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
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
    }, {
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
    }>;
    static fromFields(fields: Record<string, any>): RateLimiter;
    static fromFieldsWithTypes(item: FieldsWithTypes): RateLimiter;
    static fromBcs(data: Uint8Array): RateLimiter;
    toJSONField(): {
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
    toJSON(): {
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
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): RateLimiter;
    static fromJSON(json: Record<string, any>): RateLimiter;
    static fromSuiParsedData(content: SuiParsedData): RateLimiter;
    static fromSuiObjectData(data: SuiObjectData): RateLimiter;
    static fetch(client: SuiClient, id: string): Promise<RateLimiter>;
}
export declare function isRateLimiterConfig(type: string): boolean;
export interface RateLimiterConfigFields {
    windowDuration: ToField<"u64">;
    maxOutflow: ToField<"u64">;
}
export type RateLimiterConfigReified = Reified<RateLimiterConfig, RateLimiterConfigFields>;
export declare class RateLimiterConfig implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::rate_limiter::RateLimiterConfig`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly windowDuration: ToField<"u64">;
    readonly maxOutflow: ToField<"u64">;
    private constructor();
    static reified(): RateLimiterConfigReified;
    static get r(): import("../../_framework/reified").StructClassReified<RateLimiterConfig, RateLimiterConfigFields>;
    static phantom(): PhantomReified<ToTypeStr<RateLimiterConfig>>;
    static get p(): PhantomReified<"0x1f54a9a2d71799553197e9ea24557797c6398d6a65f2d4d3818c9304b75d5e21::rate_limiter::RateLimiterConfig" | "0xf95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::rate_limiter::RateLimiterConfig">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        window_duration: string;
        max_outflow: string;
    }, {
        window_duration: string | number | bigint;
        max_outflow: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): RateLimiterConfig;
    static fromFieldsWithTypes(item: FieldsWithTypes): RateLimiterConfig;
    static fromBcs(data: Uint8Array): RateLimiterConfig;
    toJSONField(): {
        windowDuration: string;
        maxOutflow: string;
    };
    toJSON(): {
        windowDuration: string;
        maxOutflow: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): RateLimiterConfig;
    static fromJSON(json: Record<string, any>): RateLimiterConfig;
    static fromSuiParsedData(content: SuiParsedData): RateLimiterConfig;
    static fromSuiObjectData(data: SuiObjectData): RateLimiterConfig;
    static fetch(client: SuiClient, id: string): Promise<RateLimiterConfig>;
}
