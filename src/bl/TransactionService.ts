import { TransactionDa } from '../da/TransactionDa'
import { AbstractService } from './AbstractService.generated'
import { Transaction } from '../model/Transaction'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class TransactionService extends AbstractService<Transaction> {
	constructor() {
		super(new TransactionDa())
	}
}
