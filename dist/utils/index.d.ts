import BigNumber from "bignumber.js";
import { ParsedReserve } from "../parsers/reserve";
export * from "./events";
export * from "./obligation";
export * from "./simulate";
export declare const toHexString: (bytes: number[]) => string;
export declare const reserveSort: (reserves: ParsedReserve[], aCoinType: string, bCoinType: string) => number;
export declare const linearlyInterpolate: (array: any[], xKey: string, yKey: string, _xValue: number | BigNumber) => BigNumber;
