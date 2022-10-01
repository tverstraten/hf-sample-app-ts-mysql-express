"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractTraceable = void 0;
class AbstractTraceable {
    constructor() {
        this.id = 0;
        this.createdById = 0;
        this.createdOn = new Date();
    }
}
exports.AbstractTraceable = AbstractTraceable;
