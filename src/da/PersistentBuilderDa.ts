import { PersistentBuilder } from '../model/PersistentBuilder'
import { AbstractDa } from './AbstractDa.generated'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class PersistentBuilderDa extends AbstractDa<PersistentBuilder> {
	protected getTableName(): string {
		return 'PersistentBuilder'
	}

	protected getIdColumnName(): string {
		return 'id'
	}

	protected getDefaultOrderByColumnName(): string {
		return 'id'
	}
}
