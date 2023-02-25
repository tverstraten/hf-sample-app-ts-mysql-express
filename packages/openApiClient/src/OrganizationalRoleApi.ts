import { AbstractMutableApi } from './AbstractMutableApi'
import { OrganizationalRole } from '@tverstraten/hf-model'

/**
 * Api client meant to proxy to open api services that operate on the persistent class OrganizationalRole.
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class OrganizationalRoleApi extends AbstractMutableApi<OrganizationalRole> {
	constructor() {
		super('OrganizationalRole')
	}
}
