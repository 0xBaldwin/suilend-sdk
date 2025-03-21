"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
exports.vector = vector;
const bcs_1 = require("@mysten/sui/bcs");
const reified_1 = require("./reified");
const util_1 = require("./util");
class Vector {
    constructor(typeArgs, elements) {
        this.__VectorClass = true;
        this.$typeName = "vector";
        this.$isPhantom = [false];
        this.$fullTypeName = (0, util_1.composeSuiType)(this.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.elements = elements;
    }
    static reified(T) {
        return {
            typeName: Vector.$typeName,
            fullTypeName: (0, util_1.composeSuiType)(Vector.$typeName, ...[(0, reified_1.extractType)(T)]),
            typeArgs: [(0, reified_1.extractType)(T)],
            isPhantom: Vector.$isPhantom,
            reifiedTypeArgs: [T],
            fromFields: (elements) => Vector.fromFields(T, elements),
            fromFieldsWithTypes: (item) => Vector.fromFieldsWithTypes(T, item),
            fromBcs: (data) => Vector.fromBcs(T, data),
            bcs: Vector.bcs((0, reified_1.toBcs)(T)),
            fromJSONField: (field) => Vector.fromJSONField(T, field),
            fromJSON: (json) => Vector.fromJSON(T, json),
            new: (elements) => {
                return new Vector([(0, reified_1.extractType)(T)], elements);
            },
            kind: "VectorClassReified",
        };
    }
    static get r() {
        return Vector.reified;
    }
    static get bcs() {
        return bcs_1.bcs.vector;
    }
    static fromFields(typeArg, elements) {
        return Vector.reified(typeArg).new(elements.map((element) => (0, reified_1.decodeFromFields)(typeArg, element)));
    }
    static fromFieldsWithTypes(typeArg, item) {
        return Vector.reified(typeArg).new(item.map((field) => (0, reified_1.decodeFromFieldsWithTypes)(typeArg, field)));
    }
    static fromBcs(typeArg, data) {
        return Vector.fromFields(typeArg, Vector.bcs((0, reified_1.toBcs)(typeArg)).parse(data));
    }
    toJSONField() {
        return this.elements.map((element) => (0, reified_1.fieldToJSON)(this.$typeArgs[0], element));
    }
    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            elements: this.toJSONField(),
        };
    }
    static fromJSONField(typeArg, field) {
        return Vector.reified(typeArg).new(field.map((field) => (0, reified_1.decodeFromJSONField)(typeArg, field)));
    }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== Vector.$typeName) {
            throw new Error("not a vector json object");
        }
        return Vector.fromJSONField(typeArg, json.elements);
    }
}
exports.Vector = Vector;
Vector.$typeName = "vector";
Vector.$numTypeParams = 1;
Vector.$isPhantom = [false];
function vector(T) {
    return Vector.r(T);
}
