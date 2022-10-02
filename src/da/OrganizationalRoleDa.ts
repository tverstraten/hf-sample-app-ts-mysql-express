import { OrganizationalRole } from '../model/OrganizationalRole'
import { AbstractDa } from './AbstractDa.generated'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class OrganizationalRoleDa extends AbstractDa<OrganizationalRole> {
	protected getTableName(): string {
		return 'OrganizationalRole'
	}

	protected getIdColumnName(): string {
		return 'id'
	}

	protected getDefaultOrderByColumnName(): string {
		return 'id'
	}
}
