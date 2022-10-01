"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemDescription = void 0;
const AbstractMutable_1 = require("./AbstractMutable");
class SystemDescription extends AbstractMutable_1.AbstractMutable {
    constructor() {
        super(...arguments);
        this.name = "";
        this.description = "";
    }
}
exports.SystemDescription = SystemDescription;
