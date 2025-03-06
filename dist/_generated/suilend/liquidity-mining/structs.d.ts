import * as reified from "../../_framework/reified";
import { Option } from "../../_dependencies/source/0x1/option/structs";
import { TypeName } from "../../_dependencies/source/0x1/type-name/structs";
import { Bag } from "../../_dependencies/source/0x2/bag/structs";
import { ID, UID } from "../../_dependencies/source/0x2/object/structs";
import { PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr } from "../../_framework/reified";
import { FieldsWithTypes } from "../../_framework/util";
import { Vector } from "../../_framework/vector";
import { Decimal } from "../decimal/structs";
import { PKG_V1 } from "../index";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
export declare function isPoolReward(type: string): boolean;
export interface PoolRewardFields {
    id: ToField<UID>;
    poolRewardManagerId: ToField<ID>;
    coinType: ToField<TypeName>;
    startTimeMs: ToField<"u64">;
    endTimeMs: ToField<"u64">;
    totalRewards: ToField<"u64">;
    allocatedRewards: ToField<Decimal>;
    cumulativeRewardsPerShare: ToField<Decimal>;
    numUserRewardManagers: ToField<"u64">;
    additionalFields: ToField<Bag>;
}
export type PoolRewardReified = Reified<PoolReward, PoolRewardFields>;
export declare class PoolReward implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::liquidity_mining::PoolReward`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly id: ToField<UID>;
    readonly poolRewardManagerId: ToField<ID>;
    readonly coinType: ToField<TypeName>;
    readonly startTimeMs: ToField<"u64">;
    readonly endTimeMs: ToField<"u64">;
    readonly totalRewards: ToField<"u64">;
    readonly allocatedRewards: ToField<Decimal>;
    readonly cumulativeRewardsPerShare: ToField<Decimal>;
    readonly numUserRewardManagers: ToField<"u64">;
    readonly additionalFields: ToField<Bag>;
    private constructor();
    static reified(): PoolRewardReified;
    static get r(): reified.StructClassReified<PoolReward, PoolRewardFields>;
    static phantom(): PhantomReified<ToTypeStr<PoolReward>>;
    static get p(): reified.PhantomReified<"0x1f54a9a2d71799553197e9ea24557797c6398d6a65f2d4d3818c9304b75d5e21::liquidity_mining::PoolReward" | "0xf95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::liquidity_mining::PoolReward">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        pool_reward_manager_id: {
            bytes: string;
        };
        coin_type: {
            name: {
                bytes: number[];
            };
        };
        start_time_ms: string;
        end_time_ms: string;
        total_rewards: string;
        allocated_rewards: {
            value: string;
        };
        cumulative_rewards_per_share: {
            value: string;
        };
        num_user_reward_managers: string;
        additional_fields: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string;
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        pool_reward_manager_id: {
            bytes: string;
        };
        coin_type: {
            name: {
                bytes: Iterable<number> & {
                    length: number;
                };
            };
        };
        start_time_ms: string | number | bigint;
        end_time_ms: string | number | bigint;
        total_rewards: string | number | bigint;
        allocated_rewards: {
            value: string | number | bigint;
        };
        cumulative_rewards_per_share: {
            value: string | number | bigint;
        };
        num_user_reward_managers: string | number | bigint;
        additional_fields: {
            id: {
                id: {
                    bytes: string;
                };
            };
            size: string | number | bigint;
        };
    }>;
    static fromFields(fields: Record<string, any>): PoolReward;
    static fromFieldsWithTypes(item: FieldsWithTypes): PoolReward;
    static fromBcs(data: Uint8Array): PoolReward;
    toJSONField(): {
        id: string;
        poolRewardManagerId: string;
        coinType: {
            name: string;
        };
        startTimeMs: string;
        endTimeMs: string;
        totalRewards: string;
        allocatedRewards: {
            value: string;
        };
        cumulativeRewardsPerShare: {
            value: string;
        };
        numUserRewardManagers: string;
        additionalFields: {
            id: string;
            size: string;
        };
    };
    toJSON(): {
        id: string;
        poolRewardManagerId: string;
        coinType: {
            name: string;
        };
        startTimeMs: string;
        endTimeMs: string;
        totalRewards: string;
        allocatedRewards: {
            value: string;
        };
        cumulativeRewardsPerShare: {
            value: string;
        };
        numUserRewardManagers: string;
        additionalFields: {
            id: string;
            size: string;
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): PoolReward;
    static fromJSON(json: Record<string, any>): PoolReward;
    static fromSuiParsedData(content: SuiParsedData): PoolReward;
    static fromSuiObjectData(data: SuiObjectData): PoolReward;
    static fetch(client: SuiClient, id: string): Promise<PoolReward>;
}
export declare function isPoolRewardManager(type: string): boolean;
export interface PoolRewardManagerFields {
    id: ToField<UID>;
    totalShares: ToField<"u64">;
    poolRewards: ToField<Vector<Option<PoolReward>>>;
    lastUpdateTimeMs: ToField<"u64">;
}
export type PoolRewardManagerReified = Reified<PoolRewardManager, PoolRewardManagerFields>;
export declare class PoolRewardManager implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::liquidity_mining::PoolRewardManager`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly id: ToField<UID>;
    readonly totalShares: ToField<"u64">;
    readonly poolRewards: ToField<Vector<Option<PoolReward>>>;
    readonly lastUpdateTimeMs: ToField<"u64">;
    private constructor();
    static reified(): PoolRewardManagerReified;
    static get r(): reified.StructClassReified<PoolRewardManager, PoolRewardManagerFields>;
    static phantom(): PhantomReified<ToTypeStr<PoolRewardManager>>;
    static get p(): reified.PhantomReified<"0x1f54a9a2d71799553197e9ea24557797c6398d6a65f2d4d3818c9304b75d5e21::liquidity_mining::PoolRewardManager" | "0xf95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::liquidity_mining::PoolRewardManager">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        total_shares: string;
        pool_rewards: {
            vec: any[];
        }[];
        last_update_time_ms: string;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        total_shares: string | number | bigint;
        pool_rewards: Iterable<{
            vec: Iterable<any> & {
                length: number;
            };
        }> & {
            length: number;
        };
        last_update_time_ms: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): PoolRewardManager;
    static fromFieldsWithTypes(item: FieldsWithTypes): PoolRewardManager;
    static fromBcs(data: Uint8Array): PoolRewardManager;
    toJSONField(): {
        id: string;
        totalShares: string;
        poolRewards: ({
            id: string;
            poolRewardManagerId: string;
            coinType: {
                name: string;
            };
            startTimeMs: string;
            endTimeMs: string;
            totalRewards: string;
            allocatedRewards: {
                value: string;
            };
            cumulativeRewardsPerShare: {
                value: string;
            };
            numUserRewardManagers: string;
            additionalFields: {
                id: string;
                size: string;
            };
        } | null)[];
        lastUpdateTimeMs: string;
    };
    toJSON(): {
        id: string;
        totalShares: string;
        poolRewards: ({
            id: string;
            poolRewardManagerId: string;
            coinType: {
                name: string;
            };
            startTimeMs: string;
            endTimeMs: string;
            totalRewards: string;
            allocatedRewards: {
                value: string;
            };
            cumulativeRewardsPerShare: {
                value: string;
            };
            numUserRewardManagers: string;
            additionalFields: {
                id: string;
                size: string;
            };
        } | null)[];
        lastUpdateTimeMs: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): PoolRewardManager;
    static fromJSON(json: Record<string, any>): PoolRewardManager;
    static fromSuiParsedData(content: SuiParsedData): PoolRewardManager;
    static fromSuiObjectData(data: SuiObjectData): PoolRewardManager;
    static fetch(client: SuiClient, id: string): Promise<PoolRewardManager>;
}
export declare function isRewardBalance(type: string): boolean;
export interface RewardBalanceFields<T extends PhantomTypeArgument> {
    dummyField: ToField<"bool">;
}
export type RewardBalanceReified<T extends PhantomTypeArgument> = Reified<RewardBalance<T>, RewardBalanceFields<T>>;
export declare class RewardBalance<T extends PhantomTypeArgument> implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 1;
    static readonly $isPhantom: readonly [true];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::liquidity_mining::RewardBalance<${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<T>];
    readonly $isPhantom: readonly [true];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): RewardBalanceReified<ToPhantomTypeArgument<T>>;
    static get r(): typeof RewardBalance.reified;
    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<RewardBalance<ToPhantomTypeArgument<T>>>>;
    static get p(): typeof RewardBalance.phantom;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): RewardBalance<ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): RewardBalance<ToPhantomTypeArgument<T>>;
    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): RewardBalance<ToPhantomTypeArgument<T>>;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [reified.PhantomToTypeStr<T>];
    };
    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): RewardBalance<ToPhantomTypeArgument<T>>;
    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): RewardBalance<ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): RewardBalance<ToPhantomTypeArgument<T>>;
    static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: SuiObjectData): RewardBalance<ToPhantomTypeArgument<T>>;
    static fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<RewardBalance<ToPhantomTypeArgument<T>>>;
}
export declare function isUserReward(type: string): boolean;
export interface UserRewardFields {
    poolRewardId: ToField<ID>;
    earnedRewards: ToField<Decimal>;
    cumulativeRewardsPerShare: ToField<Decimal>;
}
export type UserRewardReified = Reified<UserReward, UserRewardFields>;
export declare class UserReward implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::liquidity_mining::UserReward`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly poolRewardId: ToField<ID>;
    readonly earnedRewards: ToField<Decimal>;
    readonly cumulativeRewardsPerShare: ToField<Decimal>;
    private constructor();
    static reified(): UserRewardReified;
    static get r(): reified.StructClassReified<UserReward, UserRewardFields>;
    static phantom(): PhantomReified<ToTypeStr<UserReward>>;
    static get p(): reified.PhantomReified<"0x1f54a9a2d71799553197e9ea24557797c6398d6a65f2d4d3818c9304b75d5e21::liquidity_mining::UserReward" | "0xf95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::liquidity_mining::UserReward">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        pool_reward_id: {
            bytes: string;
        };
        earned_rewards: {
            value: string;
        };
        cumulative_rewards_per_share: {
            value: string;
        };
    }, {
        pool_reward_id: {
            bytes: string;
        };
        earned_rewards: {
            value: string | number | bigint;
        };
        cumulative_rewards_per_share: {
            value: string | number | bigint;
        };
    }>;
    static fromFields(fields: Record<string, any>): UserReward;
    static fromFieldsWithTypes(item: FieldsWithTypes): UserReward;
    static fromBcs(data: Uint8Array): UserReward;
    toJSONField(): {
        poolRewardId: string;
        earnedRewards: {
            value: string;
        };
        cumulativeRewardsPerShare: {
            value: string;
        };
    };
    toJSON(): {
        poolRewardId: string;
        earnedRewards: {
            value: string;
        };
        cumulativeRewardsPerShare: {
            value: string;
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): UserReward;
    static fromJSON(json: Record<string, any>): UserReward;
    static fromSuiParsedData(content: SuiParsedData): UserReward;
    static fromSuiObjectData(data: SuiObjectData): UserReward;
    static fetch(client: SuiClient, id: string): Promise<UserReward>;
}
export declare function isUserRewardManager(type: string): boolean;
export interface UserRewardManagerFields {
    poolRewardManagerId: ToField<ID>;
    share: ToField<"u64">;
    rewards: ToField<Vector<Option<UserReward>>>;
    lastUpdateTimeMs: ToField<"u64">;
}
export type UserRewardManagerReified = Reified<UserRewardManager, UserRewardManagerFields>;
export declare class UserRewardManager implements StructClass {
    __StructClass: true;
    static readonly $typeName: string;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom: readonly [];
    readonly $typeName: string;
    readonly $fullTypeName: `${typeof PKG_V1}::liquidity_mining::UserRewardManager`;
    readonly $typeArgs: [];
    readonly $isPhantom: readonly [];
    readonly poolRewardManagerId: ToField<ID>;
    readonly share: ToField<"u64">;
    readonly rewards: ToField<Vector<Option<UserReward>>>;
    readonly lastUpdateTimeMs: ToField<"u64">;
    private constructor();
    static reified(): UserRewardManagerReified;
    static get r(): reified.StructClassReified<UserRewardManager, UserRewardManagerFields>;
    static phantom(): PhantomReified<ToTypeStr<UserRewardManager>>;
    static get p(): reified.PhantomReified<"0x1f54a9a2d71799553197e9ea24557797c6398d6a65f2d4d3818c9304b75d5e21::liquidity_mining::UserRewardManager" | "0xf95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::liquidity_mining::UserRewardManager">;
    static get bcs(): import("@mysten/sui/bcs").BcsType<{
        pool_reward_manager_id: {
            bytes: string;
        };
        share: string;
        rewards: {
            vec: any[];
        }[];
        last_update_time_ms: string;
    }, {
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
    }>;
    static fromFields(fields: Record<string, any>): UserRewardManager;
    static fromFieldsWithTypes(item: FieldsWithTypes): UserRewardManager;
    static fromBcs(data: Uint8Array): UserRewardManager;
    toJSONField(): {
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
    };
    toJSON(): {
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
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): UserRewardManager;
    static fromJSON(json: Record<string, any>): UserRewardManager;
    static fromSuiParsedData(content: SuiParsedData): UserRewardManager;
    static fromSuiObjectData(data: SuiObjectData): UserRewardManager;
    static fetch(client: SuiClient, id: string): Promise<UserRewardManager>;
}
