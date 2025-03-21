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
exports.ObjectTable = void 0;
exports.isObjectTable = isObjectTable;
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const index_1 = require("../index");
const structs_1 = require("../object/structs");
const bcs_1 = require("@mysten/sui/bcs");
const utils_1 = require("@mysten/sui/utils");
/* ============================== ObjectTable =============================== */
function isObjectTable(type) {
    type = (0, util_1.compressSuiType)(type);
    return type.startsWith(`${index_1.PKG_V30}::object_table::ObjectTable` + "<");
}
class ObjectTable {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ObjectTable.$typeName;
        this.$isPhantom = ObjectTable.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ObjectTable.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        this.size = fields.size;
    }
    static reified(K, V) {
        return {
            typeName: ObjectTable.$typeName,
            fullTypeName: (0, util_1.composeSuiType)(ObjectTable.$typeName, ...[(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)]),
            typeArgs: [(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)],
            isPhantom: ObjectTable.$isPhantom,
            reifiedTypeArgs: [K, V],
            fromFields: (fields) => ObjectTable.fromFields([K, V], fields),
            fromFieldsWithTypes: (item) => ObjectTable.fromFieldsWithTypes([K, V], item),
            fromBcs: (data) => ObjectTable.fromBcs([K, V], data),
            bcs: ObjectTable.bcs,
            fromJSONField: (field) => ObjectTable.fromJSONField([K, V], field),
            fromJSON: (json) => ObjectTable.fromJSON([K, V], json),
            fromSuiParsedData: (content) => ObjectTable.fromSuiParsedData([K, V], content),
            fromSuiObjectData: (content) => ObjectTable.fromSuiObjectData([K, V], content),
            fetch: (client, id) => __awaiter(this, void 0, void 0, function* () { return ObjectTable.fetch(client, [K, V], id); }),
            new: (fields) => {
                return new ObjectTable([(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)], fields);
            },
            kind: "StructClassReified",
        };
    }
    static get r() {
        return ObjectTable.reified;
    }
    static phantom(K, V) {
        return (0, reified_1.phantom)(ObjectTable.reified(K, V));
    }
    static get p() {
        return ObjectTable.phantom;
    }
    static get bcs() {
        return bcs_1.bcs.struct("ObjectTable", {
            id: structs_1.UID.bcs,
            size: bcs_1.bcs.u64(),
        });
    }
    static fromFields(typeArgs, fields) {
        return ObjectTable.reified(typeArgs[0], typeArgs[1]).new({
            id: (0, reified_1.decodeFromFields)(structs_1.UID.reified(), fields.id),
            size: (0, reified_1.decodeFromFields)("u64", fields.size),
        });
    }
    static fromFieldsWithTypes(typeArgs, item) {
        if (!isObjectTable(item.type)) {
            throw new Error("not a ObjectTable type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, typeArgs);
        return ObjectTable.reified(typeArgs[0], typeArgs[1]).new({
            id: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.UID.reified(), item.fields.id),
            size: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.size),
        });
    }
    static fromBcs(typeArgs, data) {
        return ObjectTable.fromFields(typeArgs, ObjectTable.bcs.parse(data));
    }
    toJSONField() {
        return {
            id: this.id,
            size: this.size.toString(),
        };
    }
    toJSON() {
        return Object.assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    }
    static fromJSONField(typeArgs, field) {
        return ObjectTable.reified(typeArgs[0], typeArgs[1]).new({
            id: (0, reified_1.decodeFromJSONField)(structs_1.UID.reified(), field.id),
            size: (0, reified_1.decodeFromJSONField)("u64", field.size),
        });
    }
    static fromJSON(typeArgs, json) {
        if (json.$typeName !== ObjectTable.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(ObjectTable.$typeName, ...typeArgs.map(reified_1.extractType)), json.$typeArgs, typeArgs);
        return ObjectTable.fromJSONField(typeArgs, json);
    }
    static fromSuiParsedData(typeArgs, content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isObjectTable(content.type)) {
            throw new Error(`object at ${content.fields.id} is not a ObjectTable object`);
        }
        return ObjectTable.fromFieldsWithTypes(typeArgs, content);
    }
    static fromSuiObjectData(typeArgs, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isObjectTable(data.bcs.type)) {
                throw new Error(`object at is not a ObjectTable object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
            if (gotTypeArgs.length !== 2) {
                throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`);
            }
            for (let i = 0; i < 2; i++) {
                const gotTypeArg = (0, util_1.compressSuiType)(gotTypeArgs[i]);
                const expectedTypeArg = (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArgs[i]));
                if (gotTypeArg !== expectedTypeArg) {
                    throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
                }
            }
            return ObjectTable.fromBcs(typeArgs, (0, utils_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ObjectTable.fromSuiParsedData(typeArgs, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static fetch(client, typeArgs, id) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const res = yield client.getObject({ id, options: { showBcs: true } });
            if (res.error) {
                throw new Error(`error fetching ObjectTable object at id ${id}: ${res.error.code}`);
            }
            if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" ||
                !isObjectTable(res.data.bcs.type)) {
                throw new Error(`object at id ${id} is not a ObjectTable object`);
            }
            return ObjectTable.fromSuiObjectData(typeArgs, res.data);
        });
    }
}
exports.ObjectTable = ObjectTable;
ObjectTable.$typeName = `${index_1.PKG_V30}::object_table::ObjectTable`;
ObjectTable.$numTypeParams = 2;
ObjectTable.$isPhantom = [true, true];
