import { IsDate, IsEnum, IsInt, IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator'
import { AbstractMutable } from './AbstractMutable'
import { BillingPeriod } from './BillingPeriod'
import { Organization } from './Organization'
import { TransactionType } from './TransactionType'

/**
 * An change of the amount of funds an accounts owes or is owed.
 */
export class Transaction extends AbstractMutable {
	/**
	 * The id of the organization it is for.
	 *
	 * @see Organization
	 */
	@IsInt()
	@IsNotEmpty()
	withinOrganizationId?: number

	/**
	 * The id of the organization it is for.
	 */
	withinOrganization?: Organization

	/**
	 * The kind of transaction it is.
	 */
	@IsNotEmpty()
	@IsEnum(TransactionType)
	transactionType: TransactionType = TransactionType.invoice

	/**
	 * The point in time the transaction was effective.
	 */
	@IsDate()
	@IsNotEmpty()
	effective?: Date

	/**
	 * The amount to add to the balance of the account.
	 */
	// eslint-disable-next-line @typescript-eslint/naming-convention
	@IsNumber()
	@IsNotEmpty()
	amount = 0

	/**
	 * The human readable identifier.
	 */
	@IsString()
	@MaxLength(128)
	invoiceNumber?: string

	/**
	 * The period the invoice is for.
	 *
	 * @see BillingPeriod
	 */
	@IsInt()
	coveringId?: number

	/**
	 * The period the invoice is for.
	 */
	covering?: BillingPeriod
}
