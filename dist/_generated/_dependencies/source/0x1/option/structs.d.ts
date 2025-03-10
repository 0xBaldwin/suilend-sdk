import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeArgument, ToTypeStr, TypeArgument } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { Vector } from "../../../../_framework/vector";
import { PKG_V13 } from "../index";
import { BcsType } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
export declare function isOption(type: string): boolean;
export interface OptionFields<Element extends TypeArgument> {
    vec: ToField<Vector<Element>>;
}
export type OptionReified<Element extends TypeArgument> = Reified<Option<Element>, OptionFields<Element>>;
export declare class Option<Element extends TypeArgument> implements StructClass {
    __StructClass: true;
    static readonly $typeName = "0x1::option::Option";
    static readonly $numTypeParams = 1;
    static readonly $isPhantom: readonly [false];
    __inner: Element;
    readonly $typeName = "0x1::option::Option";
    readonly $fullTypeName: `${typeof PKG_V13}::option::Option<${ToTypeStr<Element>}>`;
    readonly $typeArgs: [ToTypeStr<Element>];
    readonly $isPhantom: readonly [false];
    readonly vec: ToField<Vector<Element>>;
    private constructor();
    static reified<Element extends Reified<TypeArgument, any>>(Element: Element): OptionReified<ToTypeArgument<Element>>;
    static get r(): typeof Option.reified;
    static phantom<Element extends Reified<TypeArgument, any>>(Element: Element): PhantomReified<ToTypeStr<Option<ToTypeArgument<Element>>>>;
    static get p(): typeof Option.phantom;
    static get bcs(): <Element extends BcsType<any>>(Element: Element) => BcsType<{
        vec: any[];
    }, {
        vec: Iterable<any> & {
            length: number;
        };
    }>;
    static fromFields<Element extends Reified<TypeArgument, any>>(typeArg: Element, fields: Record<string, any>): Option<ToTypeArgument<Element>>;
    static fromFieldsWithTypes<Element extends Reified<TypeArgument, any>>(typeArg: Element, item: FieldsWithTypes): Option<ToTypeArgument<Element>>;
    static fromBcs<Element extends Reified<TypeArgument, any>>(typeArg: Element, data: Uint8Array): Option<ToTypeArgument<Element>>;
    toJSONField(): {
        vec: reified.ToJSON<Element>[];
    };
    toJSON(): {
        vec: reified.ToJSON<Element>[];
        $typeName: string;
        $typeArgs: [reified.ToTypeStr<Element>];
    };
    static fromJSONField<Element extends Reified<TypeArgument, any>>(typeArg: Element, field: any): Option<ToTypeArgument<Element>>;
    static fromJSON<Element extends Reified<TypeArgument, any>>(typeArg: Element, json: Record<string, any>): Option<ToTypeArgument<Element>>;
    static fromSuiParsedData<Element extends Reified<TypeArgument, any>>(typeArg: Element, content: SuiParsedData): Option<ToTypeArgument<Element>>;
    static fromSuiObjectData<Element extends Reified<TypeArgument, any>>(typeArg: Element, data: SuiObjectData): Option<ToTypeArgument<Element>>;
    static fetch<Element extends Reified<TypeArgument, any>>(client: SuiClient, typeArg: Element, id: string): Promise<Option<ToTypeArgument<Element>>>;
}
