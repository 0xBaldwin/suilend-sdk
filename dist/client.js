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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuilendClient = exports.LENDING_MARKET_TYPE = exports.LENDING_MARKET_ID = exports.LENDING_MARKETS = exports.LENDING_MARKET_REGISTRY_ID = exports.ADMIN_ADDRESS = void 0;
const utils_1 = require("@mysten/sui/utils");
const pyth_sui_js_1 = require("@pythnetwork/pyth-sui-js");
const frontend_sui_1 = require("@suilend/frontend-sui");
const structs_1 = require("./_generated/_dependencies/source/0x8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e/price-info/structs");
const reified_1 = require("./_generated/_framework/reified");
const suilend_1 = require("./_generated/suilend");
const suilend_2 = require("./_generated/suilend");
const functions_1 = require("./_generated/suilend/lending-market/functions");
const structs_2 = require("./_generated/suilend/lending-market/structs");
const functions_2 = require("./_generated/suilend/lending-market-registry/functions");
const structs_3 = require("./_generated/suilend/obligation/structs");
const functions_3 = require("./_generated/suilend/rate-limiter/functions");
const functions_4 = require("./_generated/suilend/reserve-config/functions");
const types_1 = require("./lib/types");
const SUI_COINTYPE = "0x2::sui::SUI";
const NORMALIZED_SUI_COINTYPE = (0, utils_1.normalizeStructTag)(SUI_COINTYPE);
const isSui = (coinType) => (0, utils_1.normalizeStructTag)(coinType) === NORMALIZED_SUI_COINTYPE;
const WORMHOLE_STATE_ID = "0xaeab97f96cf9877fee2883315d459552b2b921edc16d7ceac6eab944dd88919c";
const PYTH_STATE_ID = "0x1f9310238ee9298fb703c3419030b35b22bb1cc37113e3bb5007c99aec79e5b8";
exports.ADMIN_ADDRESS = process.env.NEXT_PUBLIC_SUILEND_USE_BETA_MARKET
    ? "0xa902504c338e17f44dfee1bd1c3cad1ff03326579b9cdcfe2762fc12c46fc033" // beta owner
    : "0xb1ffbc2e1915f44b8f271a703becc1bf8aa79bc22431a58900a102892b783c25";
const SUILEND_UPGRADE_CAP_ID = process.env.NEXT_PUBLIC_SUILEND_USE_BETA_MARKET
    ? "0x05da14368a42a351e106806c09727968ae26be77a6741a018239ef0f99d5185e"
    : "0x3d4ef1859c3ee9fc72858f588b56a09da5466e64f8cc4e90a7b3b909fba8a7ae";
exports.LENDING_MARKET_REGISTRY_ID = process.env
    .NEXT_PUBLIC_SUILEND_USE_BETA_MARKET
    ? "0x925c9a2336b02fc2b68099837bd66f6b5b4d45cd460e0a4b81708bac6c440eff"
    : "0x64faff8d91a56c4f55debbb44767b009ee744a70bc2cc8e3bbd2718c92f85931";
exports.LENDING_MARKETS = process.env
    .NEXT_PUBLIC_SUILEND_USE_BETA_MARKET
    ? [
        // {
        //   name: "Old",
        //   id: "0x850850ef3ec0aa8c3345a2c3c486b571fdc31f3ebcaff931d7f9b9707aace2f8",
        //   type: "0x2::sui::SUI",
        //   ownerCapId:
        //     "0xa92aae3be305687d3abe36deb4d92f78ec17bfce7d8d07972722d1166e4bc6ab",
        // },
        {
            name: "Main market (beta)",
            slug: "main",
            id: "0x12e46de3eafaf0308a2dd64f1158782ed19e6621835bf883a1dd6b3061115667",
            type: "0x83556891f4a0f233ce7b05cfe7f957d4020492a34f5405b2cb9377d060bef4bf::spring_sui::SPRING_SUI",
            ownerCapId: "0xf0df3204ecd426bc83f5e5dccb07ea35f1af220a40ec02dfd63fb7f2fea00824", // Owner: beta owner (0xa902...c033)
        },
        {
            name: "STEAMM LM (beta)",
            slug: "steamm-lm",
            id: "0xb1d89cf9082cedce09d3647f0ebda4a8b5db125aff5d312a8bfd7eefa715bd35",
            type: "0xdeeb7a4662eec9f2f3def03fb937a663dddaa2e215b8078a284d026b7946c270::deep::DEEP",
            ownerCapId: "0xed8262012d34105c5ac59cf2dd6473d492e6ab7529fe7f9ea6cb1fa8dc2dba56", // Owner: beta owner (0xa902...c033)
        },
    ]
    : [
        {
            name: "Main market",
            slug: "main",
            id: "0x84030d26d85eaa7035084a057f2f11f701b7e2e4eda87551becbc7c97505ece1",
            type: "0xf95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::suilend::MAIN_POOL",
            ownerCapId: "0xf7a4defe0b6566b6a2674a02a0c61c9f99bd012eed21bc741a069eaa82d35927",
        },
        {
            name: "STEAMM LM",
            slug: "steamm-lm",
            id: "0xc1888ec1b81a414e427a44829310508352aec38252ee0daa9f8b181b6947de9f",
            type: "0x0a071f4976abae1a7f722199cf0bfcbe695ef9408a878e7d12a7ca87b7e582a6::lp_rewards::LP_REWARDS",
            ownerCapId: "0x55a0f33b24e091830302726c8cfbff8cf8abd2ec1f83a4e6f4bf51c7ba3ad5ab",
            isHidden: true, // Only visible in the admin panel
        },
    ];
