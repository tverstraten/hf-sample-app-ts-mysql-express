"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractMutable = void 0;
const AbstractTraceable_1 = require("./AbstractTraceable");
class AbstractMutable extends AbstractTraceable_1.AbstractTraceable {
    constructor() {
        super(...arguments);
        this.objectVersion = 1;
        this.lastUpdatedById = 0;
        this.lastUpdatedOn = new Date();
    }
}
exports.AbstractMutable = AbstractMutable;
