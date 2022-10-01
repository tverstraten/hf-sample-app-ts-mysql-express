"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Build = void 0;
const AbstractMutable_1 = require("./AbstractMutable");
class Build extends AbstractMutable_1.AbstractMutable {
    constructor() {
        super(...arguments);
        this.startedOn = new Date();
    }
}
exports.Build = Build;
