import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../_framework/reified";
import { FieldsWithTypes } from "../../_framework/util";
import { PKG_V1 } from "../index";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
export declare function isDecimal(type: string): boolean;
export interface DecimalFields {
    value: ToField<"u256">;
}
export type DecimalReified = Reified<Decimal, DecimalFields>;
export declare class Decimal implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::decimal::Decimal`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly value: ToField<"u256">;
    private constructor();
    static reified(): DecimalReified;
    static get r(): import("../../_framework/reified").StructClassReified<Decimal, DecimalFields>;
    static phantom(): PhantomReified<ToTypeStr<Decimal>>;
    static get p(): PhantomReified<"0x1f54a9a2d71799553197e9ea24557797c6398d6a65f2d4d3818c9304b75d5e21::decimal::Decimal" | "0xf95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::decimal::Decimal">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        value: string;
    }, {
        value: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): Decimal;
    static fromFieldsWithTypes(item: FieldsWithTypes): Decimal;
    static fromBcs(data: Uint8Array): Decimal;
    toJSONField(): {
        value: string;
    };
    toJSON(): {
        value: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Decimal;
    static fromJSON(json: Record<string, any>): Decimal;
    static fromSuiParsedData(content: SuiParsedData): Decimal;
    static fromSuiObjectData(data: SuiObjectData): Decimal;
    static fetch(client: SuiClient, id: string): Promise<Decimal>;
}
