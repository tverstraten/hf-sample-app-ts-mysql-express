/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Transaction } from '@tverstraten/hf-model'
import { TransactionService } from '@tverstraten/hf-bll'
import { AbstractMutableApi } from './AbstractMutableApi'

export class TransactionApi extends AbstractMutableApi<Transaction, TransactionService> {
	static baseName = '/transaction'

	constructor(app: any) {
		super(Transaction, TransactionApi.baseName, TransactionService)
		this.bind(app)
	}
}
