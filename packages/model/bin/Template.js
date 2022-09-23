"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Template = void 0;
const PersistentBuilderType_1 = require("./PersistentBuilderType");
const PersistentBuilderVersion_1 = require("./PersistentBuilderVersion");
/**
 * a body of text used in a template builder to produce text (code) as output
 */
class Template extends PersistentBuilderVersion_1.PersistentBuilderVersion {
    /**
     * create a new instance of the object
     */
    constructor() {
        super();
        this.type = PersistentBuilderType_1.PersistentBuilderType.template;
    }
}
exports.Template = Template;
//# sourceMappingURL=Template.js.map