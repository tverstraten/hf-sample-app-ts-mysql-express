"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractMutable = void 0;
const class_validator_1 = require("class-validator");
const AbstractTraceable_1 = require("./AbstractTraceable");
/**
 * a point of inheritence for classes that can be traced
 */
class AbstractMutable extends AbstractTraceable_1.AbstractTraceable {
    /**
     * the historical version of the object. this does represent a designator of a single state that the object has been in,
     * in conjunction with id it represents one state of one unique object. the current state is always denoted by an objectVersion
     * of 0 and each new state is added with the value increased by 1.
     */
    objectVersion = 1;
    /**
     * the id of the user that last update this
     *
     * @see User
     */
    lastUpdatedById = 0;
    /**
     * the point in time that this object was last updated
     */
    lastUpdatedOn = new Date();
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)()
], AbstractMutable.prototype, "objectVersion", void 0);
__decorate([
    (0, class_validator_1.IsNumber)()
], AbstractMutable.prototype, "lastUpdatedById", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)()
], AbstractMutable.prototype, "lastUpdatedOn", void 0);
exports.AbstractMutable = AbstractMutable;
//# sourceMappingURL=AbstractMutable.js.map