import { Transaction } from '../Transaction';
import { Historical } from './Historical';
/**
 * an change of the amount of funds an accounts owes or is owed
 */
export declare class TransactionHistorical extends Transaction implements Historical {
    /**
     * is the object deleted
     */
    isDeleted: boolean;
}
