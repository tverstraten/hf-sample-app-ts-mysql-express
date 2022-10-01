import { Transaction } from '../model/Transaction'
import { TransactionService } from '../bl/TransactionService'
import { AbstractController } from './AbstractController.generated'

export class TransactionApi extends AbstractController<Transaction, TransactionService> {
	static baseName = '/transaction'

	constructor(app: any) {
		super(Transaction, TransactionApi.baseName, TransactionService)
		this.bind(app)
	}
}
