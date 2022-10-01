"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
const AbstractMutable_1 = require("./AbstractMutable");
class Tag extends AbstractMutable_1.AbstractMutable {
    constructor() {
        super(...arguments);
        this.name = "";
        this.description = "";
    }
}
exports.Tag = Tag;
