import { IsBoolean } from 'class-validator'
import { Transaction } from '../Transaction'
import { Historical } from './Historical'

/**
 * an change of the amount of funds an accounts owes or is owed
 */
export class TransactionHistorical extends Transaction implements Historical {
	/**
	 * is the object deleted
	 */
	@IsBoolean()
	isDeleted = false
}
