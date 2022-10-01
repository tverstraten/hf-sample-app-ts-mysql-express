import { OrganizationalRoleDa } from '../da/OrganizationalRoleDa'
import { AbstractService } from './AbstractService.generated'
import { OrganizationalRole } from '../model/OrganizationalRole'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class OrganizationalRoleService extends AbstractService<OrganizationalRole> {
	constructor() {
		super(new OrganizationalRoleDa())
	}
}
