import { IsInt, IsString, MaxLength } from 'class-validator'
import { BillingPeriod } from './BillingPeriod'
import { Transaction } from './Transaction'
import { TransactionType } from './TransactionType'

/**
 * One amount charged to an account for a given billing period.
 */
export class Invoice extends Transaction {
	/**
	 * The human readable identifier.
	 */
	@IsString()
	@MaxLength(128)
	invoiceNumber: string

	/**
	 * The period the invoice is for.
	 *
	 * @see BillingPeriod
	 */
	@IsInt()
	coveringId?: number

	/**
	 * The period the invoice is for.
	 */
	covering?: BillingPeriod

	/**
	 * Create a new instance of the object.
	 */
	constructor() {
		super()
		this.invoiceNumber = ''
		this.transactionType = TransactionType.invoice
	}
}
