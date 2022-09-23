import { IsNotEmpty, IsString, MaxLength } from 'class-validator'
import { AbstractMutable } from './AbstractMutable'

/**
 * a categorization of the types of actions and ensuing responsibilities that a user may perform for an organization
 */
export class OrganizationalRole extends AbstractMutable {
	/**
	 * the human readable identifier for the role
	 */
	@IsString()
	@IsNotEmpty()
	@MaxLength(128)
	name = ''

	/**
	 * a sentence or phrase that describe the role
	 */
	@IsString()
	@IsNotEmpty()
	@MaxLength(1024)
	description = ''

	/**
	 * well known names
	 */
	static operator = 'operator'
	static user = 'user'
	static administrator = 'administrator'
	static administratorWithBilling = 'administratorWithBilling'
	static internalAdministrator = 'internalAdministrator'
	static internalSupport = 'internalSupport'
	static internalBilling = 'internalBilling'
}
