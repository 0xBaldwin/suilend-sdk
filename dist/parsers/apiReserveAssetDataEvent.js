"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDownsampledApiReserveAssetDataEvent = exports.parseReserveAssetDataEvent = void 0;
const utils_1 = require("@mysten/sui/utils");
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const constants_1 = require("../lib/constants");
const parseReserveAssetDataEvent = (event, reserve) => {
    const availableAmount = new bignumber_js_1.default(event.availableAmount)
        .div(constants_1.WAD)
        .div(10 ** reserve.mintDecimals);
    const depositedAmount = new bignumber_js_1.default(event.supplyAmount)
        .div(constants_1.WAD)
        .div(10 ** reserve.mintDecimals);
    const borrowedAmount = new bignumber_js_1.default(event.borrowedAmount)
        .div(constants_1.WAD)
        .div(10 ** reserve.mintDecimals);
    const availableAmountUsd = new bignumber_js_1.default(event.availableAmountUsdEstimate).div(constants_1.WAD);
    const depositedAmountUsd = new bignumber_js_1.default(event.supplyAmountUsdEstimate).div(constants_1.WAD);
    const borrowedAmountUsd = new bignumber_js_1.default(event.borrowedAmountUsdEstimate).div(constants_1.WAD);
    const borrowAprPercent = new bignumber_js_1.default(event.borrowApr).div(constants_1.WAD).times(100);
    const depositAprPercent = new bignumber_js_1.default(event.supplyApr).div(constants_1.WAD).times(100);
    const ctokenSupply = new bignumber_js_1.default(event.ctokenSupply).div(10 ** reserve.mintDecimals);
    const cumulativeBorrowRate = new bignumber_js_1.default(event.cumulativeBorrowRate).div(constants_1.WAD);
    const price = new bignumber_js_1.default(event.price).div(constants_1.WAD);
    const smoothedPrice = new bignumber_js_1.default(event.smoothedPrice).div(constants_1.WAD);
    const minPrice = bignumber_js_1.default.min(price, smoothedPrice);
    const maxPrice = bignumber_js_1.default.max(price, smoothedPrice);
    // Custom
    const utilizationPercent = depositedAmount.eq(0)
        ? new bignumber_js_1.default(0)
        : borrowedAmount.div(depositedAmount).times(100);
    return {
        id: event.id,
        lendingMarketId: event.lendingMarketId,
        coinType: (0, utils_1.normalizeStructTag)(event.coinType),
        reserveId: event.reserveId,
        availableAmount,
        depositedAmount,
        borrowedAmount,
        availableAmountUsd,
        depositedAmountUsd,
        borrowedAmountUsd,
        borrowAprPercent,
        depositAprPercent,
        ctokenSupply,
        cumulativeBorrowRate,
        price,
        smoothedPrice,
        minPrice,
        maxPrice,
        priceLastUpdateTimestampS: event.priceLastUpdateTimestampS,
        timestampS: event.timestamp,
        digest: event.digest,
        eventIndex: event.eventIndex,
        sender: event.sender,
        utilizationPercent,
    };
};
exports.parseReserveAssetDataEvent = parseReserveAssetDataEvent;
const parseDownsampledApiReserveAssetDataEvent = (event, reserve) => {
    return Object.assign(Object.assign({}, (0, exports.parseReserveAssetDataEvent)(event, reserve)), { sampleTimestampS: event.sampletimestamp });
};
exports.parseDownsampledApiReserveAssetDataEvent = parseDownsampledApiReserveAssetDataEvent;
