import { AbstractMutable } from './AbstractMutable'
import { TransactionType } from './TransactionType'

export class Transaction extends AbstractMutable {
	withinOrganizationId?: number

	transactionType: TransactionType = TransactionType.invoice

	effective?: Date

	amount = 0
}
