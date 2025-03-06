import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { PKG_V1 } from "../index";
import { PriceIdentifier } from "../price-identifier/structs";
import { Price } from "../price/structs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
export declare function isPriceFeed(type: string): boolean;
export interface PriceFeedFields {
    priceIdentifier: ToField<PriceIdentifier>;
    price: ToField<Price>;
    emaPrice: ToField<Price>;
}
export type PriceFeedReified = Reified<PriceFeed, PriceFeedFields>;
export declare class PriceFeed implements StructClass {
    __StructClass: true;
    static readonly $typeName = "0x8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e::price_feed::PriceFeed";
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName = "0x8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e::price_feed::PriceFeed";
    readonly $fullTypeName: `${typeof PKG_V1}::price_feed::PriceFeed`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly priceIdentifier: ToField<PriceIdentifier>;
    readonly price: ToField<Price>;
    readonly emaPrice: ToField<Price>;
    private constructor();
    static reified(): PriceFeedReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<PriceFeed, PriceFeedFields>;
    static phantom(): PhantomReified<ToTypeStr<PriceFeed>>;
    static get p(): PhantomReified<"0x8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e::price_feed::PriceFeed">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        price_identifier: {
            bytes: number[];
        };
        price: {
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
        ema_price: {
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
    }, {
        price_identifier: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
        price: {
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
        };
        ema_price: {
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
        };
    }>;
    static fromFields(fields: Record<string, any>): PriceFeed;
    static fromFieldsWithTypes(item: FieldsWithTypes): PriceFeed;
    static fromBcs(data: Uint8Array): PriceFeed;
    toJSONField(): {
        priceIdentifier: {
            bytes: number[];
        };
        price: {
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
        emaPrice: {
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
    };
    toJSON(): {
        priceIdentifier: {
            bytes: number[];
        };
        price: {
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
        emaPrice: {
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
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): PriceFeed;
    static fromJSON(json: Record<string, any>): PriceFeed;
    static fromSuiParsedData(content: SuiParsedData): PriceFeed;
    static fromSuiObjectData(data: SuiObjectData): PriceFeed;
    static fetch(client: SuiClient, id: string): Promise<PriceFeed>;
}
