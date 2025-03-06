import { CoinMetadata } from "@mysten/sui/client";
import BigNumber from "bignumber.js";
import { LendingMarket } from "../_generated/suilend/lending-market/structs";
import { Reserve } from "../_generated/suilend/reserve/structs";
export type ParsedLendingMarket = ReturnType<typeof parseLendingMarket>;
export declare const parseLendingMarket: (lendingMarket: LendingMarket<string>, reserves: Reserve<string>[], coinMetadataMap: Record<string, CoinMetadata>, nowS: number) => {
    id: string;
    type: string;
    version: bigint;
    reserves: {
        config: {
            $typeName: string;
            openLtvPct: number;
            closeLtvPct: number;
            maxCloseLtvPct: number;
            borrowWeightBps: BigNumber;
            depositLimit: BigNumber;
            borrowLimit: BigNumber;
            liquidationBonusBps: number;
            maxLiquidationBonusBps: number;
            depositLimitUsd: BigNumber;
            borrowLimitUsd: BigNumber;
            borrowFeeBps: number;
            spreadFeeBps: number;
            protocolLiquidationFeeBps: number;
            isolated: boolean;
            openAttributedBorrowLimitUsd: number;
            closeAttributedBorrowLimitUsd: number;
            interestRate: {
                id: string;
                utilPercent: BigNumber;
                aprPercent: BigNumber;
            }[];
        };
        $typeName: string;
        id: string;
        arrayIndex: bigint;
        coinType: string;
        mintDecimals: number;
        priceIdentifier: string;
        price: BigNumber;
        smoothedPrice: BigNumber;
        minPrice: BigNumber;
        maxPrice: BigNumber;
        priceLastUpdateTimestampS: bigint;
        availableAmount: BigNumber;
        ctokenSupply: BigNumber;
        borrowedAmount: BigNumber;
        cumulativeBorrowRate: BigNumber;
        interestLastUpdateTimestampS: bigint;
        unclaimedSpreadFees: BigNumber;
        attributedBorrowValue: BigNumber;
        depositsPoolRewardManager: {
            $typeName: string;
            id: string;
            totalShares: bigint;
            poolRewards: {
                $typeName: string;
                id: string;
                poolRewardManagerId: string;
                coinType: string;
                startTimeMs: number;
                endTimeMs: number;
                totalRewards: BigNumber;
                allocatedRewards: BigNumber;
                cumulativeRewardsPerShare: BigNumber;
                numUserRewardManagers: bigint;
                rewardIndex: number;
                symbol: string;
                mintDecimals: number;
            }[];
            lastUpdateTimeMs: bigint;
        };
        borrowsPoolRewardManager: {
            $typeName: string;
            id: string;
            totalShares: bigint;
            poolRewards: {
                $typeName: string;
                id: string;
                poolRewardManagerId: string;
                coinType: string;
                startTimeMs: number;
                endTimeMs: number;
                totalRewards: BigNumber;
                allocatedRewards: BigNumber;
                cumulativeRewardsPerShare: BigNumber;
                numUserRewardManagers: bigint;
                rewardIndex: number;
                symbol: string;
                mintDecimals: number;
            }[];
            lastUpdateTimeMs: bigint;
        };
        availableAmountUsd: BigNumber;
        borrowedAmountUsd: BigNumber;
        depositedAmount: BigNumber;
        depositedAmountUsd: BigNumber;
        cTokenExchangeRate: BigNumber;
        borrowAprPercent: BigNumber;
        depositAprPercent: BigNumber;
        utilizationPercent: BigNumber;
        token: {
            decimals: number;
            description: string;
            iconUrl?: string | null;
            id?: string | null;
            name: string;
            symbol: string;
            coinType: string;
        };
        symbol: string;
        name: string;
        iconUrl: string | null | undefined;
        description: string;
        totalDeposits: BigNumber;
    }[];
    obligations: import("../_generated/_dependencies/source/0x2/object-table/structs").ObjectTable<"0x2::object::ID", `0x1f54a9a2d71799553197e9ea24557797c6398d6a65f2d4d3818c9304b75d5e21::obligation::Obligation<${string}>` | `0xf95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::obligation::Obligation<${string}>`>;
    rateLimiter: {
        config: {
            windowDuration: bigint;
            maxOutflow: bigint;
        };
        $typeName: string;
        prevQty: bigint;
        windowStart: bigint;
        curQty: bigint;
        remainingOutflow: BigNumber;
    };
    feeReceiver: string;
    badDebtUsd: BigNumber;
    badDebtLimitUsd: BigNumber;
    depositedAmountUsd: BigNumber;
    borrowedAmountUsd: BigNumber;
    tvlUsd: BigNumber;
    name: string;
    slug: string;
    ownerCapId: string;
    /**
     * @deprecated since version 1.0.3. Use `depositedAmountUsd` instead.
     */
    totalSupplyUsd: BigNumber;
    /**
     * @deprecated since version 1.0.3. Use `borrowedAmountUsd` instead.
     */
    totalBorrowUsd: BigNumber;
};
