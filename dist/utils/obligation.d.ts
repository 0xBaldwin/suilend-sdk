import { SuiClient } from "@mysten/sui/client";
import { Obligation } from "../_generated/suilend/obligation/structs";
export declare function fetchAllObligationsForMarketWithHandler(client: SuiClient, lendingMarketId: string, lendingMarketType: string, chunkHandler: (obligations: Obligation<string>[]) => Promise<void>): Promise<void>;
export declare function fetchAllObligationsForMarket(client: SuiClient, lendingMarketId: string, lendingMarketType: string): Promise<Obligation<string>[]>;
export type FormattedObligationHistory = NonLiquidationHistoryEvent | LiquidationHistoryEvent;
export type NonLiquidationHistoryEvent = {
    reserveId: string;
    quantity: number;
    action: string;
    timestampMs: number;
    digest: string;
};
export type LiquidationHistoryEvent = {
    repayReserveId: string;
    repayQuantity: number;
    withdrawReserveId: string;
    withdrawQuantity: number;
    action: "Liquidation";
    timestampMs: number;
    digest: string;
};
export declare function getObligationHistoryPage(client: SuiClient, obligationId: string, maxQuantity: number, cursor: string | null): Promise<{
    cursor: string | null | undefined;
    history: FormattedObligationHistory[];
}>;
