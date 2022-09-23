"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Build = void 0;
const class_validator_1 = require("class-validator");
const AbstractMutable_1 = require("./AbstractMutable");
const IsBeforeToday_1 = require("./validators/IsBeforeToday");
/**
 * one invocation of a builder
 */
class Build extends AbstractMutable_1.AbstractMutable {
    /**
     * the organization it is for
     *
     * @see Organization
     */
    withinOrganizationId;
    /**
     * the system the build is for
     *
     * @see SystemDescription
     */
    forSystemId;
    /**
     * the point in time the build was started
     */
    startedOn = new Date();
    /**
     * the point in time the build was completed
     */
    finishedOn;
    /**
     * the id of the user that built it
     *
     * @see User
     */
    builtById;
    /**
     * the user that triggered the build
     *
     * @see User
     */
    triggeredById;
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)()
], Build.prototype, "withinOrganizationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)()
], Build.prototype, "forSystemId", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Validate)(IsBeforeToday_1.IsBeforeToday)
], Build.prototype, "startedOn", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)()
], Build.prototype, "finishedOn", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)()
], Build.prototype, "builtById", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)()
], Build.prototype, "triggeredById", void 0);
exports.Build = Build;
//# sourceMappingURL=Build.js.map