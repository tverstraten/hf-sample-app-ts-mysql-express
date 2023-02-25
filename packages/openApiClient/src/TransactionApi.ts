import { AbstractMutableApi } from './AbstractMutableApi'
import { Transaction } from '@tverstraten/hf-model'

/**
 * Api client meant to proxy to open api services that operate on the persistent class Transaction.
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class TransactionApi extends AbstractMutableApi<Transaction> {
	constructor() {
		super('Transaction')
	}
}
