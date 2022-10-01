"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindResults = void 0;
class FindResults {
    constructor() {
        this.rows = [];
        this.numberOfMatchingRows = 0;
        this.rowsPerPage = 20;
        this.page = 0;
    }
}
exports.FindResults = FindResults;
