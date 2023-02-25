/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Organization } from '@tverstraten/hf-model'
import { OrganizationService } from '@tverstraten/hf-bll'
import { AbstractMutableApi } from './AbstractMutableApi'

export class OrganizationApi extends AbstractMutableApi<Organization, OrganizationService> {
	static baseName = '/organization'

	constructor(app: any) {
		super(Organization, OrganizationApi.baseName, OrganizationService)
		this.bind(app)
	}
}
