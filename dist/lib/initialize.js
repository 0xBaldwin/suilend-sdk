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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeObligations = exports.initializeSuilendRewards = exports.initializeSuilend = exports.RESERVES_CUSTOM_ORDER = void 0;
const utils_1 = require("@mysten/sui/utils");
const pyth_sui_js_1 = require("@pythnetwork/pyth-sui-js");
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const frontend_sui_1 = require("@suilend/frontend-sui");
const client_1 = require("../client");
const parsers_1 = require("../parsers");
const simulate = __importStar(require("../utils/simulate"));
const constants_1 = require("./constants");
exports.RESERVES_CUSTOM_ORDER = [
    // MAIN ASSETS
    frontend_sui_1.NORMALIZED_sSUI_COINTYPE,
    // MAIN ASSETS - Ecosystem LSTs
    frontend_sui_1.NORMALIZED_mSUI_COINTYPE,
    frontend_sui_1.NORMALIZED_fudSUI_COINTYPE,
    frontend_sui_1.NORMALIZED_kSUI_COINTYPE,
    frontend_sui_1.NORMALIZED_trevinSUI_COINTYPE,
    frontend_sui_1.NORMALIZED_upSUI_COINTYPE,
    frontend_sui_1.NORMALIZED_yapSUI_COINTYPE,
    frontend_sui_1.NORMALIZED_SUI_COINTYPE,
    frontend_sui_1.NORMALIZED_USDC_COINTYPE,
    frontend_sui_1.NORMALIZED_suiUSDT_COINTYPE,
    frontend_sui_1.NORMALIZED_AUSD_COINTYPE,
    frontend_sui_1.NORMALIZED_LBTC_COINTYPE,
    frontend_sui_1.NORMALIZED_wBTC_COINTYPE,
    frontend_sui_1.NORMALIZED_suiETH_COINTYPE,
    frontend_sui_1.NORMALIZED_SOL_COINTYPE,
    // ISOLATED ASSETS
    frontend_sui_1.NORMALIZED_SEND_COINTYPE,
    frontend_sui_1.NORMALIZED_DEEP_COINTYPE,
    frontend_sui_1.NORMALIZED_BLUE_COINTYPE,
    frontend_sui_1.NORMALIZED_NS_COINTYPE,
    frontend_sui_1.NORMALIZED_BUCK_COINTYPE,
    // ISOLATED ASSETS - Memecoins
    frontend_sui_1.NORMALIZED_HIPPO_COINTYPE,
    frontend_sui_1.NORMALIZED_LOFI_COINTYPE, // Not listed
    frontend_sui_1.NORMALIZED_FUD_COINTYPE,
    // DEPRECATED ASSETS
    frontend_sui_1.NORMALIZED_wUSDC_COINTYPE,
    frontend_sui_1.NORMALIZED_wUSDT_COINTYPE,
    frontend_sui_1.NORMALIZED_WETH_COINTYPE,
];
const initializeSuilend = (suiClient, suilendClient) => __awaiter(void 0, void 0, void 0, function* () {
    const nowMs = Date.now();
    const nowS = Math.floor(nowMs / 1000);
    const refreshedRawReserves = yield simulate.refreshReservePrice(suilendClient.lendingMarket.reserves.map((r) => simulate.compoundReserveInterest(r, nowS)), new pyth_sui_js_1.SuiPriceServiceConnection("https://hermes.pyth.network"));
    const reserveCoinTypes = [];
    const rewardCoinTypes = [];
    const activeRewardCoinTypes = [];
    refreshedRawReserves.forEach((r) => {
        reserveCoinTypes.push((0, utils_1.normalizeStructTag)(r.coinType.name));
        [
            ...r.depositsPoolRewardManager.poolRewards,
            ...r.borrowsPoolRewardManager.poolRewards,
        ].forEach((pr) => {
            if (!pr)
                return;
            const isActive = nowMs >= Number(pr.startTimeMs) && nowMs < Number(pr.endTimeMs);
            rewardCoinTypes.push((0, utils_1.normalizeStructTag)(pr.coinType.name));
            if (isActive)
                activeRewardCoinTypes.push((0, utils_1.normalizeStructTag)(pr.coinType.name));
        });
    });
    const uniqueReserveCoinTypes = Array.from(new Set(reserveCoinTypes));
    const uniqueRewardCoinTypes = Array.from(new Set(rewardCoinTypes));
    const uniqueActiveRewardsCoinTypes = Array.from(new Set(activeRewardCoinTypes));
    const [reserveCoinMetadataMap, rewardCoinMetadataMap] = yield Promise.all([
        (0, frontend_sui_1.getCoinMetadataMap)(suiClient, uniqueReserveCoinTypes),
        (0, frontend_sui_1.getCoinMetadataMap)(suiClient, uniqueRewardCoinTypes),
    ]);
    const coinMetadataMap = Object.assign(Object.assign({}, reserveCoinMetadataMap), rewardCoinMetadataMap);
    const reservesWithTemporaryPythPriceFeeds = refreshedRawReserves.filter((r) => frontend_sui_1.TEMPORARY_PYTH_PRICE_FEED_COINTYPES.includes((0, utils_1.normalizeStructTag)(r.coinType.name)));
    for (const reserve of reservesWithTemporaryPythPriceFeeds) {
        const birdeyePrice = yield (0, frontend_sui_1.getPrice)((0, utils_1.normalizeStructTag)(reserve.coinType.name));
        if (birdeyePrice === undefined)
            continue;
        const parsedBirdeyePrice = BigInt(+new bignumber_js_1.default(birdeyePrice)
            .times(constants_1.WAD)
            .integerValue(bignumber_js_1.default.ROUND_DOWN));
        reserve.price.value = parsedBirdeyePrice;
        reserve.smoothedPrice.value = parsedBirdeyePrice;
    }
    const lendingMarket = (0, parsers_1.parseLendingMarket)(suilendClient.lendingMarket, refreshedRawReserves, coinMetadataMap, nowS);
    lendingMarket.reserves = lendingMarket.reserves.slice().sort((a, b) => {
        const aCustomOrderIndex = exports.RESERVES_CUSTOM_ORDER.indexOf(a.coinType);
        const bCustomOrderIndex = exports.RESERVES_CUSTOM_ORDER.indexOf(b.coinType);
        if (aCustomOrderIndex > -1 && bCustomOrderIndex > -1)
            return aCustomOrderIndex - bCustomOrderIndex;
        else if (aCustomOrderIndex === -1 && bCustomOrderIndex === -1)
            return 0;
        else
            return aCustomOrderIndex > -1 ? -1 : 1;
    });
    const reserveMap = lendingMarket.reserves.reduce((acc, reserve) => (Object.assign(Object.assign({}, acc), { [reserve.coinType]: reserve })), {});
    return {
        lendingMarket,
        coinMetadataMap,
        refreshedRawReserves,
        reserveMap,
        reserveCoinTypes: uniqueReserveCoinTypes,
        reserveCoinMetadataMap,
        rewardCoinTypes: uniqueRewardCoinTypes,
        activeRewardCoinTypes: uniqueActiveRewardsCoinTypes,
        rewardCoinMetadataMap,
    };
});
exports.initializeSuilend = initializeSuilend;
const initializeSuilendRewards = (reserveMap, activeRewardCoinTypes) => __awaiter(void 0, void 0, void 0, function* () {
    const rewardPriceMap = Object.entries(reserveMap).reduce((acc, [coinType, reserve]) => (Object.assign(Object.assign({}, acc), { [coinType]: reserve.price })), {});
    rewardPriceMap[frontend_sui_1.NORMALIZED_TREATS_COINTYPE] = new bignumber_js_1.default(0.1);
    const reservelessActiveRewardCoinTypes = activeRewardCoinTypes.filter((coinType) => !((0, frontend_sui_1.isSendPoints)(coinType) || coinType === frontend_sui_1.NORMALIZED_MAYA_COINTYPE) &&
        !rewardPriceMap[coinType]);
    const reservelessActiveRewardBirdeyePrices = yield Promise.all(reservelessActiveRewardCoinTypes.map((coinType) => (0, frontend_sui_1.getPrice)(coinType)));
    for (let i = 0; i < reservelessActiveRewardCoinTypes.length; i++) {
        const birdeyePrice = reservelessActiveRewardBirdeyePrices[i];
        if (birdeyePrice === undefined)
            continue;
        rewardPriceMap[reservelessActiveRewardCoinTypes[i]] = new bignumber_js_1.default(birdeyePrice);
    }
    return { rewardPriceMap };
});
exports.initializeSuilendRewards = initializeSuilendRewards;
const initializeObligations = (suiClient, suilendClient, refreshedRawReserves, reserveMap, address) => __awaiter(void 0, void 0, void 0, function* () {
    if (!address)
        return { obligationOwnerCaps: [], obligations: [] };
    const obligationOwnerCaps = yield client_1.SuilendClient.getObligationOwnerCaps(address, suilendClient.lendingMarket.$typeArgs, suiClient);
    const obligations = (yield Promise.all(obligationOwnerCaps.map((ownerCap) => client_1.SuilendClient.getObligation(ownerCap.obligationId, suilendClient.lendingMarket.$typeArgs, suiClient))))
        .map((rawObligation) => simulate.refreshObligation(rawObligation, refreshedRawReserves))
        .map((refreshedObligation) => (0, parsers_1.parseObligation)(refreshedObligation, reserveMap))
        .sort((a, b) => +b.netValueUsd.minus(a.netValueUsd));
    return { obligationOwnerCaps, obligations };
});
exports.initializeObligations = initializeObligations;
