import { Transaction } from './Transaction'
import { TransactionType } from './TransactionType'

/**
 * A single remittance of funds for an account.
 */
export class Payment extends Transaction {
	/**
	 * Create a new instance of the object.
	 */
	constructor() {
		super()
		this.transactionType = TransactionType.payment
	}
}
