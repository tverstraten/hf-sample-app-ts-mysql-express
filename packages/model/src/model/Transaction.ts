import { IsDate, IsEnum, IsNotEmpty, IsNumber } from 'class-validator'
import { AbstractMutable } from './AbstractMutable'
import { TransactionType } from './TransactionType'

/**
 * an change of the amount of funds an accounts owes or is owed
 */
export class Transaction extends AbstractMutable {
	/**
	 * the id of the organization it is for
	 *
	 * @see Organization
	 */
	@IsNumber()
	@IsNotEmpty()
	withinOrganizationId?: number

	/**
	 * the kind of transaction it is
	 */
	@IsNotEmpty()
	@IsEnum(TransactionType)
	transactionType: TransactionType = TransactionType.invoice

	/**
	 * the point in time the transaction was effective
	 */
	@IsDate()
	@IsNotEmpty()
	effective?: Date

	/**
	 * the amount to add to the balance of the account
	 */
	@IsNumber()
	@IsNotEmpty()
	amount = 0
}
