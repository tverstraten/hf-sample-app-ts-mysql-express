/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Role } from '@tverstraten/hf-model'
import { RoleService } from '@tverstraten/hf-bll'
import { AbstractMutableApi } from './AbstractMutableApi'

export class RoleApi extends AbstractMutableApi<Role, RoleService> {
	static baseName = '/role'

	constructor(app: any) {
		super(Role, RoleApi.baseName, RoleService)
		this.bind(app)
	}
}
