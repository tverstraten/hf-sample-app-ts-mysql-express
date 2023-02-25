/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { TransactionDac } from '@tverstraten/hf-dal'
import { AbstractMutableService } from './AbstractMutableService'
import { Transaction } from '@tverstraten/hf-model'

/**
 * Services meant to operate on the persistent class Transaction.
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class TransactionService extends AbstractMutableService<Transaction> {
	constructor() {
		super(new TransactionDac())
	}
}
