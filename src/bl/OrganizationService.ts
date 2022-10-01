import { OrganizationDa } from '../da/OrganizationDa'
import { AbstractService } from './AbstractService.generated'
import { Organization } from '../model/Organization'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class OrganizationService extends AbstractService<Organization> {
	constructor() {
		super(new OrganizationDa())
	}
}
