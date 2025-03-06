"use strict";
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
exports.compoundDebt = exports.totalSupply = exports.cTokenRatio = exports.getCTokenMarketValueLowerBound = exports.getCTokenMarketValue = exports.decimalToBigNumber = exports.stringToDecimal = exports.numberToDecimal = exports.refreshObligation = exports.updateUserRewardManager = exports.refreshReservePrice = exports.updatePoolRewardsManager = exports.compoundReserveInterest = exports.calculateDepositAprPercent = exports.calculateSupplyApr = exports.calculateBorrowAprPercent = exports.calculateBorrowApr = exports.calculateUtilizationPercent = exports.calculateUtilizationRate = void 0;
const bcs_1 = require("@mysten/sui/bcs");
const utils_1 = require("@mysten/sui/utils");
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const uuid_1 = require("uuid");
const structs_1 = require("../_generated/suilend/decimal/structs");
const structs_2 = require("../_generated/suilend/liquidity-mining/structs");
const constants_1 = require("../lib/constants");
const utils_2 = require("../utils");
/**
 * @deprecated since version 1.0.8. Use `calculateUtilizationPercent` instead.
 */
const calculateUtilizationRate = (reserve) => {
    const { mintDecimals } = reserve;
    // From parsers/reserve.ts > parseReserve
    const availableAmount = new bignumber_js_1.default(reserve.availableAmount.toString()).div(10 ** mintDecimals);
    const borrowedAmount = new bignumber_js_1.default(reserve.borrowedAmount.value.toString())
        .div(constants_1.WAD)
        .div(10 ** mintDecimals);
    const depositedAmount = borrowedAmount.plus(availableAmount);
    return depositedAmount.eq(0)
        ? new bignumber_js_1.default(0)
        : borrowedAmount.div(depositedAmount);
};
exports.calculateUtilizationRate = calculateUtilizationRate;
const calculateUtilizationPercent = (reserve) => {
    return (0, exports.calculateUtilizationRate)(reserve).times(100);
};
exports.calculateUtilizationPercent = calculateUtilizationPercent;
/**
 * @deprecated since version 1.0.8. Use `calculateBorrowAprPercent` instead.
 */
const calculateBorrowApr = (reserve) => {
    const config = reserve.config.element;
    const utilizationPercent = (0, exports.calculateUtilizationPercent)(reserve);
    // From parsers/reserve.ts > parseReserveConfig
    const interestRate = config.interestRateUtils.map((util, index) => ({
        id: (0, uuid_1.v4)(),
        utilPercent: new bignumber_js_1.default(util.toString()),
        aprPercent: new bignumber_js_1.default(config.interestRateAprs[index].toString()).div(100),
    }));
    return (0, utils_2.linearlyInterpolate)(interestRate, "utilPercent", "aprPercent", utilizationPercent);
};
exports.calculateBorrowApr = calculateBorrowApr;
const calculateBorrowAprPercent = (reserve) => {
    return (0, exports.calculateBorrowApr)(reserve);
};
exports.calculateBorrowAprPercent = calculateBorrowAprPercent;
/**
 * @deprecated since version 1.0.8. Use `calculateDepositAprPercent` instead.
 */
