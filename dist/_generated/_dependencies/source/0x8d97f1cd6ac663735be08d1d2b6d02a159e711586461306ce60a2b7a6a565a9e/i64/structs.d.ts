import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { PKG_V1 } from "../index";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
export declare function isI64(type: string): boolean;
export interface I64Fields {
    negative: ToField<"bool">;
    magnitude: ToField<"u64">;
}
export type I64Reified = Reified<I64, I64Fields>;
export declare class I64 implements StructClass {
    __StructClass: true;
    static readonly $typeName = "0x8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e::i64::I64";
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName = "0x8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e::i64::I64";
    readonly $fullTypeName: `${typeof PKG_V1}::i64::I64`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly negative: ToField<"bool">;
    readonly magnitude: ToField<"u64">;
    private constructor();
    static reified(): I64Reified;
    static get r(): import("../../../../_framework/reified").StructClassReified<I64, I64Fields>;
    static phantom(): PhantomReified<ToTypeStr<I64>>;
    static get p(): PhantomReified<"0x8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e::i64::I64">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        negative: boolean;
        magnitude: string;
    }, {
        negative: boolean;
        magnitude: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): I64;
    static fromFieldsWithTypes(item: FieldsWithTypes): I64;
    static fromBcs(data: Uint8Array): I64;
    toJSONField(): {
        negative: boolean;
        magnitude: string;
    };
    toJSON(): {
        negative: boolean;
        magnitude: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): I64;
    static fromJSON(json: Record<string, any>): I64;
    static fromSuiParsedData(content: SuiParsedData): I64;
    static fromSuiObjectData(data: SuiObjectData): I64;
    static fetch(client: SuiClient, id: string): Promise<I64>;
}
