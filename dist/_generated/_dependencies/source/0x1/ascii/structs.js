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
Object.defineProperty(exports, "__esModule", { value: true });
exports.String = exports.Char = void 0;
exports.isChar = isChar;
exports.isString = isString;
const reified = __importStar(require("../../../../_framework/reified"));
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const index_1 = require("../index");
const bcs_1 = require("@mysten/sui/bcs");
const utils_1 = require("@mysten/sui/utils");
/* ============================== Char =============================== */
function isChar(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === `${index_1.PKG_V13}::ascii::Char`;
}
class Char {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Char.$typeName;
        this.$isPhantom = Char.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Char.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.byte = fields.byte;
    }
    static reified() {
        return {
            typeName: Char.$typeName,
            fullTypeName: (0, util_1.composeSuiType)(Char.$typeName, ...[]),
            typeArgs: [],
            isPhantom: Char.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields) => Char.fromFields(fields),
            fromFieldsWithTypes: (item) => Char.fromFieldsWithTypes(item),
            fromBcs: (data) => Char.fromBcs(data),
            bcs: Char.bcs,
            fromJSONField: (field) => Char.fromJSONField(field),
            fromJSON: (json) => Char.fromJSON(json),
            fromSuiParsedData: (content) => Char.fromSuiParsedData(content),
            fromSuiObjectData: (content) => Char.fromSuiObjectData(content),
            fetch: (client, id) => __awaiter(this, void 0, void 0, function* () { return Char.fetch(client, id); }),
            new: (fields) => {
                return new Char([], fields);
            },
            kind: "StructClassReified",
        };
    }
    static get r() {
        return Char.reified();
    }
    static phantom() {
        return (0, reified_1.phantom)(Char.reified());
    }
    static get p() {
        return Char.phantom();
    }
    static get bcs() {
        return bcs_1.bcs.struct("Char", {
            byte: bcs_1.bcs.u8(),
        });
    }
    static fromFields(fields) {
        return Char.reified().new({ byte: (0, reified_1.decodeFromFields)("u8", fields.byte) });
    }
    static fromFieldsWithTypes(item) {
        if (!isChar(item.type)) {
            throw new Error("not a Char type");
        }
        return Char.reified().new({
            byte: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.byte),
        });
    }
    static fromBcs(data) {
        return Char.fromFields(Char.bcs.parse(data));
    }
    toJSONField() {
        return {
            byte: this.byte,
        };
    }
    toJSON() {
        return Object.assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    }
    static fromJSONField(field) {
        return Char.reified().new({ byte: (0, reified_1.decodeFromJSONField)("u8", field.byte) });
    }
    static fromJSON(json) {
        if (json.$typeName !== Char.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return Char.fromJSONField(json);
    }
    static fromSuiParsedData(content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isChar(content.type)) {
            throw new Error(`object at ${content.fields.id} is not a Char object`);
        }
        return Char.fromFieldsWithTypes(content);
    }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isChar(data.bcs.type)) {
                throw new Error(`object at is not a Char object`);
            }
            return Char.fromBcs((0, utils_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Char.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static fetch(client, id) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const res = yield client.getObject({ id, options: { showBcs: true } });
            if (res.error) {
                throw new Error(`error fetching Char object at id ${id}: ${res.error.code}`);
            }
            if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" ||
                !isChar(res.data.bcs.type)) {
                throw new Error(`object at id ${id} is not a Char object`);
            }
            return Char.fromSuiObjectData(res.data);
        });
    }
}
exports.Char = Char;
Char.$typeName = `${index_1.PKG_V13}::ascii::Char`;
Char.$numTypeParams = 0;
Char.$isPhantom = [];
/* ============================== String =============================== */
function isString(type) {
    type = (0, util_1.compressSuiType)(type);
    return type === `${index_1.PKG_V13}::ascii::String`;
}
class String {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = String.$typeName;
        this.$isPhantom = String.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(String.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.bytes = fields.bytes;
    }
    static reified() {
        return {
            typeName: String.$typeName,
            fullTypeName: (0, util_1.composeSuiType)(String.$typeName, ...[]),
            typeArgs: [],
            isPhantom: String.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields) => String.fromFields(fields),
            fromFieldsWithTypes: (item) => String.fromFieldsWithTypes(item),
            fromBcs: (data) => String.fromBcs(data),
            bcs: String.bcs,
            fromJSONField: (field) => String.fromJSONField(field),
            fromJSON: (json) => String.fromJSON(json),
            fromSuiParsedData: (content) => String.fromSuiParsedData(content),
            fromSuiObjectData: (content) => String.fromSuiObjectData(content),
            fetch: (client, id) => __awaiter(this, void 0, void 0, function* () { return String.fetch(client, id); }),
            new: (fields) => {
                return new String([], fields);
            },
            kind: "StructClassReified",
        };
    }
    static get r() {
        return String.reified();
    }
    static phantom() {
        return (0, reified_1.phantom)(String.reified());
    }
    static get p() {
        return String.phantom();
    }
    static get bcs() {
        return bcs_1.bcs.struct("String", {
            bytes: bcs_1.bcs.vector(bcs_1.bcs.u8()),
        });
    }
    static fromFields(fields) {
        return String.reified().new({
            bytes: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.bytes),
        });
    }
    static fromFieldsWithTypes(item) {
        if (!isString(item.type)) {
            throw new Error("not a String type");
        }
        return String.reified().new({
            bytes: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.bytes),
        });
    }
    static fromBcs(data) {
        return String.fromFields(String.bcs.parse(data));
    }
    toJSONField() {
        return {
            bytes: (0, reified_1.fieldToJSON)(`vector<u8>`, this.bytes),
        };
    }
    toJSON() {
        return Object.assign({ $typeName: this.$typeName, $typeArgs: this.$typeArgs }, this.toJSONField());
    }
    static fromJSONField(field) {
        return String.reified().new({
            bytes: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.bytes),
        });
    }
    static fromJSON(json) {
        if (json.$typeName !== String.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        return String.fromJSONField(json);
    }
    static fromSuiParsedData(content) {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isString(content.type)) {
            throw new Error(`object at ${content.fields.id} is not a String object`);
        }
        return String.fromFieldsWithTypes(content);
    }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isString(data.bcs.type)) {
                throw new Error(`object at is not a String object`);
            }
            return String.fromBcs((0, utils_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return String.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static fetch(client, id) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const res = yield client.getObject({ id, options: { showBcs: true } });
            if (res.error) {
                throw new Error(`error fetching String object at id ${id}: ${res.error.code}`);
            }
            if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" ||
                !isString(res.data.bcs.type)) {
                throw new Error(`object at id ${id} is not a String object`);
            }
            return String.fromSuiObjectData(res.data);
        });
    }
}
exports.String = String;
String.$typeName = `${index_1.PKG_V13}::ascii::String`;
String.$numTypeParams = 0;
String.$isPhantom = [];
