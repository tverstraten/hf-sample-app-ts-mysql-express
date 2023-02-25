/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { OrganizationalRoleDac } from '@tverstraten/hf-dal'
import { AbstractMutableService } from './AbstractMutableService'
import { OrganizationalRole } from '@tverstraten/hf-model'

/**
 * Services meant to operate on the persistent class OrganizationalRole.
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class OrganizationalRoleService extends AbstractMutableService<OrganizationalRole> {
	constructor() {
		super(new OrganizationalRoleDac())
	}
}
