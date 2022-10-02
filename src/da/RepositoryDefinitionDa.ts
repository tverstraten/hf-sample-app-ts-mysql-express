import { RepositoryDefinition } from '../model/RepositoryDefinition'
import { AbstractDa } from './AbstractDa.generated'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class RepositoryDefinitionDa extends AbstractDa<RepositoryDefinition> {
	protected getTableName(): string {
		return 'RepositoryDefinition'
	}

	protected getIdColumnName(): string {
		return 'id'
	}

	protected getDefaultOrderByColumnName(): string {
		return 'id'
	}
}
