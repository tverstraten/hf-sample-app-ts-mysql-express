"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invitation = void 0;
const AbstractMutable_1 = require("./AbstractMutable");
class Invitation extends AbstractMutable_1.AbstractMutable {
    constructor() {
        super(...arguments);
        this.toEmail = "";
    }
}
exports.Invitation = Invitation;
