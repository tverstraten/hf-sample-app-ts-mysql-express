import { Invitation } from '../model/Invitation'
import { AbstractDa } from './AbstractDa.generated'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class InvitationDa extends AbstractDa<Invitation> {
	protected getTableName(): string {
		return 'Invitation'
	}

	protected getIdColumnName(): string {
		return 'id'
	}

	protected getDefaultOrderByColumnName(): string {
		return 'id'
	}
}
