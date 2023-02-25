/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { OrganizationDac } from '@tverstraten/hf-dal'
import { AbstractMutableService } from './AbstractMutableService'
import { Organization } from '@tverstraten/hf-model'

/**
 * Services meant to operate on the persistent class Organization.
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class OrganizationService extends AbstractMutableService<Organization> {
	constructor() {
		super(new OrganizationDac())
	}
}
