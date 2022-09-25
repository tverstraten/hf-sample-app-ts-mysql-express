import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator'
import { AbstractMutable } from './AbstractMutable'
import { SubscriptionType } from './SubscriptionType'

/**
 * a real or sybolic entity that has one or more systems that they maintain/develop
 */
export class Organization extends AbstractMutable {
	/**
	 * the human readable identifier for the organization
	 */
	@IsString()
	@IsNotEmpty()
	@MaxLength(1024)
	name = ''

	/**
	 * the email address to use as a primary point of contact for the organization
	 */
	@IsString()
	@IsEmail()
	@MaxLength(128)
	primaryContactEmail = ''

	/**
	 * the email address to use as a primary contact for billing
	 */
	@IsString()
	@IsEmail()
	@MaxLength(128)
	billingContactEmail = ''

	/**
	 * the current amount that the organization owes for usage
	 */
	@IsNumber()
	@IsNotEmpty()
	balance = 0

	/**
	 * the plan the account currently makes use of for making use of the system
	 */
	@IsEnum(SubscriptionType)
	@IsNotEmpty()
	currentSubscription: SubscriptionType = SubscriptionType.free
}
