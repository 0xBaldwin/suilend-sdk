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
exports.fetchAllObligationsForMarketWithHandler = fetchAllObligationsForMarketWithHandler;
exports.fetchAllObligationsForMarket = fetchAllObligationsForMarket;
exports.getObligationHistoryPage = getObligationHistoryPage;
const utils_1 = require("@mysten/sui/utils");
const p_limit_1 = __importDefault(require("p-limit"));
const reified_1 = require("../_generated/_framework/reified");
const suilend_1 = require("../_generated/suilend");
const structs_1 = require("../_generated/suilend/obligation/structs");
const parsed = __importStar(require("./events"));
function fetchAllObligationsForMarketWithHandler(client, lendingMarketId, lendingMarketType, chunkHandler) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const limit = (0, p_limit_1.default)(30);
        const rawLendingMarket = yield client.getObject({
            id: lendingMarketId,
            options: {
                showType: true,
                showContent: true,
                showOwner: true,
                showBcs: true,
            },
        });
        const obligationField = ((_a = rawLendingMarket.data) === null || _a === void 0 ? void 0 : _a.content).fields
            .obligations;
        const obligationOwnerID = obligationField.fields.id.id;
        let hasNextPage = true;
        let cursor = null;
        const promises = [];
        while (hasNextPage) {
            const response = yield client.getDynamicFields({
                parentId: obligationOwnerID,
                cursor: cursor,
            });
            hasNextPage = response.hasNextPage;
            cursor = response.nextCursor;
            promises.push(limit(() => __awaiter(this, void 0, void 0, function* () {
                var _a;
                const obligationObjects = yield chunkedMultiGet(client, response.data.map((x) => x.objectId));
                const obligations = [];
                for (const rawObligation of obligationObjects) {
                    obligations.push(structs_1.Obligation.fromBcs((0, reified_1.phantom)(lendingMarketType), (0, utils_1.fromBase64)(((_a = rawObligation.data) === null || _a === void 0 ? void 0 : _a.bcs).bcsBytes)));
                }
                yield chunkHandler(obligations);
            })));
        }
        yield Promise.all(promises);
    });
}
function fetchAllObligationsForMarket(client, lendingMarketId, lendingMarketType) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        const rawLendingMarket = yield client.getObject({
            id: lendingMarketId,
            options: {
                showType: true,
                showContent: true,
                showOwner: true,
                showBcs: true,
            },
        });
        const obligationField = ((_a = rawLendingMarket.data) === null || _a === void 0 ? void 0 : _a.content).fields
            .obligations;
        const obligationOwnerID = obligationField.fields.id.id;
        let hasNextPage = true;
        let cursor = null;
        let fields = [];
        while (hasNextPage) {
            const response = yield client.getDynamicFields({
                parentId: obligationOwnerID,
                cursor: cursor,
            });
            fields = fields.concat(response.data);
            hasNextPage = response.hasNextPage;
            cursor = response.nextCursor;
        }
        const obligationObjects = yield chunkedMultiGet(client, fields.map((x) => x.objectId));
        const obligations = [];
        for (const rawObligation of obligationObjects) {
            obligations.push(structs_1.Obligation.fromBcs((0, reified_1.phantom)(lendingMarketType), (0, utils_1.fromBase64)(((_b = rawObligation.data) === null || _b === void 0 ? void 0 : _b.bcs).bcsBytes)));
        }
        return obligations;
    });
}
function chunkedMultiGet(client, objectIds) {
    return __awaiter(this, void 0, void 0, function* () {
        const limit = (0, p_limit_1.default)(30);
        const results = [];
        const chunks = splitIntoChunks(objectIds, 50);
        const promises = [];
        for (const chunk of chunks) {
            promises.push(limit(() => client.multiGetObjects({
                ids: chunk,
                options: {
                    showType: true,
                    showContent: true,
                    showOwner: true,
                    showBcs: true,
                },
            })));
        }
        for (const chunk of yield Promise.all(promises)) {
            for (const result of chunk) {
                results.push(result);
            }
        }
        return results;
    });
}
function splitIntoChunks(arr, chunkSize) {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        result.push(chunk);
    }
    return result;
}
function getObligationHistoryPage(client, obligationId, maxQuantity, cursor) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        if (maxQuantity > 50 || maxQuantity < 1) {
            throw Error("maxQuantity must be between 1 and 50");
        }
        const payload = yield client.queryTransactionBlocks({
            cursor: cursor,
            limit: maxQuantity,
            order: "descending",
            filter: {
                ChangedObject: obligationId,
            },
            options: {
                showEffects: true,
                showEvents: true,
            },
        });
        let formattedEvents = [];
        for (const data of payload.data) {
            const events = ((_a = data.events) === null || _a === void 0 ? void 0 : _a.filter((e) => e.packageId === suilend_1.PACKAGE_ID)) || [];
            formattedEvents = formattedEvents.concat(formatEventsToHistory(obligationId, data, events));
        }
        if (payload.hasNextPage) {
            return {
                cursor: payload.nextCursor,
                history: formattedEvents,
            };
        }
        return {
            cursor: null,
            history: formattedEvents,
        };
    });
}
function formatEventsToHistory(obligationId, data, events) {
    const formattedEvents = [];
    for (const [, event] of events.entries()) {
        const eventComponents = event.type.split("::");
        const eventType = eventComponents[eventComponents.length - 1];
        if (eventType === "DepositEvent") {
            const deposit = new parsed.DepositEvent(event);
            if (deposit.params().obligation_id !== obligationId) {
                continue;
            }
            // Find the corresponding mint event
            const matchingEvent = events.find((e) => {
                return (e.type.includes("MintEvent") &&
                    new parsed.MintEvent(e).params().ctoken_amount ===
                        deposit.params().ctoken_amount);
            });
            if (!matchingEvent) {
                // TODO: Handle case with solo Mint or solo Deposit
                continue;
            }
            const mint = new parsed.MintEvent(matchingEvent);
            formattedEvents.push({
                reserveId: deposit.params().reserve_id,
                quantity: parseInt(mint.params().liquidity_amount),
                action: "Deposit",
                timestampMs: parseInt(data.timestampMs, 10),
                digest: data.digest,
            });
        }
        else if (eventType === "WithdrawEvent") {
            const withdraw = new parsed.WithdrawEvent(event);
            if (withdraw.params().obligation_id !== obligationId) {
                continue;
            }
            // Find the corresponding mint event
            const matchingEvent = events.find((e) => {
                return (e.type.includes("RedeemEvent") &&
                    new parsed.RedeemEvent(e).params().ctoken_amount ===
                        withdraw.params().ctoken_amount);
            });
            if (!matchingEvent) {
                continue;
            }
            const redeem = new parsed.RedeemEvent(matchingEvent);
            formattedEvents.push({
                reserveId: redeem.params().reserve_id,
                quantity: parseInt(redeem.params().liquidity_amount),
                action: "Withdraw",
                timestampMs: parseInt(data.timestampMs, 10),
                digest: data.digest,
            });
        }
        else if (eventType === "BorrowEvent") {
            const borrow = new parsed.BorrowEvent(event);
            if (borrow.params().obligation_id !== obligationId) {
                continue;
            }
            formattedEvents.push({
                reserveId: borrow.params().reserve_id,
                quantity: parseInt(borrow.params().liquidity_amount),
                action: "Borrow",
                timestampMs: parseInt(data.timestampMs, 10),
                digest: data.digest,
            });
        }
        else if (eventType === "RepayEvent") {
            const repay = new parsed.RepayEvent(event);
            if (repay.params().obligation_id !== obligationId) {
                continue;
            }
            formattedEvents.push({
                reserveId: repay.params().reserve_id,
                quantity: parseInt(repay.params().liquidity_amount),
                action: "Repay",
                timestampMs: parseInt(data.timestampMs, 10),
                digest: data.digest,
            });
        }
        else if (eventType === "LiquidateEvent") {
            const liquidate = new parsed.LiquidateEvent(event);
            if (liquidate.params().obligation_id !== obligationId) {
                continue;
            }
            formattedEvents.push({
                repayReserveId: liquidate.params().repay_reserve_id,
                repayQuantity: parseInt(liquidate.params().repay_amount),
                withdrawReserveId: liquidate.params().withdraw_reserve_id,
                withdrawQuantity: parseInt(liquidate.params().withdraw_amount),
                action: "Liquidation",
                timestampMs: parseInt(data.timestampMs, 10),
                digest: data.digest,
            });
        }
        else if (eventType === "ClaimRewardEvent") {
            const claimReward = new parsed.ClaimRewardEvent(event);
            if (claimReward.params().obligation_id !== obligationId) {
                continue;
            }
            formattedEvents.push({
                reserveId: claimReward.params().reserve_id,
                quantity: parseInt(claimReward.params().liquidity_amount),
                action: "Claim Reward",
                timestampMs: parseInt(data.timestampMs, 10),
                digest: data.digest,
            });
        }
    }
    return formattedEvents;
}
