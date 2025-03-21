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
exports.Supply = exports.Balance = void 0;
exports.isBalance = isBalance;
exports.isSupply = isSupply;
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const index_1 = require("../index");
const bcs_1 = require("@mysten/sui/bcs");
const utils_1 = require("@mysten/sui/utils");
/* ============================== Balance =============================== */
function isBalance(type) {
    type = (0, util_1.compressSuiType)(type);
    return type.startsWith(`${index_1.PKG_V30}::balance::Balance` + "<");
}
class Balance {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Balance.$typeName;
        this.$isPhantom = Balance.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Balance.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.value = fields.value;
    }
    static reified(T) {
        return {
            typeName: Balance.$typeName,
            fullTypeName: (0, util_1.composeSuiType)(Balance.$typeName, ...[(0, reified_1.extractType)(T)]),
            typeArgs: [(0, reified_1.extractType)(T)],
            isPhantom: Balance.$isPhantom,
            reifiedTypeArgs: [T],
            fromFields: (fields) => Balance.fromFields(T, fields),
            fromFieldsWithTypes: (item) => Balance.fromFieldsWithTypes(T, item),
            fromBcs: (data) => Balance.fromBcs(T, data),
            bcs: Balance.bcs,
            fromJSONField: (field) => Balance.fromJSONField(T, field),
            fromJSON: (json) => Balance.fromJSON(T, json),
            fromSuiParsedData: (content) => Balance.fromSuiParsedData(T, content),
            fromSuiObjectData: (content) => Balance.fromSuiObjectData(T, content),
            fetch: (client, id) => __awaiter(this, void 0, void 0, function* () { return Balance.fetch(client, T, id); }),
            new: (fields) => {
                return new Balance([(0, reified_1.extractType)(T)], fields);
            },
            kind: "StructClassReified",
        };
    }
    static get r() {
        return Balance.reified;
    }
    static phantom(T) {
        return (0, reified_1.phantom)(Balance.reified(T));
    }
    static get p() {
        return Balance.phantom;
    }
    static get bcs() {
        return bcs_1.bcs.struct("Balance", {
            value: bcs_1.bcs.u64(),
        });
    }
    static fromFields(typeArg, fields) {
        return Balance.reified(typeArg).new({
            value: (0, reified_1.decodeFromFields)("u64", fields.value),
        });
    }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isBalance(item.type)) {
            throw new Error("not a Balance type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return Balance.reified(typeArg).new({
            value: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.value),
        });
    }
    static fromBcs(typeArg, data) {
        return Balance.fromFields(typeArg, Balance.bcs.parse(data));
    }
    toJSONField() {
        return {
            value: this.value.toString(),
        };
    }
    toJSON() {
        return Object.assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    }
    static fromJSONField(typeArg, field) {
        return Balance.reified(typeArg).new({
            value: (0, reified_1.decodeFromJSONField)("u64", field.value),
        });
    }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== Balance.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(Balance.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return Balance.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isBalance(content.type)) {
            throw new Error(`object at ${content.fields.id} is not a Balance object`);
        }
        return Balance.fromFieldsWithTypes(typeArg, content);
    }
    static fromSuiObjectData(typeArg, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBalance(data.bcs.type)) {
                throw new Error(`object at is not a Balance object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
            if (gotTypeArgs.length !== 1) {
                throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`);
            }
            const gotTypeArg = (0, util_1.compressSuiType)(gotTypeArgs[0]);
            const expectedTypeArg = (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArg));
            if (gotTypeArg !== (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArg))) {
                throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
            }
            return Balance.fromBcs(typeArg, (0, utils_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Balance.fromSuiParsedData(typeArg, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static fetch(client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const res = yield client.getObject({ id, options: { showBcs: true } });
            if (res.error) {
                throw new Error(`error fetching Balance object at id ${id}: ${res.error.code}`);
            }
            if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" ||
                !isBalance(res.data.bcs.type)) {
                throw new Error(`object at id ${id} is not a Balance object`);
            }
            return Balance.fromSuiObjectData(typeArg, res.data);
        });
    }
}
exports.Balance = Balance;
Balance.$typeName = `${index_1.PKG_V30}::balance::Balance`;
Balance.$numTypeParams = 1;
Balance.$isPhantom = [true];
/* ============================== Supply =============================== */
function isSupply(type) {
    type = (0, util_1.compressSuiType)(type);
    return type.startsWith(`${index_1.PKG_V30}::balance::Supply` + "<");
}
class Supply {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Supply.$typeName;
        this.$isPhantom = Supply.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Supply.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.value = fields.value;
    }
    static reified(T) {
        return {
            typeName: Supply.$typeName,
            fullTypeName: (0, util_1.composeSuiType)(Supply.$typeName, ...[(0, reified_1.extractType)(T)]),
            typeArgs: [(0, reified_1.extractType)(T)],
            isPhantom: Supply.$isPhantom,
            reifiedTypeArgs: [T],
            fromFields: (fields) => Supply.fromFields(T, fields),
            fromFieldsWithTypes: (item) => Supply.fromFieldsWithTypes(T, item),
            fromBcs: (data) => Supply.fromBcs(T, data),
            bcs: Supply.bcs,
            fromJSONField: (field) => Supply.fromJSONField(T, field),
            fromJSON: (json) => Supply.fromJSON(T, json),
            fromSuiParsedData: (content) => Supply.fromSuiParsedData(T, content),
            fromSuiObjectData: (content) => Supply.fromSuiObjectData(T, content),
            fetch: (client, id) => __awaiter(this, void 0, void 0, function* () { return Supply.fetch(client, T, id); }),
            new: (fields) => {
                return new Supply([(0, reified_1.extractType)(T)], fields);
            },
            kind: "StructClassReified",
        };
    }
    static get r() {
        return Supply.reified;
    }
    static phantom(T) {
        return (0, reified_1.phantom)(Supply.reified(T));
    }
    static get p() {
        return Supply.phantom;
    }
    static get bcs() {
        return bcs_1.bcs.struct("Supply", {
            value: bcs_1.bcs.u64(),
        });
    }
    static fromFields(typeArg, fields) {
        return Supply.reified(typeArg).new({
            value: (0, reified_1.decodeFromFields)("u64", fields.value),
        });
    }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isSupply(item.type)) {
            throw new Error("not a Supply type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return Supply.reified(typeArg).new({
            value: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.value),
        });
    }
    static fromBcs(typeArg, data) {
        return Supply.fromFields(typeArg, Supply.bcs.parse(data));
    }
    toJSONField() {
        return {
            value: this.value.toString(),
        };
    }
    toJSON() {
        return Object.assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    }
    static fromJSONField(typeArg, field) {
        return Supply.reified(typeArg).new({
            value: (0, reified_1.decodeFromJSONField)("u64", field.value),
        });
    }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== Supply.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(Supply.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return Supply.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSupply(content.type)) {
            throw new Error(`object at ${content.fields.id} is not a Supply object`);
        }
        return Supply.fromFieldsWithTypes(typeArg, content);
    }
    static fromSuiObjectData(typeArg, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isSupply(data.bcs.type)) {
                throw new Error(`object at is not a Supply object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
            if (gotTypeArgs.length !== 1) {
                throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`);
            }
            const gotTypeArg = (0, util_1.compressSuiType)(gotTypeArgs[0]);
            const expectedTypeArg = (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArg));
            if (gotTypeArg !== (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArg))) {
                throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
            }
            return Supply.fromBcs(typeArg, (0, utils_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Supply.fromSuiParsedData(typeArg, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static fetch(client, typeArg, id) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const res = yield client.getObject({ id, options: { showBcs: true } });
            if (res.error) {
                throw new Error(`error fetching Supply object at id ${id}: ${res.error.code}`);
            }
            if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" ||
                !isSupply(res.data.bcs.type)) {
                throw new Error(`object at id ${id} is not a Supply object`);
            }
            return Supply.fromSuiObjectData(typeArg, res.data);
        });
    }
}
exports.Supply = Supply;
Supply.$typeName = `${index_1.PKG_V30}::balance::Supply`;
Supply.$numTypeParams = 1;
Supply.$isPhantom = [true];
