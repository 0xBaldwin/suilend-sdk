import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { I64 } from "../i64/structs";
import { PKG_V1 } from "../index";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
export declare function isPrice(type: string): boolean;
export interface PriceFields {
    price: ToField<I64>;
    conf: ToField<"u64">;
    expo: ToField<I64>;
    timestamp: ToField<"u64">;
}
export type PriceReified = Reified<Price, PriceFields>;
export declare class Price implements StructClass {
    __StructClass: true;
    static readonly $typeName = "0x8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e::price::Price";
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName = "0x8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e::price::Price";
    readonly $fullTypeName: `${typeof PKG_V1}::price::Price`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly price: ToField<I64>;
    readonly conf: ToField<"u64">;
    readonly expo: ToField<I64>;
    readonly timestamp: ToField<"u64">;
    private constructor();
    static reified(): PriceReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<Price, PriceFields>;
    static phantom(): PhantomReified<ToTypeStr<Price>>;
    static get p(): PhantomReified<"0x8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e::price::Price">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        price: {
            negative: boolean;
            magnitude: string;
        };
        conf: string;
        expo: {
            negative: boolean;
            magnitude: string;
        };
        timestamp: string;
    }, {
        price: {
            negative: boolean;
            magnitude: string | number | bigint;
        };
        conf: string | number | bigint;
        expo: {
            negative: boolean;
            magnitude: string | number | bigint;
        };
        timestamp: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): Price;
    static fromFieldsWithTypes(item: FieldsWithTypes): Price;
    static fromBcs(data: Uint8Array): Price;
    toJSONField(): {
        price: {
            negative: boolean;
            magnitude: string;
        };
        conf: string;
        expo: {
            negative: boolean;
            magnitude: string;
        };
        timestamp: string;
    };
    toJSON(): {
        price: {
            negative: boolean;
            magnitude: string;
        };
        conf: string;
        expo: {
            negative: boolean;
            magnitude: string;
        };
        timestamp: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Price;
    static fromJSON(json: Record<string, any>): Price;
    static fromSuiParsedData(content: SuiParsedData): Price;
    static fromSuiObjectData(data: SuiObjectData): Price;
    static fetch(client: SuiClient, id: string): Promise<Price>;
}
