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
exports.UID = exports.ID = void 0;
exports.isID = isID;
exports.isUID = isUID;
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const index_1 = require("../index");
const bcs_1 = require("@mysten/sui/bcs");
const utils_1 = require("@mysten/sui/utils");
/* ============================== ID =============================== */
function isID(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === `${index_1.PKG_V30}::object::ID`;
}
class ID {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ID.$typeName;
        this.$isPhantom = ID.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ID.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.bytes = fields.bytes;
    }
    static reified() {
        return {
            typeName: ID.$typeName,
            fullTypeName: (0, util_1.composeSuiType)(ID.$typeName, ...[]),
            typeArgs: [],
            isPhantom: ID.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields) => ID.fromFields(fields),
            fromFieldsWithTypes: (item) => ID.fromFieldsWithTypes(item),
            fromBcs: (data) => ID.fromBcs(data),
            bcs: ID.bcs,
            fromJSONField: (field) => ID.fromJSONField(field),
            fromJSON: (json) => ID.fromJSON(json),
            fromSuiParsedData: (content) => ID.fromSuiParsedData(content),
            fromSuiObjectData: (content) => ID.fromSuiObjectData(content),
            fetch: (client, id) => __awaiter(this, void 0, void 0, function* () { return ID.fetch(client, id); }),
            new: (fields) => {
                return new ID([], fields);
            },
            kind: "StructClassReified",
        };
    }
    static get r() {
        return ID.reified();
    }
    static phantom() {
        return (0, reified_1.phantom)(ID.reified());
    }
    static get p() {
        return ID.phantom();
    }
    static get bcs() {
        return bcs_1.bcs.struct("ID", {
            bytes: bcs_1.bcs
                .bytes(32)
                .transform({
                input: (val) => (0, utils_1.fromHEX)(val),
                output: (val) => (0, utils_1.toHEX)(val),
            }),
        });
    }
    static fromFields(fields) {
        return ID.reified().new({
            bytes: (0, reified_1.decodeFromFields)("address", fields.bytes),
        });
    }
    static fromFieldsWithTypes(item) {
        if (!isID(item.type)) {
            throw new Error("not a ID type");
        }
        return ID.reified().new({
            bytes: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.bytes),
        });
    }
    static fromBcs(data) {
        return ID.fromFields(ID.bcs.parse(data));
    }
    toJSONField() {
        return {
            bytes: this.bytes,
        };
    }
    toJSON() {
        return Object.assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    }
    static fromJSONField(field) {
        return ID.reified().new({
            bytes: (0, reified_1.decodeFromJSONField)("address", field.bytes),
        });
    }
    static fromJSON(json) {
        if (json.$typeName !== ID.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return ID.fromJSONField(json);
    }
    static fromSuiParsedData(content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isID(content.type)) {
            throw new Error(`object at ${content.fields.id} is not a ID object`);
        }
        return ID.fromFieldsWithTypes(content);
    }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isID(data.bcs.type)) {
                throw new Error(`object at is not a ID object`);
            }
            return ID.fromBcs((0, utils_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ID.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static fetch(client, id) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const res = yield client.getObject({ id, options: { showBcs: true } });
            if (res.error) {
                throw new Error(`error fetching ID object at id ${id}: ${res.error.code}`);
            }
            if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isID(res.data.bcs.type)) {
                throw new Error(`object at id ${id} is not a ID object`);
            }
            return ID.fromSuiObjectData(res.data);
        });
    }
}
exports.ID = ID;
ID.$typeName = `${index_1.PKG_V30}::object::ID`;
ID.$numTypeParams = 0;
ID.$isPhantom = [];
/* ============================== UID =============================== */
function isUID(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === `${index_1.PKG_V30}::object::UID`;
}
class UID {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = UID.$typeName;
        this.$isPhantom = UID.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(UID.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    static reified() {
        return {
            typeName: UID.$typeName,
            fullTypeName: (0, util_1.composeSuiType)(UID.$typeName, ...[]),
            typeArgs: [],
            isPhantom: UID.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields) => UID.fromFields(fields),
            fromFieldsWithTypes: (item) => UID.fromFieldsWithTypes(item),
            fromBcs: (data) => UID.fromBcs(data),
            bcs: UID.bcs,
            fromJSONField: (field) => UID.fromJSONField(field),
            fromJSON: (json) => UID.fromJSON(json),
            fromSuiParsedData: (content) => UID.fromSuiParsedData(content),
            fromSuiObjectData: (content) => UID.fromSuiObjectData(content),
            fetch: (client, id) => __awaiter(this, void 0, void 0, function* () { return UID.fetch(client, id); }),
            new: (fields) => {
                return new UID([], fields);
            },
            kind: "StructClassReified",
        };
    }
    static get r() {
        return UID.reified();
    }
    static phantom() {
        return (0, reified_1.phantom)(UID.reified());
    }
    static get p() {
        return UID.phantom();
    }
    static get bcs() {
        return bcs_1.bcs.struct("UID", {
            id: ID.bcs,
        });
    }
    static fromFields(fields) {
        return UID.reified().new({ id: (0, reified_1.decodeFromFields)(ID.reified(), fields.id) });
    }
    static fromFieldsWithTypes(item) {
        if (!isUID(item.type)) {
            throw new Error("not a UID type");
        }
        return UID.reified().new({
            id: (0, reified_1.decodeFromFieldsWithTypes)(ID.reified(), item.fields.id),
        });
    }
    static fromBcs(data) {
        return UID.fromFields(UID.bcs.parse(data));
    }
    toJSONField() {
        return {
            id: this.id,
        };
    }
    toJSON() {
        return Object.assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    }
    static fromJSONField(field) {
        return UID.reified().new({
            id: (0, reified_1.decodeFromJSONField)(ID.reified(), field.id),
        });
    }
    static fromJSON(json) {
        if (json.$typeName !== UID.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return UID.fromJSONField(json);
    }
    static fromSuiParsedData(content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUID(content.type)) {
            throw new Error(`object at ${content.fields.id} is not a UID object`);
        }
        return UID.fromFieldsWithTypes(content);
    }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isUID(data.bcs.type)) {
                throw new Error(`object at is not a UID object`);
            }
            return UID.fromBcs((0, utils_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return UID.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static fetch(client, id) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const res = yield client.getObject({ id, options: { showBcs: true } });
            if (res.error) {
                throw new Error(`error fetching UID object at id ${id}: ${res.error.code}`);
            }
            if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUID(res.data.bcs.type)) {
                throw new Error(`object at id ${id} is not a UID object`);
            }
            return UID.fromSuiObjectData(res.data);
        });
    }
}
exports.UID = UID;
UID.$typeName = `${index_1.PKG_V30}::object::UID`;
UID.$numTypeParams = 0;
UID.$isPhantom = [];
