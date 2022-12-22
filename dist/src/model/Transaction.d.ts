import { Traceable } from './Traceable';
import { TransactionType } from './TransactionType';
export declare class Transaction implements Traceable {
    id: number;
    withinOrganizationId?: number;
    transactionType: TransactionType;
    effective?: Date;
    amount: number;
    invoiceNumber?: string;
    coveringId?: number;
}
//# sourceMappingURL=Transaction.d.ts.map