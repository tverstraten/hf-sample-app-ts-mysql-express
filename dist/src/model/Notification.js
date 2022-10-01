"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
const AbstractMutable_1 = require("./AbstractMutable");
class Notification extends AbstractMutable_1.AbstractMutable {
    constructor() {
        super(...arguments);
        this.text = "";
    }
}
exports.Notification = Notification;
