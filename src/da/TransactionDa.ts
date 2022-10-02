import { Transaction } from '../model/Transaction'
import { AbstractDa } from './AbstractDa.generated'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class TransactionDa extends AbstractDa<Transaction> {
	protected getTableName(): string {
		return 'Transaction'
	}

	protected getIdColumnName(): string {
		return 'id'
	}

	protected getDefaultOrderByColumnName(): string {
		return 'id'
	}
}
