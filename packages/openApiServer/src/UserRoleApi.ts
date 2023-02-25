/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { UserRole } from '@tverstraten/hf-model'
import { UserRoleService } from '@tverstraten/hf-bll'
import { AbstractTraceableApi } from './AbstractTraceableApi'

export class UserRoleApi extends AbstractTraceableApi<UserRole, UserRoleService> {
	static baseName = '/userRole'

	constructor(app: any) {
		super(UserRole, UserRoleApi.baseName, UserRoleService)
		this.bind(app)
	}
}
