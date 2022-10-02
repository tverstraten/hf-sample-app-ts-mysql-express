import { SystemDescription } from '../model/SystemDescription'
import { AbstractDa } from './AbstractDa.generated'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class SystemDescriptionDa extends AbstractDa<SystemDescription> {
	protected getTableName(): string {
		return 'SystemDescription'
	}

	protected getIdColumnName(): string {
		return 'id'
	}

	protected getDefaultOrderByColumnName(): string {
		return 'id'
	}
}
