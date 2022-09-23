import { AbstractMutable } from './AbstractMutable';
import { TransactionType } from './TransactionType';
/**
 * an change of the amount of funds an accounts owes or is owed
 */
export declare class Transaction extends AbstractMutable {
    /**
     * the id of the organization it is for
     *
     * @see Organization
     */
    withinOrganizationId?: number;
    /**
     * the kind of transaction it is
     */
    transactionType: TransactionType;
    /**
     * the point in time the transaction was effective
     */
    effective?: Date;
    /**
     * the amount to add to the balance of the account
     */
    amount: number;
}
