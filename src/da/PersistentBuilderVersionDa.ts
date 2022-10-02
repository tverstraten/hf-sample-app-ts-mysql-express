import { PersistentBuilderVersion } from '../model/PersistentBuilderVersion'
import { AbstractDa } from './AbstractDa.generated'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class PersistentBuilderVersionDa extends AbstractDa<PersistentBuilderVersion> {
	protected getTableName(): string {
		return 'PersistentBuilderVersion'
	}

	protected getIdColumnName(): string {
		return 'id'
	}

	protected getDefaultOrderByColumnName(): string {
		return 'id'
	}
}
