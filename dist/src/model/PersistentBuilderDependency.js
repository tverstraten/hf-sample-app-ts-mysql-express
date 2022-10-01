"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersistentBuilderDependency = void 0;
const AbstractTraceable_1 = require("./AbstractTraceable");
class PersistentBuilderDependency extends AbstractTraceable_1.AbstractTraceable {
    constructor() {
        super(...arguments);
        this.builderId = 0;
        this.dependentOnId = 0;
    }
}
exports.PersistentBuilderDependency = PersistentBuilderDependency;
