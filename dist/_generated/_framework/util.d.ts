import { Transaction, TransactionArgument, TransactionObjectInput } from "@mysten/sui/transactions";
export interface FieldsWithTypes {
    fields: Record<string, any>;
    type: string;
}
export type ObjectId = string;
export type PureArg = bigint | string | number | boolean | null | TransactionArgument | Array<PureArg>;
export type GenericArg = TransactionObjectInput | PureArg | Array<TransactionObjectInput> | Array<PureArg> | Array<GenericArg>;
export declare function splitGenericParameters(str: string, genericSeparators?: [string, string]): string[];
export declare function parseTypeName(name: string): {
    typeName: string;
    typeArgs: string[];
};
export declare function isTransactionArgument(arg: GenericArg): arg is TransactionArgument;
export declare function obj(tx: Transaction, arg: TransactionObjectInput): {
    GasCoin: true;
} | {
    Input: number;
    type?: "pure" | "object";
} | {
    Result: number;
} | {
    NestedResult: [number, number];
} | ((tx: Transaction) => Exclude<import("valibot").InferInput<typeof import("@mysten/sui/transactions").Argument>, {
    Input: unknown;
    type?: "pure";
}>);
export declare function pure(tx: Transaction, arg: PureArg, type: string): TransactionArgument;
export declare function option(tx: Transaction, type: string, arg: GenericArg | null): TransactionArgument;
export declare function generic(tx: Transaction, type: string, arg: GenericArg): TransactionArgument;
export declare function vector(tx: Transaction, itemType: string, items: Array<GenericArg> | TransactionArgument): TransactionArgument;
export declare function typeArgIsPure(type: string): boolean;
export declare function compressSuiAddress(addr: string): string;
export declare function compressSuiType(type: string): string;
export declare function composeSuiType(typeName: string, ...typeArgs: string[]): string;
