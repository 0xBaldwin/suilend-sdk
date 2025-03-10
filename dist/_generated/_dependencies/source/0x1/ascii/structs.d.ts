import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { Vector } from "../../../../_framework/vector";
import { PKG_V13 } from "../index";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
export declare function isChar(type: string): boolean;
export interface CharFields {
    byte: ToField<"u8">;
}
export type CharReified = Reified<Char, CharFields>;
export declare class Char implements StructClass {
    __StructClass: true;
    static readonly $typeName = "0x1::ascii::Char";
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName = "0x1::ascii::Char";
    readonly $fullTypeName: `${typeof PKG_V13}::ascii::Char`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly byte: ToField<"u8">;
    private constructor();
    static reified(): CharReified;
    static get r(): reified.StructClassReified<Char, CharFields>;
    static phantom(): PhantomReified<ToTypeStr<Char>>;
    static get p(): reified.PhantomReified<"0x1::ascii::Char">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        byte: number;
    }, {
        byte: number;
    }>;
    static fromFields(fields: Record<string, any>): Char;
    static fromFieldsWithTypes(item: FieldsWithTypes): Char;
    static fromBcs(data: Uint8Array): Char;
    toJSONField(): {
        byte: number;
    };
    toJSON(): {
        byte: number;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Char;
    static fromJSON(json: Record<string, any>): Char;
    static fromSuiParsedData(content: SuiParsedData): Char;
    static fromSuiObjectData(data: SuiObjectData): Char;
    static fetch(client: SuiClient, id: string): Promise<Char>;
}
export declare function isString(type: string): boolean;
export interface StringFields {
    bytes: ToField<Vector<"u8">>;
}
export type StringReified = Reified<String, StringFields>;
export declare class String implements StructClass {
    __StructClass: true;
    static readonly $typeName = "0x1::ascii::String";
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName = "0x1::ascii::String";
    readonly $fullTypeName: `${typeof PKG_V13}::ascii::String`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly bytes: ToField<Vector<"u8">>;
    private constructor();
    static reified(): StringReified;
    static get r(): reified.StructClassReified<String, StringFields>;
    static phantom(): PhantomReified<ToTypeStr<String>>;
    static get p(): reified.PhantomReified<"0x1::ascii::String">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        bytes: number[];
    }, {
        bytes: Iterable<number> & {
            length: number;
        };
    }>;
    static fromFields(fields: Record<string, any>): String;
    static fromFieldsWithTypes(item: FieldsWithTypes): String;
    static fromBcs(data: Uint8Array): String;
    toJSONField(): {
        bytes: number[];
    };
    toJSON(): {
        bytes: number[];
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): String;
    static fromJSON(json: Record<string, any>): String;
    static fromSuiParsedData(content: SuiParsedData): String;
    static fromSuiObjectData(data: SuiObjectData): String;
    static fetch(client: SuiClient, id: string): Promise<String>;
}
