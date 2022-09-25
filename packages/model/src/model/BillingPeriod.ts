import { IsDate, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator'
import { AbstractMutable } from './AbstractMutable'

/**
 * a singular interval of time used to bill accounts for
 */
export class BillingPeriod extends AbstractMutable {
	/**
	 * the human readable identifier for the period
	 */
	@IsString()
	@IsNotEmpty()
	@MaxLength(128)
	name = ''

	/**
	 * the point in time it started
	 */
	@IsOptional()
	@IsDate()
	start?: Date

	/**
	 * the point in time it ceased
	 */
	@IsOptional()
	@IsDate()
	end?: Date
}
