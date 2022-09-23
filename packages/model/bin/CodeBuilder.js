"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeBuilder = void 0;
const PersistentBuilderType_1 = require("./PersistentBuilderType");
const PersistentBuilderVersion_1 = require("./PersistentBuilderVersion");
/**
 * a body of text used in a template builder to produce text (code) as output
 */
class CodeBuilder extends PersistentBuilderVersion_1.PersistentBuilderVersion {
    /**
     * create a new instance of the object
     */
    constructor() {
        super();
        this.type = PersistentBuilderType_1.PersistentBuilderType.code;
    }
}
exports.CodeBuilder = CodeBuilder;
//# sourceMappingURL=CodeBuilder.js.map