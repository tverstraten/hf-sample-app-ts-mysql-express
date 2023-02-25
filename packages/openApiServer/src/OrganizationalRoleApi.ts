/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { OrganizationalRole } from '@tverstraten/hf-model'
import { OrganizationalRoleService } from '@tverstraten/hf-bll'
import { AbstractMutableApi } from './AbstractMutableApi'

export class OrganizationalRoleApi extends AbstractMutableApi<OrganizationalRole, OrganizationalRoleService> {
	static baseName = '/organizationalRole'

	constructor(app: any) {
		super(OrganizationalRole, OrganizationalRoleApi.baseName, OrganizationalRoleService)
		this.bind(app)
	}
}
