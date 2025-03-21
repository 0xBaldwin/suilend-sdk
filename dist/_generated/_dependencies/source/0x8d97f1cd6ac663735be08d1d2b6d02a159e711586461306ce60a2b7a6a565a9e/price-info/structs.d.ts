import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { UID } from "../../0x2/object/structs";
import { PKG_V1 } from "../index";
import { PriceFeed } from "../price-feed/structs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
export declare function isPriceInfo(type: string): boolean;
export interface PriceInfoFields {
    attestationTime: ToField<"u64">;
    arrivalTime: ToField<"u64">;
    priceFeed: ToField<PriceFeed>;
}
export type PriceInfoReified = Reified<PriceInfo, PriceInfoFields>;
export declare class PriceInfo implements StructClass {
    __StructClass: true;
    static readonly $typeName = "0x8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e::price_info::PriceInfo";
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName = "0x8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e::price_info::PriceInfo";
    readonly $fullTypeName: `${typeof PKG_V1}::price_info::PriceInfo`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly attestationTime: ToField<"u64">;
    readonly arrivalTime: ToField<"u64">;
    readonly priceFeed: ToField<PriceFeed>;
    private constructor();
    static reified(): PriceInfoReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<PriceInfo, PriceInfoFields>;
    static phantom(): PhantomReified<ToTypeStr<PriceInfo>>;
    static get p(): PhantomReified<"0x8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e::price_info::PriceInfo">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        attestation_time: string;
        arrival_time: string;
        price_feed: {
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
        };
    }, {
        attestation_time: string | number | bigint;
        arrival_time: string | number | bigint;
        price_feed: {
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
        };
    }>;
    static fromFields(fields: Record<string, any>): PriceInfo;
    static fromFieldsWithTypes(item: FieldsWithTypes): PriceInfo;
    static fromBcs(data: Uint8Array): PriceInfo;
    toJSONField(): {
        attestationTime: string;
        arrivalTime: string;
        priceFeed: {
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
    };
    toJSON(): {
        attestationTime: string;
        arrivalTime: string;
        priceFeed: {
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
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): PriceInfo;
    static fromJSON(json: Record<string, any>): PriceInfo;
    static fromSuiParsedData(content: SuiParsedData): PriceInfo;
    static fromSuiObjectData(data: SuiObjectData): PriceInfo;
    static fetch(client: SuiClient, id: string): Promise<PriceInfo>;
}
export declare function isPriceInfoObject(type: string): boolean;
export interface PriceInfoObjectFields {
    id: ToField<UID>;
    priceInfo: ToField<PriceInfo>;
}
export type PriceInfoObjectReified = Reified<PriceInfoObject, PriceInfoObjectFields>;
export declare class PriceInfoObject implements StructClass {
    __StructClass: true;
    static readonly $typeName = "0x8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e::price_info::PriceInfoObject";
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName = "0x8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e::price_info::PriceInfoObject";
    readonly $fullTypeName: `${typeof PKG_V1}::price_info::PriceInfoObject`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly id: ToField<UID>;
    readonly priceInfo: ToField<PriceInfo>;
    private constructor();
    static reified(): PriceInfoObjectReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<PriceInfoObject, PriceInfoObjectFields>;
    static phantom(): PhantomReified<ToTypeStr<PriceInfoObject>>;
    static get p(): PhantomReified<"0x8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e::price_info::PriceInfoObject">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        price_info: {
            attestation_time: string;
            arrival_time: string;
            price_feed: {
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
            };
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        price_info: {
            attestation_time: string | number | bigint;
            arrival_time: string | number | bigint;
            price_feed: {
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
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): PriceInfoObject;
    static fromFieldsWithTypes(item: FieldsWithTypes): PriceInfoObject;
    static fromBcs(data: Uint8Array): PriceInfoObject;
    toJSONField(): {
        id: string;
        priceInfo: {
            attestationTime: string;
            arrivalTime: string;
            priceFeed: {
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
        };
    };
    toJSON(): {
        id: string;
        priceInfo: {
            attestationTime: string;
            arrivalTime: string;
            priceFeed: {
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
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): PriceInfoObject;
    static fromJSON(json: Record<string, any>): PriceInfoObject;
    static fromSuiParsedData(content: SuiParsedData): PriceInfoObject;
    static fromSuiObjectData(data: SuiObjectData): PriceInfoObject;
    static fetch(client: SuiClient, id: string): Promise<PriceInfoObject>;
}
