"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
class Email {
    constructor() {
        this.id = 0;
        this.from = '';
        this.sentTo = '';
        this.subject = '';
        this.body = '';
    }
    get ccdArray() {
        if (!this.ccd || this.ccd.trim() === '')
            return [];
        const results = this.ccd.split(',');
        for (let index = 0; index < results.length; index++) {
            results[index] = results[index].trim();
        }
        return results;
    }
    get bccdArray() {
        if (!this.bccd || this.bccd.trim() === '')
            return [];
        const results = this.bccd.split(',');
        for (let index = 0; index < results.length; index++) {
            results[index] = results[index].trim();
        }
        return results;
    }
}
exports.Email = Email;
