"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersistentBuilder = void 0;
const AbstractMutable_1 = require("./AbstractMutable");
const PersistentBuilderType_1 = require("./PersistentBuilderType");
const ReleaseLevel_1 = require("./ReleaseLevel");
class PersistentBuilder extends AbstractMutable_1.AbstractMutable {
    constructor() {
        super(...arguments);
        this.type = PersistentBuilderType_1.PersistentBuilderType.configuration;
        this.name = "";
        this.releaseLevel = ReleaseLevel_1.ReleaseLevel.community;
    }
}
exports.PersistentBuilder = PersistentBuilder;
