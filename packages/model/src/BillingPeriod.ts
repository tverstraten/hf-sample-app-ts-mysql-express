import { IsDate, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator'
import { AbstractMutable } from './AbstractMutable'

/**
 * A singular interval of time used to bill accounts for.
 */
export class BillingPeriod extends AbstractMutable {
	/**
	 * The human readable identifier for the period.
	 */
	@IsString()
	@IsNotEmpty()
	@MaxLength(128)
	name = ''

	/**
	 * The point in time it started.
	 */
	@IsOptional()
	@IsDate()
	start?: Date

	/**
	 * The point in time it ceased.
	 */
	@IsOptional()
	@IsDate()
	end?: Date
}
