import { OrganizationalRole } from '../model/OrganizationalRole'
import { OrganizationalRoleService } from '../bl/OrganizationalRoleService'
import { AbstractController } from './AbstractController.generated'

export class OrganizationalRoleApi extends AbstractController<OrganizationalRole, OrganizationalRoleService> {
	static baseName = '/organizationalRole'

	constructor(app: any) {
		super(OrganizationalRole, OrganizationalRoleApi.baseName, OrganizationalRoleService)
		this.bind(app)
	}
}
