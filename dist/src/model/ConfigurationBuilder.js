"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationBuilder = void 0;
const PersistentBuilderType_1 = require("./PersistentBuilderType");
const PersistentBuilderVersion_1 = require("./PersistentBuilderVersion");
class ConfigurationBuilder extends PersistentBuilderVersion_1.PersistentBuilderVersion {
    constructor() {
        super();
        this.type = PersistentBuilderType_1.PersistentBuilderType.configuration;
    }
}
exports.ConfigurationBuilder = ConfigurationBuilder;
