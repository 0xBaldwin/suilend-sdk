import { Reified, ToField, ToTypeArgument, ToTypeStr, TypeArgument, VectorClass, VectorClassReified } from "./reified";
import { FieldsWithTypes } from "./util";
export type VectorElements<T extends TypeArgument> = Array<ToField<T>>;
export type VectorReified<T extends TypeArgument> = VectorClassReified<Vector<T>, VectorElements<T>>;
export declare class Vector<T extends TypeArgument> implements VectorClass {
    __VectorClass: true;
    static readonly $typeName = "vector";
    static readonly $numTypeParams = 1;
    static readonly $isPhantom: readonly [false];
    readonly $typeName = "vector";
    readonly $fullTypeName: `vector<${ToTypeStr<T>}>`;
    readonly $typeArgs: [ToTypeStr<T>];
    readonly $isPhantom: readonly [false];
    readonly elements: Array<ToField<T>>;
    constructor(typeArgs: [ToTypeStr<T>], elements: VectorElements<T>);
    static reified<T extends Reified<TypeArgument, any>>(T: T): VectorReified<ToTypeArgument<T>>;
    static get r(): typeof Vector.reified;
    static get bcs(): <T, Input>(type: import("@mysten/sui/bcs").BcsType<T, Input>, options?: import("@mysten/sui/bcs").BcsTypeOptions<T[], Iterable<Input> & {
        length: number;
    }>) => import("@mysten/sui/bcs").BcsType<T[], Iterable<Input> & {
        length: number;
    }>;
    static fromFields<T extends Reified<TypeArgument, any>>(typeArg: T, elements: any[]): Vector<ToTypeArgument<T>>;
    static fromFieldsWithTypes<T extends Reified<TypeArgument, any>>(typeArg: T, item: FieldsWithTypes): Vector<ToTypeArgument<T>>;
    static fromBcs<T extends Reified<TypeArgument, any>>(typeArg: T, data: Uint8Array): Vector<ToTypeArgument<T>>;
    toJSONField(): import("./reified").ToJSON<T>[];
    toJSON(): {
        $typeName: string;
        $typeArgs: [ToTypeStr<T>];
        elements: import("./reified").ToJSON<T>[];
    };
    static fromJSONField<T extends Reified<TypeArgument, any>>(typeArg: T, field: any[]): Vector<ToTypeArgument<T>>;
    static fromJSON<T extends Reified<TypeArgument, any>>(typeArg: T, json: any): Vector<ToTypeArgument<T>>;
}
export declare function vector<T extends Reified<TypeArgument, any>>(T: T): VectorClassReified<Vector<ToTypeArgument<T>>, VectorElements<ToTypeArgument<T>>>;
