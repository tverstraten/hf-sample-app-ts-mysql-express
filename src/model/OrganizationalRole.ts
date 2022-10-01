import { AbstractMutable } from './AbstractMutable'

export class OrganizationalRole extends AbstractMutable {
	name = ''

	description = ''

	static operator = 'operator'
	static user = 'user'
	static administrator = 'administrator'
	static administratorWithBilling = 'administratorWithBilling'
	static internalAdministrator = 'internalAdministrator'
	static internalSupport = 'internalSupport'
	static internalBilling = 'internalBilling'
}
