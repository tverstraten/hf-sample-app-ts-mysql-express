"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentityDal = void 0;
const AbstractCrudDa_generated_1 = require("./AbstractCrudDa.generated");
class IdentityDal extends AbstractCrudDa_generated_1.AbstractCrudDa {
    getTableName() {
        return 'thisname';
    }
    getIdColumnName() {
        return 'id';
    }
    getDefaultOrderByColumnName() {
        return 'createdOn';
    }
    async findOneById(id) {
        return super.findOneById(id);
    }
}
exports.IdentityDal = IdentityDal;
