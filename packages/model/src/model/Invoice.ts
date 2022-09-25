import { IsNumber, IsString, MaxLength } from 'class-validator'
import { Transaction } from './Transaction'
import { TransactionType } from './TransactionType'

/**
 * one amount charged to an account for a given billing period
 */
export class Invoice extends Transaction {
	/**
	 * the human readable identifier
	 */
	@IsString()
	@MaxLength(128)
	invoiceNumber: string

	/**
	 * the period the invoice is for
	 *
	 * @see BillingPeriod
	 */
	@IsNumber()
	coveringId?: number

	/**
	 * create a new instance of the object
	 */
	constructor() {
		super()
		this.invoiceNumber = ''
		this.transactionType = TransactionType.invoice
	}
}
