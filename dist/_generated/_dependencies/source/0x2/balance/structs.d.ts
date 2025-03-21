import { PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { PKG_V30 } from "../index";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
export declare function isBalance(type: string): boolean;
export interface BalanceFields<T extends PhantomTypeArgument> {
    value: ToField<"u64">;
}
export type BalanceReified<T extends PhantomTypeArgument> = Reified<Balance<T>, BalanceFields<T>>;
export declare class Balance<T extends PhantomTypeArgument> implements StructClass {
    __StructClass: true;
    static readonly $typeName = "0x2::balance::Balance";
    static readonly $numTypeParams = 1;
    static readonly $isPhantom: readonly [true];
    readonly $typeName = "0x2::balance::Balance";
    readonly $fullTypeName: `${typeof PKG_V30}::balance::Balance<${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<T>];
    readonly $isPhantom: readonly [true];
    readonly value: ToField<"u64">;
    private constructor();
    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): BalanceReified<ToPhantomTypeArgument<T>>;
    static get r(): typeof Balance.reified;
    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<Balance<ToPhantomTypeArgument<T>>>>;
    static get p(): typeof Balance.phantom;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        value: string;
    }, {
        value: string | number | bigint;
    }>;
    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): Balance<ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): Balance<ToPhantomTypeArgument<T>>;
    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): Balance<ToPhantomTypeArgument<T>>;
    toJSONField(): {
        value: string;
    };
    toJSON(): {
        value: string;
        $typeName: string;
        $typeArgs: [PhantomToTypeStr<T>];
    };
    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): Balance<ToPhantomTypeArgument<T>>;
    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): Balance<ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): Balance<ToPhantomTypeArgument<T>>;
    static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: SuiObjectData): Balance<ToPhantomTypeArgument<T>>;
    static fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<Balance<ToPhantomTypeArgument<T>>>;
}
export declare function isSupply(type: string): boolean;
export interface SupplyFields<T extends PhantomTypeArgument> {
    value: ToField<"u64">;
}
export type SupplyReified<T extends PhantomTypeArgument> = Reified<Supply<T>, SupplyFields<T>>;
export declare class Supply<T extends PhantomTypeArgument> implements StructClass {
    __StructClass: true;
    static readonly $typeName = "0x2::balance::Supply";
    static readonly $numTypeParams = 1;
    static readonly $isPhantom: readonly [true];
    readonly $typeName = "0x2::balance::Supply";
    readonly $fullTypeName: `${typeof PKG_V30}::balance::Supply<${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<T>];
    readonly $isPhantom: readonly [true];
    readonly value: ToField<"u64">;
    private constructor();
    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): SupplyReified<ToPhantomTypeArgument<T>>;
    static get r(): typeof Supply.reified;
    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<Supply<ToPhantomTypeArgument<T>>>>;
    static get p(): typeof Supply.phantom;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        value: string;
    }, {
        value: string | number | bigint;
    }>;
    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): Supply<ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): Supply<ToPhantomTypeArgument<T>>;
    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): Supply<ToPhantomTypeArgument<T>>;
    toJSONField(): {
        value: string;
    };
    toJSON(): {
        value: string;
        $typeName: string;
        $typeArgs: [PhantomToTypeStr<T>];
    };
    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): Supply<ToPhantomTypeArgument<T>>;
    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): Supply<ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): Supply<ToPhantomTypeArgument<T>>;
    static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: SuiObjectData): Supply<ToPhantomTypeArgument<T>>;
    static fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<Supply<ToPhantomTypeArgument<T>>>;
}
