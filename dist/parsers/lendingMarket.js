"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseLendingMarket = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const client_1 = require("../client");
const rateLimiter_1 = require("./rateLimiter");
const reserve_1 = require("./reserve");
const parseLendingMarket = (lendingMarket, reserves, coinMetadataMap, nowS) => {
    var _a, _b, _c;
    const id = lendingMarket.id;
    const type = lendingMarket.$typeArgs[0];
    const version = lendingMarket.version;
    const parsedReserves = reserves.map((reserve) => (0, reserve_1.parseReserve)(reserve, coinMetadataMap));
    const obligations = lendingMarket.obligations;
    const parsedRateLimiter = (0, rateLimiter_1.parseRateLimiter)(lendingMarket.rateLimiter, nowS);
    const feeReceiver = lendingMarket.feeReceiver;
    const badDebtUsd = new bignumber_js_1.default(lendingMarket.badDebtUsd.value.toString());
    const badDebtLimitUsd = new bignumber_js_1.default(lendingMarket.badDebtLimitUsd.value.toString());
    // Custom
    let depositedAmountUsd = new bignumber_js_1.default(0);
    let borrowedAmountUsd = new bignumber_js_1.default(0);
    let tvlUsd = new bignumber_js_1.default(0);
    parsedReserves.forEach((parsedReserve) => {
        depositedAmountUsd = depositedAmountUsd.plus(parsedReserve.depositedAmountUsd);
        borrowedAmountUsd = borrowedAmountUsd.plus(parsedReserve.borrowedAmountUsd);
        tvlUsd = tvlUsd.plus(parsedReserve.availableAmountUsd);
    });
    const LENDING_MARKET = client_1.LENDING_MARKETS.find((lm) => lm.id === id);
    if (!LENDING_MARKET)
        console.error(`Missing LENDING_MARKETS definition for lending market with id: ${id}`);
    const name = (_a = LENDING_MARKET === null || LENDING_MARKET === void 0 ? void 0 : LENDING_MARKET.name) !== null && _a !== void 0 ? _a : "Unknown";
    const slug = (_b = LENDING_MARKET === null || LENDING_MARKET === void 0 ? void 0 : LENDING_MARKET.slug) !== null && _b !== void 0 ? _b : "unknown";
    const ownerCapId = (_c = LENDING_MARKET === null || LENDING_MARKET === void 0 ? void 0 : LENDING_MARKET.ownerCapId) !== null && _c !== void 0 ? _c : "Unknown";
    return {
        id,
        type,
        version,
        reserves: parsedReserves,
        obligations,
        rateLimiter: parsedRateLimiter,
        feeReceiver,
        badDebtUsd,
        badDebtLimitUsd,
        depositedAmountUsd,
        borrowedAmountUsd,
        tvlUsd,
        name,
        slug,
        ownerCapId,
        /**
         * @deprecated since version 1.0.3. Use `depositedAmountUsd` instead.
         */
        totalSupplyUsd: depositedAmountUsd,
        /**
         * @deprecated since version 1.0.3. Use `borrowedAmountUsd` instead.
         */
        totalBorrowUsd: borrowedAmountUsd,
    };
};
exports.parseLendingMarket = parseLendingMarket;
