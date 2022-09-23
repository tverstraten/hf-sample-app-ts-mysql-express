"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
const class_validator_1 = require("class-validator");
const AbstractMutable_1 = require("./AbstractMutable");
const IsEmailCsv_1 = require("./validators/IsEmailCsv");
/**
 * an email that was sent
 */
class Email extends AbstractMutable_1.AbstractMutable {
    /**
     * the organization it is for
     *
     * @see Organization
     */
    withinOrganizationId;
    /**
     * the email address that sent it
     */
    from = '';
    /**
     * the email addresses it was sent to
     */
    sentTo = '';
    /**
     * the the users the sentTo email addresses represent
     *
     * @see Organization
     */
    userSentToId;
    /**
     * a csv list of the email addresses that were cc'd
     */
    ccd;
    /**
     * get the list of cc'd as an array of email addresses
     *
     * @returns the cc text converted into an array with email address as one entry in the array
     */
    get ccdArray() {
        if (!this.ccd || this.ccd.trim() === '')
            return [];
        const results = this.ccd.split(',');
        for (let index = 0; index < results.length; index++) {
            results[index] = results[index].trim();
        }
        return results;
    }
    /**
     * a csv ist of the email addresses that were bcc'd
     */
    bccd;
    /**
     * get the list of bcc'd as an array of email addresses
     *
     * @returns the bcc text converted into an array with email address as one entry in the array
     */
    get bccdArray() {
        if (!this.bccd || this.bccd.trim() === '')
            return [];
        const results = this.bccd.split(',');
        for (let index = 0; index < results.length; index++) {
            results[index] = results[index].trim();
        }
        return results;
    }
    /**
     * to the best of our knowledge, when was it first read?
     */
    firstRead;
    /**
     * the subject of the email
     */
    subject = '';
    /**
     * the contents of the email, html encoded
     */
    body = '';
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)()
], Email.prototype, "withinOrganizationId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.MaxLength)(128)
], Email.prototype, "from", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(128)
], Email.prototype, "sentTo", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)()
], Email.prototype, "userSentToId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Validate)(IsEmailCsv_1.IsEmailCsv),
    (0, class_validator_1.MaxLength)(1024)
], Email.prototype, "ccd", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Validate)(IsEmailCsv_1.IsEmailCsv),
    (0, class_validator_1.MaxLength)(1024)
], Email.prototype, "bccd", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)()
], Email.prototype, "firstRead", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(256)
], Email.prototype, "subject", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(19000)
], Email.prototype, "body", void 0);
exports.Email = Email;
//# sourceMappingURL=Email.js.map