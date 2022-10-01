import { Transaction } from './Transaction'
import { TransactionType } from './TransactionType'

export class Payment extends Transaction {
	constructor() {
		super()
		this.transactionType = TransactionType.payment
	}
}
