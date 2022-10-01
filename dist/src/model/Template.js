"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Template = void 0;
const PersistentBuilderType_1 = require("./PersistentBuilderType");
const PersistentBuilderVersion_1 = require("./PersistentBuilderVersion");
class Template extends PersistentBuilderVersion_1.PersistentBuilderVersion {
    constructor() {
        super();
        this.type = PersistentBuilderType_1.PersistentBuilderType.template;
    }
}
exports.Template = Template;
