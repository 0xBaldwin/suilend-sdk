"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNetAprPercent = exports.getTotalAprPercent = exports.getStakingYieldAprPercent = exports.getRewardsAprPercent = exports.getDedupedPerDayRewards = exports.getDedupedAprRewards = exports.getFilteredRewards = exports.formatRewards = exports.getBorrowShare = exports.getDepositShare = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const lodash_1 = require("lodash");
const frontend_sui_1 = require("@suilend/frontend-sui");
const constants_1 = require("./constants");
const types_1 = require("./types");
const getDepositShare = (reserve, share) => share.div(10 ** reserve.mintDecimals).times(reserve.cTokenExchangeRate);
exports.getDepositShare = getDepositShare;
const getDepositShareUsd = (reserve, share) => (0, exports.getDepositShare)(reserve, share).times(reserve.price);
const getBorrowShare = (reserve, share) => share.div(10 ** reserve.mintDecimals).times(reserve.cumulativeBorrowRate);
exports.getBorrowShare = getBorrowShare;
const getBorrowShareUsd = (reserve, share) => (0, exports.getBorrowShare)(reserve, share).times(reserve.price);
const formatRewards = (parsedReserveMap, coinMetadataMap, priceMap, obligations) => {
    const nowMs = Date.now();
    const rewardMap = {};
    const getRewardSummary = (reserve, poolReward, side) => {
        const rewardCoinMetadata = coinMetadataMap[poolReward.coinType];
        const rewardPrice = priceMap === null || priceMap === void 0 ? void 0 : priceMap[poolReward.coinType];
        const isActive = nowMs >= poolReward.startTimeMs && nowMs < poolReward.endTimeMs;
        const aprPercent = rewardPrice
            ? poolReward.totalRewards
                .times(rewardPrice)
                .times(new bignumber_js_1.default(frontend_sui_1.MS_PER_YEAR).div(poolReward.endTimeMs - poolReward.startTimeMs))
                .div(side === types_1.Side.DEPOSIT
                ? getDepositShareUsd(reserve, new bignumber_js_1.default(reserve.depositsPoolRewardManager.totalShares.toString()))
                : getBorrowShareUsd(reserve, new bignumber_js_1.default(reserve.borrowsPoolRewardManager.totalShares.toString())))
                .times(100)
            : undefined;
        const perDay = rewardPrice
            ? undefined
            : poolReward.totalRewards
                .times(new bignumber_js_1.default(frontend_sui_1.MS_PER_YEAR).div(poolReward.endTimeMs - poolReward.startTimeMs))
                .div(365)
                .div(side === types_1.Side.DEPOSIT
                ? (0, exports.getDepositShare)(reserve, new bignumber_js_1.default(reserve.depositsPoolRewardManager.totalShares.toString()))
                : (0, exports.getBorrowShare)(reserve, new bignumber_js_1.default(reserve.borrowsPoolRewardManager.totalShares.toString())));
        return {
            stats: {
                id: poolReward.id,
                isActive,
                rewardIndex: poolReward.rewardIndex,
                reserve,
                rewardCoinType: poolReward.coinType,
                mintDecimals: poolReward.mintDecimals,
                price: rewardPrice,
                symbol: rewardCoinMetadata.symbol,
                iconUrl: rewardCoinMetadata.iconUrl,
                aprPercent,
                perDay,
                side,
            },
            obligationClaims: Object.fromEntries((obligations !== null && obligations !== void 0 ? obligations : [])
                .map((obligation) => {
                const claim = getObligationClaim(obligation, poolReward, side === types_1.Side.DEPOSIT
                    ? reserve.depositsPoolRewardManager.id
                    : reserve.borrowsPoolRewardManager.id, reserve.arrayIndex);
                if (!claim)
                    return undefined;
                return [obligation.id, claim];
            })
                .filter(Boolean)),
        };
    };
    Object.values(parsedReserveMap).forEach((reserve) => {
        const depositRewards = reserve.depositsPoolRewardManager.poolRewards.map((poolReward) => getRewardSummary(reserve, poolReward, types_1.Side.DEPOSIT));
        // if (reserve.coinType === NORMALIZED_LBTC_COINTYPE) {
        //   depositRewards.push({
        //     stats: {
        //       id: uuidv4(),
        //       isActive: true,
        //       rewardIndex: -1, // Not applicable as can not be claimed
        //       reserve,
        //       rewardCoinType: NORMALIZED_DEEP_COINTYPE,
        //       mintDecimals: parsedReserveMap[NORMALIZED_DEEP_COINTYPE].mintDecimals,
        //       price: parsedReserveMap[NORMALIZED_DEEP_COINTYPE].price,
        //       symbol: parsedReserveMap[NORMALIZED_DEEP_COINTYPE].token.symbol,
        //       iconUrl: parsedReserveMap[NORMALIZED_DEEP_COINTYPE].token.iconUrl,
        //       aprPercent: new BigNumber(1),
        //       side: Side.DEPOSIT,
        //     },
        //     obligationClaims: {}, // Can not be claimed, will be distributed directly to the user ~once per day
        //   });
        // }
        const borrowRewards = reserve.borrowsPoolRewardManager.poolRewards.map((poolReward) => getRewardSummary(reserve, poolReward, types_1.Side.BORROW));
        rewardMap[reserve.coinType] = {
            [types_1.Side.DEPOSIT]: depositRewards,
            [types_1.Side.BORROW]: borrowRewards,
        };
    });
    return rewardMap;
};
exports.formatRewards = formatRewards;
const getObligationClaim = (obligation, poolReward, reservePoolManagerId, reserveArrayIndex) => {
    const userRewardManager = obligation.original.userRewardManagers.find((urm) => urm.poolRewardManagerId === reservePoolManagerId);
    if (!userRewardManager)
        return;
    const userReward = userRewardManager.rewards[poolReward.rewardIndex];
    if (!userReward)
        return;
    return {
        claimableAmount: (userReward === null || userReward === void 0 ? void 0 : userReward.earnedRewards)
            ? new bignumber_js_1.default(userReward.earnedRewards.value.toString())
                .div(constants_1.WAD)
                .div(10 ** poolReward.mintDecimals)
            : new bignumber_js_1.default(0),
        reserveArrayIndex,
    };
};
const getFilteredRewards = (rewards) => rewards.filter((r) => r.stats.isActive);
exports.getFilteredRewards = getFilteredRewards;
const getDedupedAprRewards = (filteredRewards) => {
    const aprRewards = filteredRewards.filter((r) => r.stats.aprPercent !== undefined);
    const result = [];
    for (const reward of aprRewards) {
        const index = result.findIndex((r) => r.stats.rewardCoinType === reward.stats.rewardCoinType);
        if (index > -1) {
            result[index].stats.aprPercent = result[index].stats.aprPercent.plus(reward.stats.aprPercent);
        }
        else
            result.push((0, lodash_1.cloneDeep)(reward));
    }
    return result;
};
exports.getDedupedAprRewards = getDedupedAprRewards;
const getDedupedPerDayRewards = (filteredRewards) => {
    const perDayRewards = filteredRewards.filter((r) => r.stats.perDay !== undefined);
    const result = [];
    for (const reward of perDayRewards) {
        const index = result.findIndex((r) => r.stats.rewardCoinType === reward.stats.rewardCoinType);
        if (index > -1) {
            result[index].stats.perDay = result[index].stats.perDay.plus(reward.stats.perDay);
        }
        else
            result.push((0, lodash_1.cloneDeep)(reward));
    }
    return result;
};
exports.getDedupedPerDayRewards = getDedupedPerDayRewards;
const getRewardsAprPercent = (side, filteredRewards) => (0, exports.getDedupedAprRewards)(filteredRewards).reduce((acc, reward) => acc.plus(reward.stats.aprPercent.times(side === types_1.Side.DEPOSIT ? 1 : -1)), new bignumber_js_1.default(0));
exports.getRewardsAprPercent = getRewardsAprPercent;
const getStakingYieldAprPercent = (side, coinType, lstAprPercentMap) => (side === types_1.Side.DEPOSIT ? lstAprPercentMap[coinType] : undefined);
exports.getStakingYieldAprPercent = getStakingYieldAprPercent;
const getTotalAprPercent = (side, aprPercent, filteredRewards, stakingYieldAprPercent) => aprPercent
    .plus((0, exports.getRewardsAprPercent)(side, filteredRewards))
    .plus(stakingYieldAprPercent !== null && stakingYieldAprPercent !== void 0 ? stakingYieldAprPercent : 0);
