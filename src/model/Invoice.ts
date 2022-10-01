import { Transaction } from './Transaction'
import { TransactionType } from './TransactionType'

export class Invoice extends Transaction {
	invoiceNumber: string

	coveringId?: number

	constructor() {
		super()
		this.invoiceNumber = ''
		this.transactionType = TransactionType.invoice
	}
}