const calculateSupplyApr = (reserve) => {
    const config = reserve.config.element;
    const utilizationPercent = (0, exports.calculateUtilizationPercent)(reserve);
    const borrowAprPercent = (0, exports.calculateBorrowAprPercent)(reserve);
    // From parsers/reserve.ts > parseReserveConfig
    const spreadFeeBps = Number(config.spreadFeeBps.toString());
    return new bignumber_js_1.default(utilizationPercent.div(100))
        .times(borrowAprPercent.div(100))
        .times(1 - spreadFeeBps / 10000)
        .times(100);
};
exports.calculateSupplyApr = calculateSupplyApr;
const calculateDepositAprPercent = (reserve) => {
    return (0, exports.calculateSupplyApr)(reserve);
};
exports.calculateDepositAprPercent = calculateDepositAprPercent;
const compoundReserveInterest = (reserve, nowS) => {
    var _a, _b;
    const timeElapsedSeconds = nowS - Number(reserve.interestLastUpdateTimestampS);
    if (timeElapsedSeconds === 0) {
        return reserve;
    }
    bignumber_js_1.default.config({ POW_PRECISION: 100 });
    const compoundedBorrowRate = new bignumber_js_1.default(1)
        .plus((0, exports.calculateBorrowAprPercent)(reserve)
        .div(100)
        .div(365 * 24 * 60 * 60))
        .pow(new bignumber_js_1.default(timeElapsedSeconds).toNumber());
    const updatedReserve = Object.assign({}, reserve);
    const oldBorrowedAmount = (0, exports.decimalToBigNumber)(reserve.borrowedAmount);
    const oldCumulativeBorrowRate = (0, exports.decimalToBigNumber)(reserve.cumulativeBorrowRate);
    const oldUnclaimedSpreadFees = (0, exports.decimalToBigNumber)(reserve.unclaimedSpreadFees);
    updatedReserve.cumulativeBorrowRate = (0, exports.stringToDecimal)(compoundedBorrowRate.multipliedBy(oldCumulativeBorrowRate).toString());
    const netNewDebt = oldBorrowedAmount.multipliedBy(compoundedBorrowRate.minus(1));
    const spreadFee = new bignumber_js_1.default(((_b = (_a = reserve.config.element) === null || _a === void 0 ? void 0 : _a.spreadFeeBps) === null || _b === void 0 ? void 0 : _b.toString()) || 0);
    updatedReserve.unclaimedSpreadFees = (0, exports.stringToDecimal)(oldUnclaimedSpreadFees
        .plus(netNewDebt.multipliedBy(spreadFee.dividedBy(10000)))
        .toString());
    updatedReserve.borrowedAmount = (0, exports.stringToDecimal)(oldBorrowedAmount.plus(netNewDebt).toString());
    updatedReserve.interestLastUpdateTimestampS = BigInt(nowS);
    updatedReserve.depositsPoolRewardManager = (0, exports.updatePoolRewardsManager)(updatedReserve.depositsPoolRewardManager, nowS * 1000);
    updatedReserve.borrowsPoolRewardManager = (0, exports.updatePoolRewardsManager)(updatedReserve.borrowsPoolRewardManager, nowS * 1000);
    return updatedReserve;
};
exports.compoundReserveInterest = compoundReserveInterest;
const updatePoolRewardsManager = (manager, nowMs) => {
    const updatedManager = Object.assign({}, manager);
    const timeElapsedMs = nowMs - Number(manager.lastUpdateTimeMs);
    if (manager.totalShares === BigInt(0) || timeElapsedMs === 0) {
        return updatedManager;
    }
    updatedManager.poolRewards = updatedManager.poolRewards.map((poolReward) => {
        if (poolReward === null) {
            return poolReward;
        }
        if (nowMs < poolReward.startTimeMs ||
            manager.lastUpdateTimeMs >= poolReward.endTimeMs) {
            return poolReward;
        }
        const updatedPoolReward = Object.assign({}, poolReward);
        const endTimeMs = Number(poolReward.endTimeMs);
        const startTimeMs = Number(poolReward.startTimeMs);
        const lastUpdateTimeMs = Number(manager.lastUpdateTimeMs);
        const timePassedMs = Math.min(nowMs, endTimeMs) - Math.max(startTimeMs, lastUpdateTimeMs);
        const unlockedRewards = new bignumber_js_1.default(poolReward.totalRewards.toString())
            .multipliedBy(timePassedMs)
            .dividedBy(Number(poolReward.endTimeMs - poolReward.startTimeMs));
        updatedPoolReward.allocatedRewards = (0, exports.stringToDecimal)((0, exports.decimalToBigNumber)(poolReward.allocatedRewards)
            .plus(unlockedRewards)
            .toString());
        updatedPoolReward.cumulativeRewardsPerShare = (0, exports.stringToDecimal)((0, exports.decimalToBigNumber)(poolReward.cumulativeRewardsPerShare)
            .plus(unlockedRewards.dividedBy(Number(manager.totalShares)))
            .toString());
        return updatedPoolReward;
    });
    updatedManager.lastUpdateTimeMs = BigInt(nowMs);
    return updatedManager;
};
exports.updatePoolRewardsManager = updatePoolRewardsManager;
const refreshReservePrice = (reserves, pythConnection) => __awaiter(void 0, void 0, void 0, function* () {
    const priceIdentifiers = reserves.map((r) => (0, utils_1.toHex)(new Uint8Array(r.priceIdentifier.bytes)));
    const priceData = yield pythConnection.getLatestPriceFeeds(priceIdentifiers);
    if (!priceData)
        return reserves;
    const updatedReserves = [];
    for (let i = 0; i < reserves.length; i++) {
        const newReserve = Object.assign({}, reserves[i]);
        newReserve.price = (0, exports.stringToDecimal)(priceData[i].getPriceUnchecked().getPriceAsNumberUnchecked().toString());
        newReserve.smoothedPrice = (0, exports.stringToDecimal)(priceData[i]
            .getEmaPriceUnchecked()
            .getPriceAsNumberUnchecked()
            .toString());
        newReserve.priceLastUpdateTimestampS = BigInt(priceData[i].getPriceUnchecked().publishTime);
        updatedReserves.push(newReserve);
    }
    return updatedReserves;
});
exports.refreshReservePrice = refreshReservePrice;
const updateUserRewardManager = (poolManager, userRewardManager, nowMs) => {
    const updatedUserRewardManager = Object.assign({}, userRewardManager);
    for (let i = 0; i < poolManager.poolRewards.length; i++) {
        const poolReward = poolManager.poolRewards[i];
        if (poolReward == null) {
            continue;
        }
        if (i >= userRewardManager.rewards.length) {
            userRewardManager.rewards.push(null);
        }
        const oldReward = updatedUserRewardManager.rewards[i];
        const reward = Object.assign({}, oldReward);
        if (oldReward != null) {
            const newRewards = (0, exports.decimalToBigNumber)(poolReward.cumulativeRewardsPerShare)
                .minus((0, exports.decimalToBigNumber)(oldReward.cumulativeRewardsPerShare))
                .multipliedBy(new bignumber_js_1.default(Number(userRewardManager.share)));
            reward.earnedRewards = (0, exports.stringToDecimal)((0, exports.decimalToBigNumber)(oldReward.earnedRewards).plus(newRewards).toString());
            reward.cumulativeRewardsPerShare = poolReward.cumulativeRewardsPerShare;
            updatedUserRewardManager.rewards[i] = reward;
        }
        else {
            if (userRewardManager.lastUpdateTimeMs <= poolReward.endTimeMs) {
                updatedUserRewardManager.rewards[i] = structs_2.UserReward.fromFields({
                    pool_reward_id: { bytes: poolReward.id.slice(2) },
                    earned_rewards: (0, exports.stringToDecimal)((userRewardManager.lastUpdateTimeMs <= poolReward.startTimeMs
                        ? (0, exports.decimalToBigNumber)(poolReward.cumulativeRewardsPerShare).multipliedBy(new bignumber_js_1.default(Number(userRewardManager.share)))
                        : new bignumber_js_1.default(0)).toString()),
                    cumulative_rewards_per_share: poolReward.cumulativeRewardsPerShare,
                });
            }
        }
    }
    updatedUserRewardManager.lastUpdateTimeMs = BigInt(nowMs);
    return updatedUserRewardManager;
};
exports.updateUserRewardManager = updateUserRewardManager;
const refreshObligation = (unrefreshedObligation, refreshedReserves) => {
    const obligation = Object.assign({}, unrefreshedObligation);
    // Refresh Deposits
    let depositValueUsd = new bignumber_js_1.default(0);
    let allowedBorrowValueUsd = new bignumber_js_1.default(0);
    let unhealthyBorrowValueUsd = new bignumber_js_1.default(0);
    for (let i = 0; i < obligation.deposits.length; i++) {
        const deposit = Object.assign({}, obligation.deposits[i]);
        const reserve = refreshedReserves.find((r) => r.coinType.name === deposit.coinType.name);
        if (!reserve) {
            throw new Error(`Unable to find reserve for coin type ${deposit.coinType.name}`);
        }
        const config = reserve.config.element;
        obligation.userRewardManagers[Number(deposit.userRewardManagerIndex)] =
            (0, exports.updateUserRewardManager)(reserve.depositsPoolRewardManager, obligation.userRewardManagers[Number(deposit.userRewardManagerIndex)], Date.now());
        const marketValue = (0, exports.getCTokenMarketValue)(reserve, new bignumber_js_1.default(deposit.depositedCtokenAmount.toString()));
        const marketValueLowerBound = (0, exports.getCTokenMarketValueLowerBound)(reserve, new bignumber_js_1.default(deposit.depositedCtokenAmount.toString()));
        deposit.marketValue = (0, exports.stringToDecimal)(marketValue.toString());
        depositValueUsd = depositValueUsd.plus(new bignumber_js_1.default(marketValue.toString()));
        allowedBorrowValueUsd = allowedBorrowValueUsd.plus(marketValueLowerBound.multipliedBy(new bignumber_js_1.default(config.openLtvPct / 100)));
        unhealthyBorrowValueUsd = unhealthyBorrowValueUsd.plus(marketValue.multipliedBy(new bignumber_js_1.default(config.closeLtvPct / 100)));
        obligation.deposits[i] = deposit;
    }
    obligation.unhealthyBorrowValueUsd = (0, exports.stringToDecimal)(unhealthyBorrowValueUsd.toString());
    obligation.allowedBorrowValueUsd = (0, exports.stringToDecimal)(allowedBorrowValueUsd.toString());
    obligation.depositedValueUsd = (0, exports.stringToDecimal)(depositValueUsd.toString());
    // Refresh borrows
    let unweightedBorrowedValueUsd = new bignumber_js_1.default(0);
    let weightedBorrowedValueUsd = new bignumber_js_1.default(0);
    let weightedBorrowedValueUpperBoundUsd = new bignumber_js_1.default(0);
    for (let i = 0; i < obligation.borrows.length; i++) {
        const unrefreshedBorrow = obligation.borrows[i];
        const reserve = refreshedReserves.find((r) => r.coinType.name == unrefreshedBorrow.coinType.name);
        if (!reserve) {
            throw new Error(`Unable to find reserve for coin type ${unrefreshedBorrow.coinType.name}`);
        }
        const config = reserve.config.element;
        const borrow = Object.assign({}, (0, exports.compoundDebt)(unrefreshedBorrow, reserve));
        obligation.userRewardManagers[Number(borrow.userRewardManagerIndex)] =
            (0, exports.updateUserRewardManager)(reserve.borrowsPoolRewardManager, obligation.userRewardManagers[Number(borrow.userRewardManagerIndex)], Date.now());
        const marketValue = (0, exports.decimalToBigNumber)(borrow.borrowedAmount)
            .multipliedBy((0, exports.decimalToBigNumber)(reserve.price))
            .dividedBy(new bignumber_js_1.default(10 ** reserve.mintDecimals));
        const upperBoundPrice = bignumber_js_1.default.max((0, exports.decimalToBigNumber)(reserve.price), (0, exports.decimalToBigNumber)(reserve.smoothedPrice));
        const marketValueUpperBound = (0, exports.decimalToBigNumber)(reserve.borrowedAmount)
            .multipliedBy(upperBoundPrice)
            .dividedBy(new bignumber_js_1.default(10 ** reserve.mintDecimals));
        borrow.marketValue = (0, exports.stringToDecimal)(marketValue.toString());
        unweightedBorrowedValueUsd = unweightedBorrowedValueUsd.plus(marketValue);
        const borrowWeight = new bignumber_js_1.default((config.borrowWeightBps / BigInt(10000)).toString());
        weightedBorrowedValueUsd = weightedBorrowedValueUsd.plus(marketValue.multipliedBy(borrowWeight));
        weightedBorrowedValueUpperBoundUsd =
            weightedBorrowedValueUpperBoundUsd.plus(marketValueUpperBound.multipliedBy(borrowWeight));
    }
    obligation.unweightedBorrowedValueUsd = (0, exports.stringToDecimal)(unweightedBorrowedValueUsd.toString());
    obligation.weightedBorrowedValueUpperBoundUsd = (0, exports.stringToDecimal)(weightedBorrowedValueUpperBoundUsd.toString());
    obligation.weightedBorrowedValueUsd = (0, exports.stringToDecimal)(weightedBorrowedValueUsd.toString());
    return obligation;
};
exports.refreshObligation = refreshObligation;
const numberToDecimal = (value) => {
    const adjustedValue = Math.round(value * +constants_1.WAD);
    return structs_1.Decimal.fromBcs(bcs_1.bcs.u256().serialize(adjustedValue).toBytes());
};
exports.numberToDecimal = numberToDecimal;
const stringToDecimal = (value) => {
    return (0, exports.numberToDecimal)(new bignumber_js_1.default(value).toNumber());
};
exports.stringToDecimal = stringToDecimal;
const decimalToBigNumber = (value) => {
    return new bignumber_js_1.default(value.value.toString()).div(constants_1.WAD);
};
exports.decimalToBigNumber = decimalToBigNumber;
const getCTokenMarketValue = (reserve, depositedCTokenAmount) => {
    const liquidityAmount = depositedCTokenAmount.multipliedBy((0, exports.cTokenRatio)(reserve));
    return (0, exports.decimalToBigNumber)(reserve.price)
        .multipliedBy(liquidityAmount)
        .dividedBy(new bignumber_js_1.default(10 ** reserve.mintDecimals));
};
exports.getCTokenMarketValue = getCTokenMarketValue;
const getCTokenMarketValueLowerBound = (reserve, depositedCTokenAmount) => {
    const liquidityAmount = depositedCTokenAmount.multipliedBy((0, exports.cTokenRatio)(reserve));
    const price = bignumber_js_1.default.min((0, exports.decimalToBigNumber)(reserve.price), (0, exports.decimalToBigNumber)(reserve.smoothedPrice));
    return price
        .multipliedBy(liquidityAmount)
        .dividedBy(new bignumber_js_1.default(10 ** reserve.mintDecimals));
};
exports.getCTokenMarketValueLowerBound = getCTokenMarketValueLowerBound;
const cTokenRatio = (reserve) => {
    if (reserve.ctokenSupply === BigInt(0)) {
        return new bignumber_js_1.default(1);
    }
    return (0, exports.totalSupply)(reserve).dividedBy(new bignumber_js_1.default(reserve.ctokenSupply.toString()));
};
exports.cTokenRatio = cTokenRatio;
const totalSupply = (reserve) => {
    return new bignumber_js_1.default(reserve.availableAmount.toString())
        .plus((0, exports.decimalToBigNumber)(reserve.borrowedAmount))
        .minus((0, exports.decimalToBigNumber)(reserve.unclaimedSpreadFees));
};
exports.totalSupply = totalSupply;
const compoundDebt = (borrow, reserve) => {
    const borrowCopy = Object.assign({}, borrow);
    const newCumulativeBorrowRate = (0, exports.decimalToBigNumber)(reserve.cumulativeBorrowRate);
    const compoundedInterestRate = newCumulativeBorrowRate.dividedBy((0, exports.decimalToBigNumber)(borrow.cumulativeBorrowRate));
    borrowCopy.borrowedAmount = (0, exports.stringToDecimal)((0, exports.decimalToBigNumber)(borrow.borrowedAmount)
        .multipliedBy(compoundedInterestRate)
        .toString());
    borrowCopy.cumulativeBorrowRate = (0, exports.stringToDecimal)(newCumulativeBorrowRate.toString());
    return borrowCopy;
};
exports.compoundDebt = compoundDebt;
