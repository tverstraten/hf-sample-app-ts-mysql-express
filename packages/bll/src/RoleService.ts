/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { RoleDac } from '@tverstraten/hf-dal'
import { AbstractMutableService } from './AbstractMutableService'
import { Role } from '@tverstraten/hf-model'

/**
 * Services meant to operate on the persistent class Role.
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class RoleService extends AbstractMutableService<Role> {
	constructor() {
		super(new RoleDac())
	}
}
