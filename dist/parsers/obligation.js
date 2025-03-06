"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseObligation = void 0;
const utils_1 = require("@mysten/sui/utils");
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const constants_1 = require("../lib/constants");
const parseObligation = (obligation, parsedReserveMap) => {
    let totalDepositedAmountUsd = new bignumber_js_1.default(0);
    let totalBorrowedAmountUsd = new bignumber_js_1.default(0);
    let weightedBorrowsUsd = new bignumber_js_1.default(0);
    let maxPriceWeightedBorrowsUsd = new bignumber_js_1.default(0);
    let borrowLimitUsd = new bignumber_js_1.default(0);
    let minPriceBorrowLimitUsd = new bignumber_js_1.default(0);
    let unhealthyBorrowValueUsd = new bignumber_js_1.default(0);
    let depositPositionCount = 0;
    let borrowPositionCount = 0;
    const deposits = obligation.deposits.map((deposit) => {
        const coinType = (0, utils_1.normalizeStructTag)(deposit.coinType.name);
        const reserve = parsedReserveMap[coinType];
        if (!reserve)
            throw new Error(`Reserve with coinType ${deposit.coinType.name} not found`);
        depositPositionCount++;
        const depositedCtokenAmount = new bignumber_js_1.default(deposit.depositedCtokenAmount.toString());
        const depositedAmount = depositedCtokenAmount
            .times(reserve.cTokenExchangeRate)
            .div(10 ** reserve.mintDecimals);
        const depositedAmountUsd = depositedAmount.times(reserve.price);
        totalDepositedAmountUsd = totalDepositedAmountUsd.plus(depositedAmountUsd);
        borrowLimitUsd = borrowLimitUsd.plus(depositedAmountUsd.times(reserve.config.openLtvPct / 100));
        minPriceBorrowLimitUsd = minPriceBorrowLimitUsd.plus(depositedAmount
            .times(reserve.minPrice)
            .times(reserve.config.openLtvPct / 100));
        unhealthyBorrowValueUsd = unhealthyBorrowValueUsd.plus(depositedAmountUsd.times(reserve.config.closeLtvPct / 100));
        const reserveArrayIndex = deposit.reserveArrayIndex;
        const userRewardManagerIndex = Number(deposit.userRewardManagerIndex.toString());
        const userRewardManager = obligation.userRewardManagers[userRewardManagerIndex];
        return {
            coinType,
            reserveArrayIndex,
            userRewardManagerIndex,
            userRewardManager,
            depositedAmount,
            depositedAmountUsd,
            depositedCtokenAmount,
            reserve,
            original: obligation,
        };
    });
    const borrows = obligation.borrows.map((borrow) => {
        const coinType = (0, utils_1.normalizeStructTag)(borrow.coinType.name);
        const reserve = parsedReserveMap[coinType];
        if (!reserve)
            throw new Error(`Reserve with coinType ${borrow.coinType.name} not found`);
        borrowPositionCount++;
        const cumulativeBorrowRate = new bignumber_js_1.default(borrow.cumulativeBorrowRate.value.toString()).div(constants_1.WAD);
        const borrowedAmountInitial = new bignumber_js_1.default(borrow.borrowedAmount.value.toString())
            .div(constants_1.WAD)
            .div(10 ** reserve.mintDecimals);
        const borrowInterestIndex = reserve.cumulativeBorrowRate.div(cumulativeBorrowRate);
        const borrowedAmount = borrowedAmountInitial.times(borrowInterestIndex);
        const borrowedAmountUsd = borrowedAmount.times(reserve.price);
        totalBorrowedAmountUsd = totalBorrowedAmountUsd.plus(borrowedAmountUsd);
        weightedBorrowsUsd = weightedBorrowsUsd.plus(borrowedAmountUsd.times(reserve.config.borrowWeightBps.div(10000)));
        maxPriceWeightedBorrowsUsd = maxPriceWeightedBorrowsUsd.plus(borrowedAmount
            .times(reserve.maxPrice)
            .times(reserve.config.borrowWeightBps.div(10000)));
        const reserveArrayIndex = borrow.reserveArrayIndex;
        const userRewardManagerIndex = Number(borrow.userRewardManagerIndex.toString());
        const userRewardManager = obligation.userRewardManagers[userRewardManagerIndex];
        return {
            coinType,
            reserveArrayIndex,
            userRewardManagerIndex,
            userRewardManager,
            borrowedAmount,
            borrowedAmountUsd,
            reserve,
            original: obligation,
        };
    });
    const netValueUsd = totalDepositedAmountUsd.minus(totalBorrowedAmountUsd);
    const weightedConservativeBorrowUtilizationPercent = minPriceBorrowLimitUsd.eq(0)
        ? new bignumber_js_1.default(0)
        : maxPriceWeightedBorrowsUsd.div(minPriceBorrowLimitUsd).times(100);
    return {
        id: obligation.id,
        depositedAmountUsd: totalDepositedAmountUsd,
        borrowedAmountUsd: totalBorrowedAmountUsd,
        netValueUsd,
        weightedBorrowsUsd,
        maxPriceWeightedBorrowsUsd,
        borrowLimitUsd,
        minPriceBorrowLimitUsd,
        unhealthyBorrowValueUsd,
        depositPositionCount,
        borrowPositionCount,
        positionCount: depositPositionCount + borrowPositionCount,
        deposits,
        borrows,
        weightedConservativeBorrowUtilizationPercent,
        original: obligation,
        /**
         * @deprecated since version 1.0.3. Use `depositedAmountUsd` instead.
         */
        totalSupplyUsd: totalDepositedAmountUsd,
        /**
         * @deprecated since version 1.0.3. Use `borrowedAmountUsd` instead.
         */
        totalBorrowUsd: totalBorrowedAmountUsd,
        /**
         * @deprecated since version 1.0.3. Use `weightedBorrowsUsd` instead.
         */
        totalWeightedBorrowUsd: weightedBorrowsUsd,
        /**
         * @deprecated since version 1.0.3. Use `maxPriceWeightedBorrowsUsd` instead.
         */
        maxPriceTotalWeightedBorrowUsd: maxPriceWeightedBorrowsUsd,
        /**
         * @deprecated since version 1.0.3. Use `borrowLimitUsd` instead.
         */
        borrowLimit: borrowLimitUsd,
        /**
         * @deprecated since version 1.0.3. Use `minPriceBorrowLimitUsd` instead.
         */
        minPriceBorrowLimit: minPriceBorrowLimitUsd,
    };
};
exports.parseObligation = parseObligation;
