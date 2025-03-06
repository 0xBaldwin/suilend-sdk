import * as reified from "../../_framework/reified";
import { TypeName } from "../../_dependencies/source/0x1/type-name/structs";
import { ID, UID } from "../../_dependencies/source/0x2/object/structs";
import { PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr } from "../../_framework/reified";
import { FieldsWithTypes } from "../../_framework/util";
import { Vector } from "../../_framework/vector";
import { Decimal } from "../decimal/structs";
import { PKG_V1, PKG_V11 } from "../index";
import { UserRewardManager } from "../liquidity-mining/structs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
export declare function isBorrow(type: string): boolean;
export interface BorrowFields {
    coinType: ToField<TypeName>;
    reserveArrayIndex: ToField<"u64">;
    borrowedAmount: ToField<Decimal>;
    cumulativeBorrowRate: ToField<Decimal>;
    marketValue: ToField<Decimal>;
    userRewardManagerIndex: ToField<"u64">;
}
export type BorrowReified = Reified<Borrow, BorrowFields>;
export declare class Borrow implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::obligation::Borrow`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly coinType: ToField<TypeName>;
    readonly reserveArrayIndex: ToField<"u64">;
    readonly borrowedAmount: ToField<Decimal>;
    readonly cumulativeBorrowRate: ToField<Decimal>;
    readonly marketValue: ToField<Decimal>;
    readonly userRewardManagerIndex: ToField<"u64">;
    private constructor();
    static reified(): BorrowReified;
    static get r(): reified.StructClassReified<Borrow, BorrowFields>;
    static phantom(): PhantomReified<ToTypeStr<Borrow>>;
    static get p(): reified.PhantomReified<"0x1f54a9a2d71799553197e9ea24557797c6398d6a65f2d4d3818c9304b75d5e21::obligation::Borrow" | "0xf95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::obligation::Borrow">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        coin_type: {
            name: {
                bytes: number[];
            };
        };
        reserve_array_index: string;
        borrowed_amount: {
            value: string;
        };
        cumulative_borrow_rate: {
            value: string;
        };
        market_value: {
            value: string;
        };
        user_reward_manager_index: string;
    }, {
        coin_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        reserve_array_index: string | number | bigint;
        borrowed_amount: {
            value: string | number | bigint;
        };
        cumulative_borrow_rate: {
            value: string | number | bigint;
        };
        market_value: {
            value: string | number | bigint;
        };
        user_reward_manager_index: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): Borrow;
    static fromFieldsWithTypes(item: FieldsWithTypes): Borrow;
    static fromBcs(data: Uint8Array): Borrow;
    toJSONField(): {
        coinType: {
            name: string;
        };
        reserveArrayIndex: string;
        borrowedAmount: {
            value: string;
        };
        cumulativeBorrowRate: {
            value: string;
        };
        marketValue: {
            value: string;
        };
        userRewardManagerIndex: string;
    };
    toJSON(): {
        coinType: {
            name: string;
        };
        reserveArrayIndex: string;
        borrowedAmount: {
            value: string;
        };
        cumulativeBorrowRate: {
            value: string;
        };
        marketValue: {
            value: string;
        };
        userRewardManagerIndex: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Borrow;
    static fromJSON(json: Record<string, any>): Borrow;
    static fromSuiParsedData(content: SuiParsedData): Borrow;
    static fromSuiObjectData(data: SuiObjectData): Borrow;
    static fetch(client: SuiClient, id: string): Promise<Borrow>;
}
export declare function isBorrowRecord(type: string): boolean;
export interface BorrowRecordFields {
    coinType: ToField<TypeName>;
    reserveArrayIndex: ToField<"u64">;
    borrowedAmount: ToField<Decimal>;
    cumulativeBorrowRate: ToField<Decimal>;
    marketValue: ToField<Decimal>;
    userRewardManagerIndex: ToField<"u64">;
}
export type BorrowRecordReified = Reified<BorrowRecord, BorrowRecordFields>;
export declare class BorrowRecord implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::obligation::BorrowRecord`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly coinType: ToField<TypeName>;
    readonly reserveArrayIndex: ToField<"u64">;
    readonly borrowedAmount: ToField<Decimal>;
    readonly cumulativeBorrowRate: ToField<Decimal>;
    readonly marketValue: ToField<Decimal>;
    readonly userRewardManagerIndex: ToField<"u64">;
    private constructor();
    static reified(): BorrowRecordReified;
    static get r(): reified.StructClassReified<BorrowRecord, BorrowRecordFields>;
    static phantom(): PhantomReified<ToTypeStr<BorrowRecord>>;
    static get p(): reified.PhantomReified<"0x1f54a9a2d71799553197e9ea24557797c6398d6a65f2d4d3818c9304b75d5e21::obligation::BorrowRecord" | "0xf95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::obligation::BorrowRecord">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        coin_type: {
            name: {
                bytes: number[];
            };
        };
        reserve_array_index: string;
        borrowed_amount: {
            value: string;
        };
        cumulative_borrow_rate: {
            value: string;
        };
        market_value: {
            value: string;
        };
        user_reward_manager_index: string;
    }, {
        coin_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        reserve_array_index: string | number | bigint;
        borrowed_amount: {
            value: string | number | bigint;
        };
        cumulative_borrow_rate: {
            value: string | number | bigint;
        };
        market_value: {
            value: string | number | bigint;
        };
        user_reward_manager_index: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): BorrowRecord;
    static fromFieldsWithTypes(item: FieldsWithTypes): BorrowRecord;
    static fromBcs(data: Uint8Array): BorrowRecord;
    toJSONField(): {
        coinType: {
            name: string;
        };
        reserveArrayIndex: string;
        borrowedAmount: {
            value: string;
        };
        cumulativeBorrowRate: {
            value: string;
        };
        marketValue: {
            value: string;
        };
        userRewardManagerIndex: string;
    };
    toJSON(): {
        coinType: {
            name: string;
        };
        reserveArrayIndex: string;
        borrowedAmount: {
            value: string;
        };
        cumulativeBorrowRate: {
            value: string;
        };
        marketValue: {
            value: string;
        };
        userRewardManagerIndex: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): BorrowRecord;
    static fromJSON(json: Record<string, any>): BorrowRecord;
    static fromSuiParsedData(content: SuiParsedData): BorrowRecord;
    static fromSuiObjectData(data: SuiObjectData): BorrowRecord;
    static fetch(client: SuiClient, id: string): Promise<BorrowRecord>;
}
export declare function isDeposit(type: string): boolean;
export interface DepositFields {
    coinType: ToField<TypeName>;
    reserveArrayIndex: ToField<"u64">;
    depositedCtokenAmount: ToField<"u64">;
    marketValue: ToField<Decimal>;
    userRewardManagerIndex: ToField<"u64">;
    attributedBorrowValue: ToField<Decimal>;
}
export type DepositReified = Reified<Deposit, DepositFields>;
export declare class Deposit implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::obligation::Deposit`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly coinType: ToField<TypeName>;
    readonly reserveArrayIndex: ToField<"u64">;
    readonly depositedCtokenAmount: ToField<"u64">;
    readonly marketValue: ToField<Decimal>;
    readonly userRewardManagerIndex: ToField<"u64">;
    readonly attributedBorrowValue: ToField<Decimal>;
    private constructor();
    static reified(): DepositReified;
    static get r(): reified.StructClassReified<Deposit, DepositFields>;
    static phantom(): PhantomReified<ToTypeStr<Deposit>>;
    static get p(): reified.PhantomReified<"0x1f54a9a2d71799553197e9ea24557797c6398d6a65f2d4d3818c9304b75d5e21::obligation::Deposit" | "0xf95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::obligation::Deposit">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        coin_type: {
            name: {
                bytes: number[];
            };
        };
        reserve_array_index: string;
        deposited_ctoken_amount: string;
        market_value: {
            value: string;
        };
        user_reward_manager_index: string;
        attributed_borrow_value: {
            value: string;
        };
    }, {
        coin_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        reserve_array_index: string | number | bigint;
        deposited_ctoken_amount: string | number | bigint;
        market_value: {
            value: string | number | bigint;
        };
        user_reward_manager_index: string | number | bigint;
        attributed_borrow_value: {
            value: string | number | bigint;
        };
    }>;
    static fromFields(fields: Record<string, any>): Deposit;
    static fromFieldsWithTypes(item: FieldsWithTypes): Deposit;
    static fromBcs(data: Uint8Array): Deposit;
    toJSONField(): {
        coinType: {
            name: string;
        };
        reserveArrayIndex: string;
        depositedCtokenAmount: string;
        marketValue: {
            value: string;
        };
        userRewardManagerIndex: string;
        attributedBorrowValue: {
            value: string;
        };
    };
    toJSON(): {
        coinType: {
            name: string;
        };
        reserveArrayIndex: string;
        depositedCtokenAmount: string;
        marketValue: {
            value: string;
        };
        userRewardManagerIndex: string;
        attributedBorrowValue: {
            value: string;
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Deposit;
    static fromJSON(json: Record<string, any>): Deposit;
    static fromSuiParsedData(content: SuiParsedData): Deposit;
    static fromSuiObjectData(data: SuiObjectData): Deposit;
    static fetch(client: SuiClient, id: string): Promise<Deposit>;
}
export declare function isDepositRecord(type: string): boolean;
export interface DepositRecordFields {
    coinType: ToField<TypeName>;
    reserveArrayIndex: ToField<"u64">;
    depositedCtokenAmount: ToField<"u64">;
    marketValue: ToField<Decimal>;
    userRewardManagerIndex: ToField<"u64">;
    attributedBorrowValue: ToField<Decimal>;
}
export type DepositRecordReified = Reified<DepositRecord, DepositRecordFields>;
export declare class DepositRecord implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::obligation::DepositRecord`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly coinType: ToField<TypeName>;
    readonly reserveArrayIndex: ToField<"u64">;
    readonly depositedCtokenAmount: ToField<"u64">;
    readonly marketValue: ToField<Decimal>;
    readonly userRewardManagerIndex: ToField<"u64">;
    readonly attributedBorrowValue: ToField<Decimal>;
    private constructor();
    static reified(): DepositRecordReified;
    static get r(): reified.StructClassReified<DepositRecord, DepositRecordFields>;
    static phantom(): PhantomReified<ToTypeStr<DepositRecord>>;
    static get p(): reified.PhantomReified<"0x1f54a9a2d71799553197e9ea24557797c6398d6a65f2d4d3818c9304b75d5e21::obligation::DepositRecord" | "0xf95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::obligation::DepositRecord">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        coin_type: {
            name: {
                bytes: number[];
            };
        };
        reserve_array_index: string;
        deposited_ctoken_amount: string;
        market_value: {
            value: string;
        };
        user_reward_manager_index: string;
        attributed_borrow_value: {
            value: string;
        };
    }, {
        coin_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        reserve_array_index: string | number | bigint;
        deposited_ctoken_amount: string | number | bigint;
        market_value: {
            value: string | number | bigint;
        };
        user_reward_manager_index: string | number | bigint;
        attributed_borrow_value: {
            value: string | number | bigint;
        };
    }>;
    static fromFields(fields: Record<string, any>): DepositRecord;
    static fromFieldsWithTypes(item: FieldsWithTypes): DepositRecord;
    static fromBcs(data: Uint8Array): DepositRecord;
    toJSONField(): {
        coinType: {
            name: string;
        };
        reserveArrayIndex: string;
        depositedCtokenAmount: string;
        marketValue: {
            value: string;
        };
        userRewardManagerIndex: string;
        attributedBorrowValue: {
            value: string;
        };
    };
    toJSON(): {
        coinType: {
            name: string;
        };
        reserveArrayIndex: string;
        depositedCtokenAmount: string;
        marketValue: {
            value: string;
        };
        userRewardManagerIndex: string;
        attributedBorrowValue: {
            value: string;
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): DepositRecord;
    static fromJSON(json: Record<string, any>): DepositRecord;
    static fromSuiParsedData(content: SuiParsedData): DepositRecord;
    static fromSuiObjectData(data: SuiObjectData): DepositRecord;
    static fetch(client: SuiClient, id: string): Promise<DepositRecord>;
}
export declare function isExistStaleOracles(type: string): boolean;
export interface ExistStaleOraclesFields {
    dummyField: ToField<"bool">;
}
export type ExistStaleOraclesReified = Reified<ExistStaleOracles, ExistStaleOraclesFields>;
export declare class ExistStaleOracles implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V11}::obligation::ExistStaleOracles`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): ExistStaleOraclesReified;
    static get r(): reified.StructClassReified<ExistStaleOracles, ExistStaleOraclesFields>;
    static phantom(): PhantomReified<ToTypeStr<ExistStaleOracles>>;
    static get p(): reified.PhantomReified<"0xe5ed361add4433f4d23e56fc0e3bacab39b93592d5e65d508e33fd19ff696669::obligation::ExistStaleOracles" | "0xd2a67633ccb8de063163e25bcfca242929caf5cf1a26c2929dab519ee0b8f331::obligation::ExistStaleOracles">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields(fields: Record<string, any>): ExistStaleOracles;
    static fromFieldsWithTypes(item: FieldsWithTypes): ExistStaleOracles;
    static fromBcs(data: Uint8Array): ExistStaleOracles;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ExistStaleOracles;
    static fromJSON(json: Record<string, any>): ExistStaleOracles;
    static fromSuiParsedData(content: SuiParsedData): ExistStaleOracles;
    static fromSuiObjectData(data: SuiObjectData): ExistStaleOracles;
    static fetch(client: SuiClient, id: string): Promise<ExistStaleOracles>;
}
export declare function isObligation(type: string): boolean;
export interface ObligationFields<P extends PhantomTypeArgument> {
    id: ToField<UID>;
    lendingMarketId: ToField<ID>;
    deposits: ToField<Vector<Deposit>>;
    borrows: ToField<Vector<Borrow>>;
    depositedValueUsd: ToField<Decimal>;
    allowedBorrowValueUsd: ToField<Decimal>;
    unhealthyBorrowValueUsd: ToField<Decimal>;
    superUnhealthyBorrowValueUsd: ToField<Decimal>;
    unweightedBorrowedValueUsd: ToField<Decimal>;
    weightedBorrowedValueUsd: ToField<Decimal>;
    weightedBorrowedValueUpperBoundUsd: ToField<Decimal>;
    borrowingIsolatedAsset: ToField<"bool">;
    userRewardManagers: ToField<Vector<UserRewardManager>>;
    badDebtUsd: ToField<Decimal>;
    closable: ToField<"bool">;
}
export type ObligationReified<P extends PhantomTypeArgument> = Reified<Obligation<P>, ObligationFields<P>>;
export declare class Obligation<P extends PhantomTypeArgument> implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 1;
    static readonly $isPhantom: readonly [true];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::obligation::Obligation<${PhantomToTypeStr<P>}>`;
    readonly $typeArgs: [PhantomToTypeStr<P>];
    readonly $isPhantom: readonly [true];
    readonly id: ToField<UID>;
    readonly lendingMarketId: ToField<ID>;
    readonly deposits: ToField<Vector<Deposit>>;
    readonly borrows: ToField<Vector<Borrow>>;
    readonly depositedValueUsd: ToField<Decimal>;
    readonly allowedBorrowValueUsd: ToField<Decimal>;
    readonly unhealthyBorrowValueUsd: ToField<Decimal>;
    readonly superUnhealthyBorrowValueUsd: ToField<Decimal>;
    readonly unweightedBorrowedValueUsd: ToField<Decimal>;
    readonly weightedBorrowedValueUsd: ToField<Decimal>;
    readonly weightedBorrowedValueUpperBoundUsd: ToField<Decimal>;
    readonly borrowingIsolatedAsset: ToField<"bool">;
    readonly userRewardManagers: ToField<Vector<UserRewardManager>>;
    readonly badDebtUsd: ToField<Decimal>;
    readonly closable: ToField<"bool">;
    private constructor();
    static reified<P extends PhantomReified<PhantomTypeArgument>>(P: P): ObligationReified<ToPhantomTypeArgument<P>>;
    static get r(): typeof Obligation.reified;
    static phantom<P extends PhantomReified<PhantomTypeArgument>>(P: P): PhantomReified<ToTypeStr<Obligation<ToPhantomTypeArgument<P>>>>;
    static get p(): typeof Obligation.phantom;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        lending_market_id: {
            bytes: string;
        };
        deposits: {
            coin_type: {
                name: {
                    bytes: number[];
                };
            };
            reserve_array_index: string;
            deposited_ctoken_amount: string;
            market_value: {
                value: string;
            };
            user_reward_manager_index: string;
            attributed_borrow_value: {
                value: string;
            };
        }[];
        borrows: {
            coin_type: {
                name: {
                    bytes: number[];
                };
            };
            reserve_array_index: string;
            borrowed_amount: {
                value: string;
            };
            cumulative_borrow_rate: {
                value: string;
            };
            market_value: {
                value: string;
            };
            user_reward_manager_index: string;
        }[];
        deposited_value_usd: {
            value: string;
        };
        allowed_borrow_value_usd: {
            value: string;
        };
        unhealthy_borrow_value_usd: {
            value: string;
        };
        super_unhealthy_borrow_value_usd: {
            value: string;
        };
        unweighted_borrowed_value_usd: {
            value: string;
        };
        weighted_borrowed_value_usd: {
            value: string;
        };
        weighted_borrowed_value_upper_bound_usd: {
            value: string;
        };
        borrowing_isolated_asset: boolean;
        user_reward_managers: {
            pool_reward_manager_id: {
                bytes: string;
            };
            share: string;
            rewards: {
                vec: any[];
            }[];
            last_update_time_ms: string;
        }[];
        bad_debt_usd: {
            value: string;
        };
        closable: boolean;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        lending_market_id: {
            bytes: string;
        };
        deposits: Iterable<{
            coin_type: {
                name: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
            reserve_array_index: string | number | bigint;
            deposited_ctoken_amount: string | number | bigint;
            market_value: {
                value: string | number | bigint;
            };
            user_reward_manager_index: string | number | bigint;
            attributed_borrow_value: {
                value: string | number | bigint;
            };
        }> & {
            length: number;
        };
        borrows: Iterable<{
            coin_type: {
                name: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
            reserve_array_index: string | number | bigint;
            borrowed_amount: {
                value: string | number | bigint;
            };
            cumulative_borrow_rate: {
                value: string | number | bigint;
            };
            market_value: {
                value: string | number | bigint;
            };
            user_reward_manager_index: string | number | bigint;
        }> & {
            length: number;
        };
        deposited_value_usd: {
            value: string | number | bigint;
        };
        allowed_borrow_value_usd: {
            value: string | number | bigint;
        };
        unhealthy_borrow_value_usd: {
            value: string | number | bigint;
        };
        super_unhealthy_borrow_value_usd: {
            value: string | number | bigint;
        };
        unweighted_borrowed_value_usd: {
            value: string | number | bigint;
        };
        weighted_borrowed_value_usd: {
            value: string | number | bigint;
        };
        weighted_borrowed_value_upper_bound_usd: {
            value: string | number | bigint;
        };
        borrowing_isolated_asset: boolean;
        user_reward_managers: Iterable<{
            pool_reward_manager_id: {
                bytes: string;
            };
            share: string | number | bigint;
            rewards: Iterable<{
                vec: Iterable<any> & {
                    length: number;
                };
            }> & {
                length: number;
            };
            last_update_time_ms: string | number | bigint;
        }> & {
            length: number;
        };
        bad_debt_usd: {
            value: string | number | bigint;
        };
        closable: boolean;
    }>;
    static fromFields<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, fields: Record<string, any>): Obligation<ToPhantomTypeArgument<P>>;
    static fromFieldsWithTypes<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, item: FieldsWithTypes): Obligation<ToPhantomTypeArgument<P>>;
    static fromBcs<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, data: Uint8Array): Obligation<ToPhantomTypeArgument<P>>;
    toJSONField(): {
        id: string;
        lendingMarketId: string;
        deposits: {
            coinType: {
                name: string;
            };
            reserveArrayIndex: string;
            depositedCtokenAmount: string;
            marketValue: {
                value: string;
            };
            userRewardManagerIndex: string;
            attributedBorrowValue: {
                value: string;
            };
        }[];
        borrows: {
            coinType: {
                name: string;
            };
            reserveArrayIndex: string;
            borrowedAmount: {
                value: string;
            };
            cumulativeBorrowRate: {
                value: string;
            };
            marketValue: {
                value: string;
            };
            userRewardManagerIndex: string;
        }[];
        depositedValueUsd: {
            value: string;
        };
        allowedBorrowValueUsd: {
            value: string;
        };
        unhealthyBorrowValueUsd: {
            value: string;
        };
        superUnhealthyBorrowValueUsd: {
            value: string;
        };
        unweightedBorrowedValueUsd: {
            value: string;
        };
        weightedBorrowedValueUsd: {
            value: string;
        };
        weightedBorrowedValueUpperBoundUsd: {
            value: string;
        };
        borrowingIsolatedAsset: boolean;
        userRewardManagers: {
            poolRewardManagerId: string;
            share: string;
            rewards: ({
                poolRewardId: string;
                earnedRewards: {
                    value: string;
                };
                cumulativeRewardsPerShare: {
                    value: string;
                };
            } | null)[];
            lastUpdateTimeMs: string;
        }[];
        badDebtUsd: {
            value: string;
        };
        closable: boolean;
    };
    toJSON(): {
        id: string;
        lendingMarketId: string;
        deposits: {
            coinType: {
                name: string;
            };
            reserveArrayIndex: string;
            depositedCtokenAmount: string;
            marketValue: {
                value: string;
            };
            userRewardManagerIndex: string;
            attributedBorrowValue: {
                value: string;
            };
        }[];
        borrows: {
            coinType: {
                name: string;
            };
            reserveArrayIndex: string;
            borrowedAmount: {
                value: string;
            };
            cumulativeBorrowRate: {
                value: string;
            };
            marketValue: {
                value: string;
            };
            userRewardManagerIndex: string;
        }[];
        depositedValueUsd: {
            value: string;
        };
        allowedBorrowValueUsd: {
            value: string;
        };
        unhealthyBorrowValueUsd: {
            value: string;
        };
        superUnhealthyBorrowValueUsd: {
            value: string;
        };
        unweightedBorrowedValueUsd: {
            value: string;
        };
        weightedBorrowedValueUsd: {
            value: string;
        };
        weightedBorrowedValueUpperBoundUsd: {
            value: string;
        };
        borrowingIsolatedAsset: boolean;
        userRewardManagers: {
            poolRewardManagerId: string;
            share: string;
            rewards: ({
                poolRewardId: string;
                earnedRewards: {
                    value: string;
                };
                cumulativeRewardsPerShare: {
                    value: string;
                };
            } | null)[];
            lastUpdateTimeMs: string;
        }[];
        badDebtUsd: {
            value: string;
        };
        closable: boolean;
        $typeName: string;
        $typeArgs: [reified.PhantomToTypeStr<P>];
    };
    static fromJSONField<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, field: any): Obligation<ToPhantomTypeArgument<P>>;
    static fromJSON<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, json: Record<string, any>): Obligation<ToPhantomTypeArgument<P>>;
    static fromSuiParsedData<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, content: SuiParsedData): Obligation<ToPhantomTypeArgument<P>>;
    static fromSuiObjectData<P extends PhantomReified<PhantomTypeArgument>>(typeArg: P, data: SuiObjectData): Obligation<ToPhantomTypeArgument<P>>;
    static fetch<P extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: P, id: string): Promise<Obligation<ToPhantomTypeArgument<P>>>;
}
export declare function isObligationDataEvent(type: string): boolean;
export interface ObligationDataEventFields {
    lendingMarketId: ToField<"address">;
    obligationId: ToField<"address">;
    deposits: ToField<Vector<DepositRecord>>;
    borrows: ToField<Vector<BorrowRecord>>;
    depositedValueUsd: ToField<Decimal>;
    allowedBorrowValueUsd: ToField<Decimal>;
    unhealthyBorrowValueUsd: ToField<Decimal>;
    superUnhealthyBorrowValueUsd: ToField<Decimal>;
    unweightedBorrowedValueUsd: ToField<Decimal>;
    weightedBorrowedValueUsd: ToField<Decimal>;
    weightedBorrowedValueUpperBoundUsd: ToField<Decimal>;
    borrowingIsolatedAsset: ToField<"bool">;
    badDebtUsd: ToField<Decimal>;
    closable: ToField<"bool">;
}
export type ObligationDataEventReified = Reified<ObligationDataEvent, ObligationDataEventFields>;
export declare class ObligationDataEvent implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::obligation::ObligationDataEvent`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly lendingMarketId: ToField<"address">;
    readonly obligationId: ToField<"address">;
    readonly deposits: ToField<Vector<DepositRecord>>;
    readonly borrows: ToField<Vector<BorrowRecord>>;
    readonly depositedValueUsd: ToField<Decimal>;
    readonly allowedBorrowValueUsd: ToField<Decimal>;
    readonly unhealthyBorrowValueUsd: ToField<Decimal>;
    readonly superUnhealthyBorrowValueUsd: ToField<Decimal>;
    readonly unweightedBorrowedValueUsd: ToField<Decimal>;
    readonly weightedBorrowedValueUsd: ToField<Decimal>;
    readonly weightedBorrowedValueUpperBoundUsd: ToField<Decimal>;
    readonly borrowingIsolatedAsset: ToField<"bool">;
    readonly badDebtUsd: ToField<Decimal>;
    readonly closable: ToField<"bool">;
    private constructor();
    static reified(): ObligationDataEventReified;
    static get r(): reified.StructClassReified<ObligationDataEvent, ObligationDataEventFields>;
    static phantom(): PhantomReified<ToTypeStr<ObligationDataEvent>>;
    static get p(): reified.PhantomReified<"0x1f54a9a2d71799553197e9ea24557797c6398d6a65f2d4d3818c9304b75d5e21::obligation::ObligationDataEvent" | "0xf95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::obligation::ObligationDataEvent">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        lending_market_id: string;
        obligation_id: string;
        deposits: {
            coin_type: {
                name: {
                    bytes: number[];
                };
            };
            reserve_array_index: string;
            deposited_ctoken_amount: string;
            market_value: {
                value: string;
            };
            user_reward_manager_index: string;
            attributed_borrow_value: {
                value: string;
            };
        }[];
        borrows: {
            coin_type: {
                name: {
                    bytes: number[];
                };
            };
            reserve_array_index: string;
            borrowed_amount: {
                value: string;
            };
            cumulative_borrow_rate: {
                value: string;
            };
            market_value: {
                value: string;
            };
            user_reward_manager_index: string;
        }[];
        deposited_value_usd: {
            value: string;
        };
        allowed_borrow_value_usd: {
            value: string;
        };
        unhealthy_borrow_value_usd: {
            value: string;
        };
        super_unhealthy_borrow_value_usd: {
            value: string;
        };
        unweighted_borrowed_value_usd: {
            value: string;
        };
        weighted_borrowed_value_usd: {
            value: string;
        };
        weighted_borrowed_value_upper_bound_usd: {
            value: string;
        };
        borrowing_isolated_asset: boolean;
        bad_debt_usd: {
            value: string;
        };
        closable: boolean;
    }, {
        lending_market_id: string;
        obligation_id: string;
        deposits: Iterable<{
            coin_type: {
                name: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
            reserve_array_index: string | number | bigint;
            deposited_ctoken_amount: string | number | bigint;
            market_value: {
                value: string | number | bigint;
            };
            user_reward_manager_index: string | number | bigint;
            attributed_borrow_value: {
                value: string | number | bigint;
            };
        }> & {
            length: number;
        };
        borrows: Iterable<{
            coin_type: {
                name: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            };
            reserve_array_index: string | number | bigint;
            borrowed_amount: {
                value: string | number | bigint;
            };
            cumulative_borrow_rate: {
                value: string | number | bigint;
            };
            market_value: {
                value: string | number | bigint;
            };
            user_reward_manager_index: string | number | bigint;
        }> & {
            length: number;
        };
        deposited_value_usd: {
            value: string | number | bigint;
        };
        allowed_borrow_value_usd: {
            value: string | number | bigint;
        };
        unhealthy_borrow_value_usd: {
            value: string | number | bigint;
        };
        super_unhealthy_borrow_value_usd: {
            value: string | number | bigint;
        };
        unweighted_borrowed_value_usd: {
            value: string | number | bigint;
        };
        weighted_borrowed_value_usd: {
            value: string | number | bigint;
        };
        weighted_borrowed_value_upper_bound_usd: {
            value: string | number | bigint;
        };
        borrowing_isolated_asset: boolean;
        bad_debt_usd: {
            value: string | number | bigint;
        };
        closable: boolean;
    }>;
    static fromFields(fields: Record<string, any>): ObligationDataEvent;
    static fromFieldsWithTypes(item: FieldsWithTypes): ObligationDataEvent;
    static fromBcs(data: Uint8Array): ObligationDataEvent;
    toJSONField(): {
        lendingMarketId: string;
        obligationId: string;
        deposits: {
            coinType: {
                name: string;
            };
            reserveArrayIndex: string;
            depositedCtokenAmount: string;
            marketValue: {
                value: string;
            };
            userRewardManagerIndex: string;
            attributedBorrowValue: {
                value: string;
            };
        }[];
        borrows: {
            coinType: {
                name: string;
            };
            reserveArrayIndex: string;
            borrowedAmount: {
                value: string;
            };
            cumulativeBorrowRate: {
                value: string;
            };
            marketValue: {
                value: string;
            };
            userRewardManagerIndex: string;
        }[];
        depositedValueUsd: {
            value: string;
        };
        allowedBorrowValueUsd: {
            value: string;
        };
        unhealthyBorrowValueUsd: {
            value: string;
        };
        superUnhealthyBorrowValueUsd: {
            value: string;
        };
        unweightedBorrowedValueUsd: {
            value: string;
        };
        weightedBorrowedValueUsd: {
            value: string;
        };
        weightedBorrowedValueUpperBoundUsd: {
            value: string;
        };
        borrowingIsolatedAsset: boolean;
        badDebtUsd: {
            value: string;
        };
        closable: boolean;
    };
    toJSON(): {
        lendingMarketId: string;
        obligationId: string;
        deposits: {
            coinType: {
                name: string;
            };
            reserveArrayIndex: string;
            depositedCtokenAmount: string;
            marketValue: {
                value: string;
            };
            userRewardManagerIndex: string;
            attributedBorrowValue: {
                value: string;
            };
        }[];
        borrows: {
            coinType: {
                name: string;
            };
            reserveArrayIndex: string;
            borrowedAmount: {
                value: string;
            };
            cumulativeBorrowRate: {
                value: string;
            };
            marketValue: {
                value: string;
            };
            userRewardManagerIndex: string;
        }[];
        depositedValueUsd: {
            value: string;
        };
        allowedBorrowValueUsd: {
            value: string;
        };
        unhealthyBorrowValueUsd: {
            value: string;
        };
        superUnhealthyBorrowValueUsd: {
            value: string;
        };
        unweightedBorrowedValueUsd: {
            value: string;
        };
        weightedBorrowedValueUsd: {
            value: string;
        };
        weightedBorrowedValueUpperBoundUsd: {
            value: string;
        };
        borrowingIsolatedAsset: boolean;
        badDebtUsd: {
            value: string;
        };
        closable: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): ObligationDataEvent;
    static fromJSON(json: Record<string, any>): ObligationDataEvent;
    static fromSuiParsedData(content: SuiParsedData): ObligationDataEvent;
    static fromSuiObjectData(data: SuiObjectData): ObligationDataEvent;
    static fetch(client: SuiClient, id: string): Promise<ObligationDataEvent>;
}
