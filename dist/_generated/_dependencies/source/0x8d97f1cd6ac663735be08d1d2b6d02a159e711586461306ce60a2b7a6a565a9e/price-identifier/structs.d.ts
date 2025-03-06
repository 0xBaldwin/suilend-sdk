import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { Vector } from "../../../../_framework/vector";
import { PKG_V1 } from "../index";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
export declare function isPriceIdentifier(type: string): boolean;
export interface PriceIdentifierFields {
    bytes: ToField<Vector<"u8">>;
}
export type PriceIdentifierReified = Reified<PriceIdentifier, PriceIdentifierFields>;
export declare class PriceIdentifier implements StructClass {
    __StructClass: true;
    static readonly $typeName = "0x8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e::price_identifier::PriceIdentifier";
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName = "0x8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e::price_identifier::PriceIdentifier";
    readonly $fullTypeName: `${typeof PKG_V1}::price_identifier::PriceIdentifier`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly bytes: ToField<Vector<"u8">>;
    private constructor();
    static reified(): PriceIdentifierReified;
    static get r(): reified.StructClassReified<PriceIdentifier, PriceIdentifierFields>;
    static phantom(): PhantomReified<ToTypeStr<PriceIdentifier>>;
    static get p(): reified.PhantomReified<"0x8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e::price_identifier::PriceIdentifier">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        bytes: number[];
    }, {
        bytes: Iterable<number> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): PriceIdentifier;
    static fromFieldsWithTypes(item: FieldsWithTypes): PriceIdentifier;
    static fromBcs(data: Uint8Array): PriceIdentifier;
    toJSONField(): {
        bytes: number[];
    };
    toJSON(): {
        bytes: number[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): PriceIdentifier;
    static fromJSON(json: Record<string, any>): PriceIdentifier;
    static fromSuiParsedData(content: SuiParsedData): PriceIdentifier;
    static fromSuiObjectData(data: SuiObjectData): PriceIdentifier;
    static fetch(client: SuiClient, id: string): Promise<PriceIdentifier>;
}
