"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildHistorical = void 0;
const Build_1 = require("../model/Build");
class BuildHistorical extends Build_1.Build {
    constructor() {
        super(...arguments);
        this.isDeleted = false;
    }
}
exports.BuildHistorical = BuildHistorical;
