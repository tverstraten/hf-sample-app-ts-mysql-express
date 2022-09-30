import { IsDate, IsNotEmpty } from 'class-validator'
import { Transaction } from './Transaction'
import { TransactionType } from './TransactionType'

/**
 * a single remittance of funds for an account
 */
export class Payment extends Transaction {
	/**
	 * create a new instance of the object
	 */
	constructor() {
		super()
		this.transactionType = TransactionType.payment
	}
}