exports.getTotalAprPercent = getTotalAprPercent;
const getNetAprPercent = (obligation, rewardMap, lstAprPercentMap) => {
    const weightedDepositedAmountUsd_aprPercent = obligation.deposits.reduce((acc, deposit) => {
        var _a;
        const weightedDepositedAmountUsd_baseAprPercent = deposit.reserve.depositAprPercent.times(deposit.depositedAmountUsd);
        const weightedDepositedAmountUsd_stakingYieldAprPercent = new bignumber_js_1.default((_a = (0, exports.getStakingYieldAprPercent)(types_1.Side.DEPOSIT, deposit.reserve.coinType, lstAprPercentMap)) !== null && _a !== void 0 ? _a : 0).times(deposit.depositedAmountUsd);
        const weightedDepositedAmountUsd_rewardsAprPercent = (0, exports.getRewardsAprPercent)(types_1.Side.DEPOSIT, (0, exports.getFilteredRewards)(rewardMap[deposit.reserve.coinType].deposit)).times(getDepositShareUsd(deposit.reserve, new bignumber_js_1.default(deposit.userRewardManager.share.toString())));
        return acc
            .plus(weightedDepositedAmountUsd_baseAprPercent)
            .plus(weightedDepositedAmountUsd_stakingYieldAprPercent)
            .plus(weightedDepositedAmountUsd_rewardsAprPercent);
    }, new bignumber_js_1.default(0));
    const weightedBorrowedAmountUsd_aprPercent = obligation.borrows.reduce((acc, borrow) => {
        const weightedBorrowedAmountUsd_baseAprPercent = borrow.reserve.borrowAprPercent.times(borrow.borrowedAmountUsd);
        const weightedBorrowedAmountUsd_rewardsAprPercent = (0, exports.getRewardsAprPercent)(types_1.Side.BORROW, (0, exports.getFilteredRewards)(rewardMap[borrow.reserve.coinType].borrow)).times(getBorrowShareUsd(borrow.reserve, new bignumber_js_1.default(borrow.userRewardManager.share.toString())));
        return acc
            .plus(weightedBorrowedAmountUsd_baseAprPercent)
            .plus(weightedBorrowedAmountUsd_rewardsAprPercent);
    }, new bignumber_js_1.default(0));
    const aprPercentWeightedNetValueUsd = weightedDepositedAmountUsd_aprPercent.minus(weightedBorrowedAmountUsd_aprPercent);
    return !obligation.netValueUsd.eq(0)
        ? aprPercentWeightedNetValueUsd.div(obligation.netValueUsd)
        : new bignumber_js_1.default(0);
};
exports.getNetAprPercent = getNetAprPercent;
