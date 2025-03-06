"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendObligationToUser = exports.createObligationIfNoneExists = void 0;
const createObligationIfNoneExists = (suilendClient, transaction, obligationOwnerCap) => {
    let obligationOwnerCapId;
    let didCreate = false;
    if (obligationOwnerCap)
        obligationOwnerCapId = obligationOwnerCap.id;
    else {
        obligationOwnerCapId = suilendClient.createObligation(transaction);
        didCreate = true;
    }
    return { obligationOwnerCapId, didCreate };
};
exports.createObligationIfNoneExists = createObligationIfNoneExists;
const sendObligationToUser = (obligationOwnerCapId, address, transaction) => {
    transaction.transferObjects([obligationOwnerCapId], transaction.pure.address(address));
};
exports.sendObligationToUser = sendObligationToUser;
