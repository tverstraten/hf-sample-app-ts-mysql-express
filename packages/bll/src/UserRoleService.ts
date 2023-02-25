/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { UserRoleDac } from '@tverstraten/hf-dal'
import { AbstractTraceableService } from './AbstractTraceableService'
import { UserRole } from '@tverstraten/hf-model'

/**
 * Services meant to operate on the persistent class UserRole.
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class UserRoleService extends AbstractTraceableService<UserRole> {
	constructor() {
		super(new UserRoleDac())
	}
}
