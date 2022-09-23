import { Transaction } from './Transaction';
/**
 * one amount charged to an account for a given billing period
 */
export declare class Invoice extends Transaction {
    /**
     * the human readable identifier
     */
    invoiceNumber: string;
    /**
     * the period the invoice is for
     *
     * @see BillingPeriod
     */
    coveringId?: number;
    /**
     * create a new instance of the object
     */
    constructor();
}
