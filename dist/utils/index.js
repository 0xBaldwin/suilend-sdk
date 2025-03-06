"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.linearlyInterpolate = exports.reserveSort = exports.toHexString = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
__exportStar(require("./events"), exports);
__exportStar(require("./obligation"), exports);
__exportStar(require("./simulate"), exports);
const toHexString = (bytes) => Array.from(bytes, function (byte) {
    return ("0" + (byte & 0xff).toString(16)).slice(-2);
}).join("");
exports.toHexString = toHexString;
const reserveSort = (reserves, aCoinType, bCoinType) => {
    const aReserveIndex = reserves.findIndex((r) => r.coinType === aCoinType);
    const bReserveIndex = reserves.findIndex((r) => r.coinType === bCoinType);
    if (aReserveIndex > -1 && bReserveIndex > -1)
        return aReserveIndex - bReserveIndex;
    else if (aReserveIndex === -1 && bReserveIndex === -1)
        return 0;
    else
        return aReserveIndex > -1 ? -1 : 1;
};
exports.reserveSort = reserveSort;
const linearlyInterpolate = (array, xKey, yKey, _xValue) => {
    let i = 1;
    while (i < array.length) {
        const leftXValue = new bignumber_js_1.default(array[i - 1][xKey]);
        const leftYValue = new bignumber_js_1.default(array[i - 1][yKey]);
        const xValue = new bignumber_js_1.default(_xValue);
        const rightXValue = new bignumber_js_1.default(array[i][xKey]);
        const rightYValue = new bignumber_js_1.default(array[i][yKey]);
        if (xValue.gte(leftXValue) && xValue.lte(rightXValue)) {
            const weight = new bignumber_js_1.default(xValue.minus(leftXValue)).div(rightXValue.minus(leftXValue));
            return leftYValue.plus(weight.times(rightYValue.minus(leftYValue)));
        }
        i = i + 1;
    }
    // Should never reach here
    return new bignumber_js_1.default(0);
};
exports.linearlyInterpolate = linearlyInterpolate;
