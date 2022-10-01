"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersistentBuilderVersion = void 0;
const AbstractMutable_1 = require("./AbstractMutable");
const PersistentBuilderType_1 = require("./PersistentBuilderType");
class PersistentBuilderVersion extends AbstractMutable_1.AbstractMutable {
    constructor() {
        super(...arguments);
        this.type = PersistentBuilderType_1.PersistentBuilderType.configuration;
        this.version = "";
        this.released = false;
        this.tags = "";
        this.text = "";
        this.deprecated = false;
    }
}
exports.PersistentBuilderVersion = PersistentBuilderVersion;
