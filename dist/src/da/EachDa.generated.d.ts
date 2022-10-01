import { Identity } from './model/Identity';
import { AbstractCrudDa } from './AbstractCrudDa.generated';
export declare class IdentityDal extends AbstractCrudDa<Identity> {
    protected getTableName(): string;
    protected getIdColumnName(): string;
    protected getDefaultOrderByColumnName(): string;
    findOneById(id: number): Promise<Identity>;
}
//# sourceMappingURL=EachDa.generated.d.ts.map