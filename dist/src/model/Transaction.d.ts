import { AbstractMutable } from "./AbstractMutable";
import { TransactionType } from "./TransactionType";
export declare class Transaction extends AbstractMutable {
    withinOrganizationId?: number;
    transactionType: TransactionType;
    effective?: Date;
    amount: number;
}
//# sourceMappingURL=Transaction.d.ts.map