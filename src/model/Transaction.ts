import { Traceable } from './Traceable'
import { TransactionType } from './TransactionType'

export class Transaction implements Traceable {
	id = 0

	withinOrganizationId?: number

	transactionType: TransactionType = TransactionType.invoice

	effective?: Date

	amount = 0

	invoiceNumber?: string

	coveringId?: number
}
