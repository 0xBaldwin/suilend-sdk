import { Transaction, TransactionResult } from "@mysten/sui/transactions";
import { ObligationOwnerCap } from "../_generated/suilend/lending-market/structs";
import { SuilendClient } from "../client";
export declare const createObligationIfNoneExists: (suilendClient: SuilendClient, transaction: Transaction, obligationOwnerCap?: ObligationOwnerCap<string>) => {
    obligationOwnerCapId: string | TransactionResult;
    didCreate: boolean;
};
export declare const sendObligationToUser: (obligationOwnerCapId: string | TransactionResult, address: string, transaction: Transaction) => void;
