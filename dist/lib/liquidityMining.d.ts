import { CoinMetadata } from "@mysten/sui/client";
import BigNumber from "bignumber.js";
import { ParsedObligation, ParsedReserve } from "../parsers";
import { Side } from "./types";
export type RewardMap = {
    [coinType: string]: {
        [Side.DEPOSIT]: RewardSummary[];
        [Side.BORROW]: RewardSummary[];
    };
};
type ObligationClaim = {
    claimableAmount: BigNumber;
    reserveArrayIndex: bigint;
};
export type RewardSummary = {
    stats: {
        id: string;
        isActive: boolean;
        rewardIndex: number;
        reserve: ParsedReserve;
        rewardCoinType: string;
        mintDecimals: number;
        price?: BigNumber;
        symbol: string;
        iconUrl?: string | null;
        aprPercent?: BigNumber;
        perDay?: BigNumber;
        side: Side;
    };
    obligationClaims: {
        [obligationId: string]: ObligationClaim;
    };
};
export type AprRewardSummary = Omit<RewardSummary, "stats"> & {
    stats: RewardSummary["stats"] & {
        aprPercent: BigNumber;
        price: BigNumber;
    };
};
export type PerDayRewardSummary = Omit<RewardSummary, "stats"> & {
    stats: RewardSummary["stats"] & {
        perDay: BigNumber;
    };
};
export declare const getDepositShare: (reserve: ParsedReserve, share: BigNumber) => BigNumber;
export declare const getBorrowShare: (reserve: ParsedReserve, share: BigNumber) => BigNumber;
export declare const formatRewards: (parsedReserveMap: Record<string, ParsedReserve>, coinMetadataMap: Record<string, CoinMetadata>, priceMap: Record<string, BigNumber | undefined>, obligations?: ParsedObligation[]) => RewardMap;
export declare const getFilteredRewards: (rewards: RewardSummary[]) => RewardSummary[];
export declare const getDedupedAprRewards: (filteredRewards: RewardSummary[]) => AprRewardSummary[];
export declare const getDedupedPerDayRewards: (filteredRewards: RewardSummary[]) => PerDayRewardSummary[];
export declare const getRewardsAprPercent: (side: Side, filteredRewards: RewardSummary[]) => BigNumber;
export declare const getStakingYieldAprPercent: (side: Side, coinType: string, lstAprPercentMap: Record<string, BigNumber>) => BigNumber | undefined;
export declare const getTotalAprPercent: (side: Side, aprPercent: BigNumber, filteredRewards: RewardSummary[], stakingYieldAprPercent?: BigNumber) => BigNumber;
export declare const getNetAprPercent: (obligation: ParsedObligation, rewardMap: RewardMap, lstAprPercentMap: Record<string, BigNumber>) => BigNumber;
export {};