exports.LENDING_MARKET_ID = exports.LENDING_MARKETS[0].id; // Main market, for backwards compatibility
exports.LENDING_MARKET_TYPE = exports.LENDING_MARKETS[0].type; // Main market, for backwards compatibility
function getLatestPackageId(client, upgradeCapId) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const object = yield client.getObject({
            id: upgradeCapId,
            options: {
                showContent: true,
            },
        });
        return ((_a = object.data) === null || _a === void 0 ? void 0 : _a.content).fields.package;
    });
}
class SuilendClient {
    constructor(lendingMarket, client) {
        this.lendingMarket = lendingMarket;
        this.client = client;
        this.pythClient = new pyth_sui_js_1.SuiPythClient(client, PYTH_STATE_ID, WORMHOLE_STATE_ID);
        this.pythConnection = new pyth_sui_js_1.SuiPriceServiceConnection("https://hermes.pyth.network");
    }
    static initialize(lendingMarketId, lendingMarketType, client) {
        return __awaiter(this, void 0, void 0, function* () {
            const lendingMarket = yield structs_2.LendingMarket.fetch(client, (0, reified_1.phantom)(lendingMarketType), lendingMarketId);
            const latestPackageId = yield getLatestPackageId(client, SUILEND_UPGRADE_CAP_ID);
            console.log("latestPackageId", latestPackageId);
            (0, suilend_1.setPublishedAt)(latestPackageId);
            return new SuilendClient(lendingMarket, client);
        });
    }
    static getFeeReceivers(client, lendingMarketId) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const feeReceiver = yield client.getDynamicFieldObject({
                parentId: lendingMarketId,
                name: {
                    type: `${suilend_1.PKG_V10}::lending_market::FeeReceiversKey`,
                    value: {
                        dummy_field: false,
                    },
                },
            });
            const data = ((_a = feeReceiver.data) === null || _a === void 0 ? void 0 : _a.content).fields.value.fields;
            const feeReceivers = structs_2.FeeReceivers.fromFields(data);
            return feeReceivers;
        });
    }
    static createNewLendingMarket(registryId, lendingMarketType, transaction) {
        const [ownerCap, lendingMarket] = (0, functions_2.createLendingMarket)(transaction, lendingMarketType, transaction.object(registryId));
        transaction.moveCall({
            target: `0x2::transfer::public_share_object`,
            typeArguments: [`${structs_2.LendingMarket.$typeName}<${lendingMarketType}>}`],
            arguments: [lendingMarket],
        });
        return ownerCap;
    }
    static getObligationOwnerCaps(ownerId, lendingMarketTypeArgs, client) {
        return __awaiter(this, void 0, void 0, function* () {
            const allObjs = [];
            let cursor = null;
            let hasNextPage = true;
            while (hasNextPage) {
                const objs = yield client.getOwnedObjects({
                    owner: ownerId,
                    cursor,
                    filter: {
                        StructType: `${suilend_2.PACKAGE_ID}::lending_market::ObligationOwnerCap<${lendingMarketTypeArgs[0]}>`,
                    },
                });
                allObjs.push(...objs.data);
                cursor = objs.nextCursor;
                hasNextPage = objs.hasNextPage;
            }
            if (allObjs.length > 0) {
                const obligationOwnerCapObjs = yield Promise.all(allObjs.map((objData) => {
                    var _a;
                    return client.getObject({
                        id: (_a = objData.data) === null || _a === void 0 ? void 0 : _a.objectId,
                        options: { showBcs: true },
                    });
                }));
                const obligationOwnerCaps = [];
                obligationOwnerCapObjs.forEach((obj) => {
                    var _a, _b, _c, _d;
                    if (((_b = (_a = obj.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject")
                        throw new Error("Error: invalid data type");
                    obligationOwnerCaps.push(structs_2.ObligationOwnerCap.fromBcs((0, reified_1.phantom)(lendingMarketTypeArgs[0]), (0, utils_1.fromBase64)((_d = (_c = obj.data) === null || _c === void 0 ? void 0 : _c.bcs) === null || _d === void 0 ? void 0 : _d.bcsBytes)));
                });
                return obligationOwnerCaps;
            }
            else {
                return [];
            }
        });
    }
    static getObligation(obligationId, lendingMarketTypeArgs, client) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const obligationData = yield client.getObject({
                id: obligationId,
                options: { showBcs: true },
            });
            if (((_b = (_a = obligationData.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject") {
                throw new Error("Error: invalid data type");
            }
            const obligation = structs_3.Obligation.fromBcs((0, reified_1.phantom)(lendingMarketTypeArgs[0]), (0, utils_1.fromBase64)(obligationData.data.bcs.bcsBytes));
            return obligation;
        });
    }
    getObligation(obligationId) {
        return __awaiter(this, void 0, void 0, function* () {
            return SuilendClient.getObligation(obligationId, this.lendingMarket.$typeArgs, this.client);
        });
    }
    static getLendingMarketOwnerCapId(ownerId, lendingMarketTypeArgs, client) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const objs = yield client.getOwnedObjects({
                owner: ownerId,
                filter: {
                    StructType: `${suilend_2.PACKAGE_ID}::lending_market::LendingMarketOwnerCap<${lendingMarketTypeArgs[0]}>`,
                },
            });
            if (objs.data.length > 0)
                return (_a = objs.data[0].data) === null || _a === void 0 ? void 0 : _a.objectId;
            else
                return undefined;
        });
    }
    getLendingMarketOwnerCapId(ownerId) {
        return __awaiter(this, void 0, void 0, function* () {
            return SuilendClient.getLendingMarketOwnerCapId(ownerId, this.lendingMarket.$typeArgs, this.client);
        });
    }
    createReserve(lendingMarketOwnerCapId, transaction, pythPriceId, coinType, createReserveConfigArgs) {
        return __awaiter(this, void 0, void 0, function* () {
            const [config] = (0, functions_4.createReserveConfig)(transaction, createReserveConfigArgs);
            // Assumes the pyth price feed exists
            const priceUpdateData = yield this.pythConnection.getPriceFeedsUpdateData([
                pythPriceId,
            ]);
            const priceInfoObjectIds = yield this.pythClient.updatePriceFeeds(transaction, priceUpdateData, [pythPriceId]);
            const coin_metadata = yield this.client.getCoinMetadata({
                coinType: coinType,
            });
            if (coin_metadata === null) {
                throw new Error("Error: coin metadata not found");
            }
            return (0, functions_1.addReserve)(transaction, [this.lendingMarket.$typeArgs[0], coinType], {
                lendingMarketOwnerCap: transaction.object(lendingMarketOwnerCapId),
                lendingMarket: transaction.object(this.lendingMarket.id),
                priceInfo: transaction.object(priceInfoObjectIds[0]),
                config: transaction.object(config),
                coinMetadata: transaction.object(coin_metadata.id),
                clock: transaction.object(utils_1.SUI_CLOCK_OBJECT_ID),
            });
        });
    }
    addReward(ownerId_1, lendingMarketOwnerCapId_1, reserveArrayIndex_1, isDepositReward_1, rewardCoinType_1, rewardValue_1, startTimeMs_1, endTimeMs_1, transaction_1) {
        return __awaiter(this, arguments, void 0, function* (ownerId, lendingMarketOwnerCapId, reserveArrayIndex, isDepositReward, rewardCoinType, rewardValue, startTimeMs, endTimeMs, transaction, mergeCoins = true) {
            const coins = (yield this.client.getCoins({
                owner: ownerId,
                coinType: rewardCoinType,
            })).data;
            if (coins.length > 1 && !isSui(rewardCoinType) && mergeCoins) {
                transaction.mergeCoins(transaction.object(coins[0].coinObjectId), coins.map((c) => transaction.object(c.coinObjectId)).slice(1));
            }
            const [rewardCoin] = transaction.splitCoins(isSui(rewardCoinType)
                ? transaction.gas
                : transaction.object(coins[0].coinObjectId), [rewardValue]);
            return (0, functions_1.addPoolReward)(transaction, [this.lendingMarket.$typeArgs[0], rewardCoinType], {
                lendingMarketOwnerCap: transaction.object(lendingMarketOwnerCapId),
                lendingMarket: transaction.object(this.lendingMarket.id),
                reserveArrayIndex: transaction.pure.u64(reserveArrayIndex),
                isDepositReward: transaction.pure.bool(isDepositReward),
                rewards: transaction.object(rewardCoin),
                startTimeMs: transaction.pure.u64(startTimeMs),
                endTimeMs: transaction.pure.u64(endTimeMs),
                clock: transaction.object(utils_1.SUI_CLOCK_OBJECT_ID),
            });
        });
    }
    cancelReward(lendingMarketOwnerCapId, reserveArrayIndex, isDepositReward, rewardIndex, rewardCoinType, transaction) {
        return (0, functions_1.cancelPoolReward)(transaction, [this.lendingMarket.$typeArgs[0], rewardCoinType], {
            lendingMarketOwnerCap: transaction.object(lendingMarketOwnerCapId),
            lendingMarket: transaction.object(this.lendingMarket.id),
            reserveArrayIndex: transaction.pure.u64(reserveArrayIndex),
            isDepositReward: transaction.pure.bool(isDepositReward),
            rewardIndex: transaction.pure.u64(rewardIndex),
            clock: transaction.object(utils_1.SUI_CLOCK_OBJECT_ID),
        });
    }
    closeReward(lendingMarketOwnerCapId, reserveArrayIndex, isDepositReward, rewardIndex, rewardCoinType, transaction) {
        return (0, functions_1.closePoolReward)(transaction, [this.lendingMarket.$typeArgs[0], rewardCoinType], {
            lendingMarketOwnerCap: transaction.object(lendingMarketOwnerCapId),
            lendingMarket: transaction.object(this.lendingMarket.id),
            reserveArrayIndex: transaction.pure.u64(reserveArrayIndex),
            isDepositReward: transaction.pure.bool(isDepositReward),
            rewardIndex: transaction.pure.u64(rewardIndex),
            clock: transaction.object(utils_1.SUI_CLOCK_OBJECT_ID),
        });
    }
    claimReward(obligationOwnerCapId, reserveArrayIndex, rewardIndex, rewardType, side, transaction, packageOveride) {
        return (0, functions_1.claimRewards)(transaction, [this.lendingMarket.$typeArgs[0], rewardType], {
            lendingMarket: transaction.object(this.lendingMarket.id),
            cap: transaction.object(obligationOwnerCapId),
            clock: transaction.object(utils_1.SUI_CLOCK_OBJECT_ID),
            reserveId: transaction.pure.u64(reserveArrayIndex),
            rewardIndex: transaction.pure.u64(rewardIndex),
            isDepositReward: transaction.pure.bool(side === types_1.Side.DEPOSIT),
            packageOveride,
        });
    }
    claimRewardAndDeposit(obligationId, rewardReserveArrayIndex, rewardIndex, rewardType, side, depositReserveArrayIndex, transaction) {
        return (0, functions_1.claimRewardsAndDeposit)(transaction, [this.lendingMarket.$typeArgs[0], rewardType], {
            lendingMarket: transaction.object(this.lendingMarket.id),
            obligationId: transaction.pure.id(obligationId),
            clock: transaction.object(utils_1.SUI_CLOCK_OBJECT_ID),
            rewardReserveId: transaction.pure.u64(rewardReserveArrayIndex),
            rewardIndex: transaction.pure.u64(rewardIndex),
            isDepositReward: transaction.pure.bool(side === types_1.Side.DEPOSIT),
            depositReserveId: transaction.pure.u64(depositReserveArrayIndex),
        });
    }
    claimRewards(ownerId, obligationOwnerCapId, rewards, transaction, isDepositing) {
        const mergeCoinsMap = {};
        for (const reward of rewards) {
            if (isDepositing) {
                const depositReserveArrayIndex = this.findReserveArrayIndex(reward.rewardCoinType);
                if (Number(depositReserveArrayIndex) === -1)
                    continue;
            }
            const [claimedCoin] = this.claimReward(obligationOwnerCapId, reward.reserveArrayIndex, reward.rewardIndex, reward.rewardCoinType, reward.side, transaction);
            if (mergeCoinsMap[reward.rewardCoinType] === undefined)
                mergeCoinsMap[reward.rewardCoinType] = [];
            mergeCoinsMap[reward.rewardCoinType].push(claimedCoin);
        }
        for (const [rewardCoinType, coins] of Object.entries(mergeCoinsMap)) {
            const mergeCoin = coins[0];
            if (coins.length > 1) {
                transaction.mergeCoins(mergeCoin, coins.slice(1));
            }
            if (isDepositing) {
                this.deposit(mergeCoin, rewardCoinType, obligationOwnerCapId, transaction);
            }
            else {
                transaction.transferObjects([mergeCoin], transaction.pure.address(ownerId));
            }
        }
    }
    claimRewardsAndSendToUser(ownerId, obligationOwnerCapId, rewards, transaction) {
        this.claimRewards(ownerId, obligationOwnerCapId, rewards, transaction, false);
    }
    claimRewardsAndDeposit(ownerId, obligationOwnerCapId, rewards, transaction) {
        this.claimRewards(ownerId, obligationOwnerCapId, rewards, transaction, true);
    }
    findReserveArrayIndex(coinType) {
        const arrayIndex = this.lendingMarket.reserves.findIndex((r) => (0, utils_1.normalizeStructTag)(r.coinType.name) === (0, utils_1.normalizeStructTag)(coinType));
        return BigInt(arrayIndex);
    }
    updateReserveConfig(lendingMarketOwnerCapId, transaction, coinType, createReserveConfigArgs) {
        const [config] = (0, functions_4.createReserveConfig)(transaction, createReserveConfigArgs);
        return (0, functions_1.updateReserveConfig)(transaction, [this.lendingMarket.$typeArgs[0], coinType], {
            lendingMarketOwnerCap: transaction.object(lendingMarketOwnerCapId),
            lendingMarket: transaction.object(this.lendingMarket.id),
            reserveArrayIndex: transaction.pure.u64(this.findReserveArrayIndex(coinType)),
            config: transaction.object(config),
        });
    }
    newObligationOwnerCap(transaction, lendingMarketOwnerCapId, destinationAddress, obligationId) {
        const [obligationOwnerCap] = (0, functions_1.newObligationOwnerCap)(transaction, this.lendingMarket.$typeArgs[0], {
            lendingMarketOwnerCap: transaction.object(lendingMarketOwnerCapId),
            lendingMarket: transaction.object(this.lendingMarket.id),
            obligationId: transaction.pure.id(obligationId),
        });
        transaction.transferObjects([obligationOwnerCap], transaction.pure.address(destinationAddress));
    }
    updateRateLimiterConfig(lendingMarketOwnerCapId, transaction, newRateLimiterConfigArgs) {
        const [config] = (0, functions_3.newConfig)(transaction, newRateLimiterConfigArgs);
        return (0, functions_1.updateRateLimiterConfig)(transaction, this.lendingMarket.$typeArgs[0], {
            lendingMarketOwnerCap: transaction.object(lendingMarketOwnerCapId),
            lendingMarket: transaction.object(this.lendingMarket.id),
            clock: transaction.object(utils_1.SUI_CLOCK_OBJECT_ID),
            config: transaction.object(config),
        });
    }
    changeReservePriceFeed(lendingMarketOwnerCapId, coinType, pythPriceId, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const priceUpdateData = yield this.pythConnection.getPriceFeedsUpdateData([
                pythPriceId,
            ]);
            const priceInfoObjectIds = yield this.pythClient.updatePriceFeeds(transaction, priceUpdateData, [pythPriceId]);
            return (0, functions_1.changeReservePriceFeed)(transaction, [this.lendingMarket.$typeArgs[0], coinType], {
                lendingMarketOwnerCap: transaction.object(lendingMarketOwnerCapId),
                lendingMarket: transaction.object(this.lendingMarket.id),
                reserveArrayIndex: transaction.pure.u64(this.findReserveArrayIndex(coinType)),
                priceInfoObj: transaction.object(priceInfoObjectIds[0]),
                clock: transaction.object(utils_1.SUI_CLOCK_OBJECT_ID),
            });
        });
    }
    createObligation(transaction) {
        return transaction.moveCall({
            target: `${suilend_2.PUBLISHED_AT}::lending_market::create_obligation`,
            arguments: [transaction.object(this.lendingMarket.id)],
            typeArguments: this.lendingMarket.$typeArgs,
        });
    }
    refreshAll(transaction, obligation, extraReserveArrayIndex, packageOveride) {
        return __awaiter(this, void 0, void 0, function* () {
            const reserveArrayIndexToPriceId = new Map();
            obligation.deposits.forEach((deposit) => {
                const reserve = this.lendingMarket.reserves[Number(deposit.reserveArrayIndex)];
                reserveArrayIndexToPriceId.set(deposit.reserveArrayIndex, (0, utils_1.toHex)(new Uint8Array(reserve.priceIdentifier.bytes)));
            });
            obligation.borrows.forEach((borrow) => {
                const reserve = this.lendingMarket.reserves[Number(borrow.reserveArrayIndex)];
                reserveArrayIndexToPriceId.set(borrow.reserveArrayIndex, (0, utils_1.toHex)(new Uint8Array(reserve.priceIdentifier.bytes)));
            });
            if (extraReserveArrayIndex != undefined &&
                extraReserveArrayIndex >= 0 &&
                extraReserveArrayIndex < this.lendingMarket.reserves.length) {
                const reserve = this.lendingMarket.reserves[Number(extraReserveArrayIndex)];
                reserveArrayIndexToPriceId.set(extraReserveArrayIndex, (0, utils_1.toHex)(new Uint8Array(reserve.priceIdentifier.bytes)));
            }
            const tuples = Array.from(reserveArrayIndexToPriceId.entries()).sort();
            const reserveArrayIndexes = tuples.map((tuple) => tuple[0]);
            const priceIdentifiers = tuples.map((tuple) => tuple[1]);
            const priceInfoObjectIds = [];
            for (let i = 0; i < priceIdentifiers.length; i++) {
                const priceInfoObjectId = yield this.pythClient.getPriceFeedObjectId(priceIdentifiers[i]);
                priceInfoObjectIds.push(priceInfoObjectId);
            }
            const stalePriceIdentifiers = [];
            for (let i = 0; i < priceInfoObjectIds.length; i++) {
                const priceInfoObject = yield structs_1.PriceInfoObject.fetch(this.client, priceInfoObjectIds[i]);
                const publishTime = priceInfoObject.priceInfo.priceFeed.price.timestamp;
                const stalenessSeconds = Date.now() / 1000 - Number(publishTime);
                if (stalenessSeconds > 20) {
                    const reserve = this.lendingMarket.reserves[Number(reserveArrayIndexes[i])];
                    stalePriceIdentifiers.push(priceIdentifiers[i]);
                }
            }
            if (stalePriceIdentifiers.length > 0) {
                const stalePriceUpdateData = yield this.pythConnection.getPriceFeedsUpdateData(stalePriceIdentifiers);
                yield this.pythClient.updatePriceFeeds(transaction, stalePriceUpdateData, stalePriceIdentifiers);
            }
            for (let i = 0; i < reserveArrayIndexes.length; i++) {
                this.refreshReservePrices(transaction, priceInfoObjectIds[i], reserveArrayIndexes[i], packageOveride);
            }
        });
    }
    refreshReservePrices(transaction, priceInfoObjectId, reserveArrayIndex, packageOveride) {
        return __awaiter(this, void 0, void 0, function* () {
            if (priceInfoObjectId == null) {
                return;
            }
            (0, functions_1.refreshReservePrice)(transaction, this.lendingMarket.$typeArgs[0], {
                lendingMarket: transaction.object(this.lendingMarket.id),
                reserveArrayIndex: transaction.pure.u64(reserveArrayIndex),
                clock: transaction.object(utils_1.SUI_CLOCK_OBJECT_ID),
                priceInfo: transaction.object(priceInfoObjectId),
                packageOveride,
            });
        });
    }
    deposit(sendCoin, coinType, obligationOwnerCap, transaction, packageOveride) {
        const [ctokens] = (0, functions_1.depositLiquidityAndMintCtokens)(transaction, [this.lendingMarket.$typeArgs[0], coinType], {
            lendingMarket: transaction.object(this.lendingMarket.id),
            reserveArrayIndex: transaction.pure.u64(this.findReserveArrayIndex(coinType)),
            clock: transaction.object(utils_1.SUI_CLOCK_OBJECT_ID),
            deposit: sendCoin,
            packageOveride,
        });
        (0, functions_1.depositCtokensIntoObligation)(transaction, [this.lendingMarket.$typeArgs[0], coinType], {
            lendingMarket: transaction.object(this.lendingMarket.id),
            reserveArrayIndex: transaction.pure.u64(this.findReserveArrayIndex(coinType)),
            obligationOwnerCap,
            clock: transaction.object(utils_1.SUI_CLOCK_OBJECT_ID),
            deposit: ctokens,
            packageOveride,
        });
        if (isSui(coinType)) {
            (0, functions_1.rebalanceStaker)(transaction, this.lendingMarket.$typeArgs[0], {
                lendingMarket: transaction.object(this.lendingMarket.id),
                suiReserveArrayIndex: transaction.pure.u64(this.findReserveArrayIndex(coinType)),
                systemState: transaction.object(utils_1.SUI_SYSTEM_STATE_OBJECT_ID),
                packageOveride,
            });
        }
    }
    depositIntoObligation(ownerId, coinType, value, transaction, obligationOwnerCapId) {
        return __awaiter(this, void 0, void 0, function* () {
            const coins = (yield this.client.getCoins({
                owner: ownerId,
                coinType,
            })).data;
            const mergeCoin = coins[0];
            if (coins.length > 1 && !isSui(coinType)) {
                transaction.mergeCoins(transaction.object(mergeCoin.coinObjectId), coins.map((c) => transaction.object(c.coinObjectId)).slice(1));
            }
            const [sendCoin] = transaction.splitCoins(isSui(coinType)
                ? transaction.gas
                : transaction.object(mergeCoin.coinObjectId), [value]);
            this.deposit(sendCoin, coinType, obligationOwnerCapId, transaction);
        });
    }
    depositLiquidityAndGetCTokens(ownerId, coinType, value, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const coins = (yield this.client.getCoins({
                owner: ownerId,
                coinType,
            })).data;
            const mergeCoin = coins[0];
            if (coins.length > 1 && !isSui(coinType)) {
                transaction.mergeCoins(transaction.object(mergeCoin.coinObjectId), coins.map((c) => transaction.object(c.coinObjectId)).slice(1));
            }
            const [sendCoin] = transaction.splitCoins(isSui(coinType)
                ? transaction.gas
                : transaction.object(mergeCoin.coinObjectId), [value]);
            const [ctokens] = (0, functions_1.depositLiquidityAndMintCtokens)(transaction, [this.lendingMarket.$typeArgs[0], coinType], {
                lendingMarket: transaction.object(this.lendingMarket.id),
                reserveArrayIndex: transaction.pure.u64(this.findReserveArrayIndex(coinType)),
                clock: transaction.object(utils_1.SUI_CLOCK_OBJECT_ID),
                deposit: sendCoin,
            });
            transaction.transferObjects([ctokens], transaction.pure.address(ownerId));
        });
    }
    withdraw(obligationOwnerCapId, obligationId, coinType, value, transaction, packageOveride) {
        return __awaiter(this, void 0, void 0, function* () {
            const obligation = yield this.getObligation(obligationId);
            if (!obligation)
                throw new Error("Error: no obligation");
            yield this.refreshAll(transaction, obligation, BigInt(0), packageOveride);
            const [ctokens] = (0, functions_1.withdrawCtokens)(transaction, [this.lendingMarket.$typeArgs[0], coinType], {
                lendingMarket: transaction.object(this.lendingMarket.id),
                reserveArrayIndex: transaction.pure.u64(this.findReserveArrayIndex(coinType)),
                obligationOwnerCap: obligationOwnerCapId,
                clock: transaction.object(utils_1.SUI_CLOCK_OBJECT_ID),
                amount: BigInt(value),
                packageOveride,
            });
            const [exemption] = transaction.moveCall({
                target: `0x1::option::none`,
                typeArguments: [
                    `${suilend_2.PACKAGE_ID}::lending_market::RateLimiterExemption<${this.lendingMarket.$typeArgs[0]}, ${coinType}>`,
                ],
                arguments: [],
            });
            return this.redeem(ctokens, coinType, exemption, transaction, packageOveride);
        });
    }
    redeem(ctokens, coinType, exemption, transaction, packageOveride) {
        const [liquidityRequest] = (0, functions_1.redeemCtokensAndWithdrawLiquidityRequest)(transaction, [this.lendingMarket.$typeArgs[0], coinType], {
            lendingMarket: transaction.object(this.lendingMarket.id),
            reserveArrayIndex: transaction.pure.u64(this.findReserveArrayIndex(coinType)),
            clock: transaction.object(utils_1.SUI_CLOCK_OBJECT_ID),
            ctokens,
            rateLimiterExemption: exemption,
            packageOveride,
        });
        if (isSui(coinType)) {
            (0, functions_1.unstakeSuiFromStaker)(transaction, this.lendingMarket.$typeArgs[0], {
                lendingMarket: transaction.object(this.lendingMarket.id),
                suiReserveArrayIndex: transaction.pure.u64(this.findReserveArrayIndex(coinType)),
                liquidityRequest,
                systemState: transaction.object(utils_1.SUI_SYSTEM_STATE_OBJECT_ID),
                packageOveride,
            });
        }
        return (0, functions_1.fulfillLiquidityRequest)(transaction, [this.lendingMarket.$typeArgs[0], coinType], {
            lendingMarket: transaction.object(this.lendingMarket.id),
            reserveArrayIndex: transaction.pure.u64(this.findReserveArrayIndex(coinType)),
            liquidityRequest,
            packageOveride,
        });
    }
    withdrawAndSendToUser(ownerId, obligationOwnerCapId, obligationId, coinType, value, transaction, packageOveride) {
        return __awaiter(this, void 0, void 0, function* () {
            const [withdrawCoin] = yield this.withdraw(obligationOwnerCapId, obligationId, coinType, value, transaction, packageOveride);
            transaction.transferObjects([withdrawCoin], transaction.pure.address(ownerId));
        });
    }
    borrow(obligationOwnerCapId, obligationId, coinType, value, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const obligation = yield this.getObligation(obligationId);
            if (!obligation)
                throw new Error("Error: no obligation");
            yield this.refreshAll(transaction, obligation, this.findReserveArrayIndex(coinType));
            const [liquidityRequest] = (0, functions_1.borrowRequest)(transaction, [this.lendingMarket.$typeArgs[0], coinType], {
                lendingMarket: transaction.object(this.lendingMarket.id),
                reserveArrayIndex: transaction.pure.u64(this.findReserveArrayIndex(coinType)),
                obligationOwnerCap: obligationOwnerCapId,
                clock: transaction.object(utils_1.SUI_CLOCK_OBJECT_ID),
                amount: BigInt(value),
            });
            if (isSui(coinType)) {
                (0, functions_1.unstakeSuiFromStaker)(transaction, this.lendingMarket.$typeArgs[0], {
                    lendingMarket: transaction.object(this.lendingMarket.id),
                    suiReserveArrayIndex: transaction.pure.u64(this.findReserveArrayIndex(coinType)),
                    liquidityRequest,
                    systemState: transaction.object(utils_1.SUI_SYSTEM_STATE_OBJECT_ID),
                });
            }
            return (0, functions_1.fulfillLiquidityRequest)(transaction, [this.lendingMarket.$typeArgs[0], coinType], {
                lendingMarket: transaction.object(this.lendingMarket.id),
                reserveArrayIndex: transaction.pure.u64(this.findReserveArrayIndex(coinType)),
                liquidityRequest,
            });
        });
    }
    borrowAndSendToUser(ownerId, obligationOwnerCapId, obligationId, coinType, value, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const [borrowCoin] = yield this.borrow(obligationOwnerCapId, obligationId, coinType, value, transaction);
            transaction.transferObjects([borrowCoin], transaction.pure.address(ownerId));
        });
    }
    repay(obligationId, coinType, coin, transaction) {
        return (0, functions_1.repay)(transaction, [this.lendingMarket.$typeArgs[0], coinType], {
            lendingMarket: transaction.object(this.lendingMarket.id),
            reserveArrayIndex: transaction.pure.u64(this.findReserveArrayIndex(coinType)),
            obligationId: transaction.pure.id(obligationId),
            clock: transaction.object(utils_1.SUI_CLOCK_OBJECT_ID),
            maxRepayCoins: coin,
        });
    }
    repayIntoObligation(ownerId, obligationId, coinType, value, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const coins = (yield this.client.getCoins({
                owner: ownerId,
                coinType,
            })).data;
            const mergeCoin = coins[0];
            if (coins.length > 1 && !isSui(coinType)) {
                transaction.mergeCoins(transaction.object(mergeCoin.coinObjectId), coins.map((c) => transaction.object(c.coinObjectId)).slice(1));
            }
            const [sendCoin] = transaction.splitCoins(isSui(coinType)
                ? transaction.gas
                : transaction.object(mergeCoin.coinObjectId), [value]);
            const result = this.repay(obligationId, coinType, sendCoin, transaction);
            transaction.transferObjects([sendCoin], transaction.pure.address(ownerId));
            return result;
        });
    }
    liquidateAndRedeem(transaction, obligation, repayCoinType, withdrawCoinType, repayCoinId) {
        return __awaiter(this, void 0, void 0, function* () {
            const [ctokens, exemption] = yield this.liquidate(transaction, obligation, repayCoinType, withdrawCoinType, repayCoinId);
            const [optionalExemption] = transaction.moveCall({
                target: `0x1::option::some`,
                typeArguments: [
                    `${suilend_2.PUBLISHED_AT}::lending_market::RateLimiterExemption<${this.lendingMarket.$typeArgs[0]}, ${withdrawCoinType}>`,
                ],
                arguments: [exemption],
            });
            return this.redeem(ctokens, withdrawCoinType, optionalExemption, transaction);
        });
    }
    liquidate(transaction, obligation, repayCoinType, withdrawCoinType, repayCoinId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.refreshAll(transaction, obligation);
            return (0, functions_1.liquidate)(transaction, [this.lendingMarket.$typeArgs[0], repayCoinType, withdrawCoinType], {
                lendingMarket: transaction.object(this.lendingMarket.id),
                obligationId: obligation.id,
                repayReserveArrayIndex: transaction.pure.u64(this.findReserveArrayIndex(repayCoinType)),
                withdrawReserveArrayIndex: transaction.pure.u64(this.findReserveArrayIndex(withdrawCoinType)),
                clock: transaction.object(utils_1.SUI_CLOCK_OBJECT_ID),
                repayCoins: repayCoinId,
            });
        });
    }
    migrate(transaction, lendingMarketOwnerCapId) {
        return (0, functions_1.migrate)(transaction, this.lendingMarket.$typeArgs[0], {
            lendingMarketOwnerCap: transaction.object(lendingMarketOwnerCapId),
            lendingMarket: transaction.object(this.lendingMarket.id),
        });
    }
    claimFees(transaction, coinType) {
        return (0, functions_1.claimFees)(transaction, [this.lendingMarket.$typeArgs[0], coinType], {
            lendingMarket: transaction.object(this.lendingMarket.id),
            reserveArrayIndex: transaction.pure.u64(this.findReserveArrayIndex(coinType)),
            systemState: transaction.object(utils_1.SUI_SYSTEM_STATE_OBJECT_ID),
        });
    }
    setFeeReceiversAndWeights(transaction, lendingMarketOwnerCapId, receivers, weights) {
        return (0, functions_1.setFeeReceivers)(transaction, this.lendingMarket.$typeArgs[0], {
            lendingMarketOwnerCap: transaction.object(lendingMarketOwnerCapId),
            lendingMarket: transaction.object(this.lendingMarket.id),
            receivers,
            weights,
        });
    }
    redeemCtokensAndWithdrawLiquidity(ownerId, ctokenCoinTypes, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const mergeCoinsMap = {};
            for (const ctokenCoinType of ctokenCoinTypes) {
                const coins = (yield this.client.getCoins({
                    owner: ownerId,
                    coinType: ctokenCoinType,
                })).data;
                if (coins.length === 0)
                    continue;
                if (mergeCoinsMap[ctokenCoinType] === undefined)
                    mergeCoinsMap[ctokenCoinType] = [];
                mergeCoinsMap[ctokenCoinType].push(...coins);
            }
            for (const [ctokenCoinType, mergeCoins] of Object.entries(mergeCoinsMap)) {
                const mergeCoin = mergeCoins[0];
                if (mergeCoins.length > 1) {
                    transaction.mergeCoins(transaction.object(mergeCoin.coinObjectId), mergeCoins.map((mc) => transaction.object(mc.coinObjectId)).slice(1));
                }
                const coinType = (0, frontend_sui_1.extractCTokenCoinType)(ctokenCoinType);
                const [exemption] = transaction.moveCall({
                    target: `0x1::option::none`,
                    typeArguments: [
                        `${suilend_2.PACKAGE_ID}::lending_market::RateLimiterExemption<${this.lendingMarket.$typeArgs[0]}, ${coinType}>`,
                    ],
                    arguments: [],
                });
                const [redeemCoin] = this.redeem(transaction.object(mergeCoin.coinObjectId), coinType, exemption, transaction);
                transaction.transferObjects([redeemCoin], transaction.pure.address(ownerId));
            }
        });
    }
}
exports.SuilendClient = SuilendClient;
