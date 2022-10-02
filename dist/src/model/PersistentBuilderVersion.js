"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersistentBuilderVersion = void 0;
const PersistentBuilderType_1 = require("./PersistentBuilderType");
class PersistentBuilderVersion {
    constructor() {
        this.id = 0;
        this.type = PersistentBuilderType_1.PersistentBuilderType.configuration;
        this.version = '';
        this.released = false;
        this.tags = '';
        this.text = '';
        this.deprecated = false;
    }
}
exports.PersistentBuilderVersion = PersistentBuilderVersion;
