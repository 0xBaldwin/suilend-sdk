import { Option } from "../../_dependencies/source/0x1/option/structs";
import { PhantomReified, Reified, StructClass, ToField, ToTypeArgument, ToTypeStr, TypeArgument } from "../../_framework/reified";
import { FieldsWithTypes } from "../../_framework/util";
import { PKG_V1 } from "../index";
import { BcsType } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
export declare function isCell(type: string): boolean;
export interface CellFields<Element extends TypeArgument> {
    element: ToField<Option<Element>>;
}
export type CellReified<Element extends TypeArgument> = Reified<Cell<Element>, CellFields<Element>>;
export declare class Cell<Element extends TypeArgument> implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 1;
    static readonly $isPhantom: readonly [false];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::cell::Cell<${ToTypeStr<Element>}>`;
    readonly $typeArgs: [ToTypeStr<Element>];
    readonly $isPhantom: readonly [false];
    readonly element: ToField<Option<Element>>;
    private constructor();
    static reified<Element extends Reified<TypeArgument, any>>(Element: Element): CellReified<ToTypeArgument<Element>>;
    static get r(): typeof Cell.reified;
    static phantom<Element extends Reified<TypeArgument, any>>(Element: Element): PhantomReified<ToTypeStr<Cell<ToTypeArgument<Element>>>>;
    static get p(): typeof Cell.phantom;
    static get bcs(): <Element extends BcsType<any>>(Element: Element) => BcsType<{
        element: {
            vec: any[];
        };
    }, {
        element: {
            vec: Iterable<any> & {
                length: number;
            };
        };
    }>;
    static fromFields<Element extends Reified<TypeArgument, any>>(typeArg: Element, fields: Record<string, any>): Cell<ToTypeArgument<Element>>;
    static fromFieldsWithTypes<Element extends Reified<TypeArgument, any>>(typeArg: Element, item: FieldsWithTypes): Cell<ToTypeArgument<Element>>;
    static fromBcs<Element extends Reified<TypeArgument, any>>(typeArg: Element, data: Uint8Array): Cell<ToTypeArgument<Element>>;
    toJSONField(): {
        element: import("../../_framework/reified").ToJSON<Element> | null;
    };
    toJSON(): {
        element: import("../../_framework/reified").ToJSON<Element> | null;
        $typeName: string;
        $typeArgs: [ToTypeStr<Element>];
    };
    static fromJSONField<Element extends Reified<TypeArgument, any>>(typeArg: Element, field: any): Cell<ToTypeArgument<Element>>;
    static fromJSON<Element extends Reified<TypeArgument, any>>(typeArg: Element, json: Record<string, any>): Cell<ToTypeArgument<Element>>;
    static fromSuiParsedData<Element extends Reified<TypeArgument, any>>(typeArg: Element, content: SuiParsedData): Cell<ToTypeArgument<Element>>;
    static fromSuiObjectData<Element extends Reified<TypeArgument, any>>(typeArg: Element, data: SuiObjectData): Cell<ToTypeArgument<Element>>;
    static fetch<Element extends Reified<TypeArgument, any>>(client: SuiClient, typeArg: Element, id: string): Promise<Cell<ToTypeArgument<Element>>>;
}
