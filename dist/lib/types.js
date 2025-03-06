"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = exports.Side = void 0;
var Side;
(function (Side) {
    Side["DEPOSIT"] = "deposit";
    Side["BORROW"] = "borrow";
})(Side || (exports.Side = Side = {}));
var Action;
(function (Action) {
    Action["DEPOSIT"] = "deposit";
    Action["WITHDRAW"] = "withdraw";
    Action["BORROW"] = "borrow";
    Action["REPAY"] = "repay";
})(Action || (exports.Action = Action = {}));
