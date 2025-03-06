"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.msPerYear = exports.WAD = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
exports.WAD = new bignumber_js_1.default(10).pow(18);
exports.msPerYear = 31556952000; // Approx. 1000 * 60 * 60 * 24 * 365; // Used by external dependencies (e.g. msafe-sui-app-store)
