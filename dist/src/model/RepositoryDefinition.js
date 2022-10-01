"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryDefinition = void 0;
const AbstractMutable_1 = require("./AbstractMutable");
class RepositoryDefinition extends AbstractMutable_1.AbstractMutable {
    constructor() {
        super(...arguments);
        this.name = "";
        this.providerName = "";
        this.url = "";
        this.pat = "";
    }
}
exports.RepositoryDefinition = RepositoryDefinition;
