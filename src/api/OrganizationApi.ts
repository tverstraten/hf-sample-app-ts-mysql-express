import { Organization } from '../model/Organization'
import { OrganizationService } from '../bl/OrganizationService'
import { AbstractController } from './AbstractController.generated'

export class OrganizationApi extends AbstractController<Organization, OrganizationService> {
	static baseName = '/organization'

	constructor(app: any) {
		super(Organization, OrganizationApi.baseName, OrganizationService)
		this.bind(app)
	}
}
