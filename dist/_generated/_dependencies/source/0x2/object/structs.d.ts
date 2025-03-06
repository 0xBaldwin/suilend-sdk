import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { PKG_V30 } from "../index";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
export declare function isID(type: string): boolean;
export interface IDFields {
    bytes: ToField<"address">;
}
export type IDReified = Reified<ID, IDFields>;
export declare class ID implements StructClass {
    __StructClass: true;
    static readonly $typeName = "0x2::object::ID";
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName = "0x2::object::ID";
    readonly $fullTypeName: `${typeof PKG_V30}::object::ID`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly bytes: ToField<"address">;
    private constructor();
    static reified(): IDReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<ID, IDFields>;
    static phantom(): PhantomReified<ToTypeStr<ID>>;
    static get p(): PhantomReified<"0x2::object::ID">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        bytes: string;
    }, {
        bytes: string;
    }>;
    static fromFields(fields: Record<string, any>): ID;
    static fromFieldsWithTypes(item: FieldsWithTypes): ID;
    static fromBcs(data: Uint8Array): ID;
    toJSONField(): {
        bytes: string;
    };
    toJSON(): {
        bytes: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ID;
    static fromJSON(json: Record<string, any>): ID;
    static fromSuiParsedData(content: SuiParsedData): ID;
    static fromSuiObjectData(data: SuiObjectData): ID;
    static fetch(client: SuiClient, id: string): Promise<ID>;
}
export declare function isUID(type: string): boolean;
export interface UIDFields {
    id: ToField<ID>;
}
export type UIDReified = Reified<UID, UIDFields>;
export declare class UID implements StructClass {
    __StructClass: true;
    static readonly $typeName = "0x2::object::UID";
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName = "0x2::object::UID";
    readonly $fullTypeName: `${typeof PKG_V30}::object::UID`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly id: ToField<ID>;
    private constructor();
    static reified(): UIDReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<UID, UIDFields>;
    static phantom(): PhantomReified<ToTypeStr<UID>>;
    static get p(): PhantomReified<"0x2::object::UID">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        id: {
            bytes: string;
        };
    }, {
        id: {
            bytes: string;
        };
    }>;
    static fromFields(fields: Record<string, any>): UID;
    static fromFieldsWithTypes(item: FieldsWithTypes): UID;
    static fromBcs(data: Uint8Array): UID;
    toJSONField(): {
        id: string;
    };
    toJSON(): {
        id: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): UID;
    static fromJSON(json: Record<string, any>): UID;
    static fromSuiParsedData(content: SuiParsedData): UID;
    static fromSuiObjectData(data: SuiObjectData): UID;
    static fetch(client: SuiClient, id: string): Promise<UID>;
}
