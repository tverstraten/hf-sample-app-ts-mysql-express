import { Organization } from '../model/Organization'
import { AbstractDa } from './AbstractDa.generated'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class OrganizationDa extends AbstractDa<Organization> {
	protected getTableName(): string {
		return 'Organization'
	}

	protected getIdColumnName(): string {
		return 'id'
	}

	protected getDefaultOrderByColumnName(): string {
		return 'id'
	}
}
