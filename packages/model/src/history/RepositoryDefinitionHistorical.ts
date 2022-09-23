import { IsBoolean } from 'class-validator'
import { RepositoryDefinition } from '../RepositoryDefinition'
import { Historical } from './Historical'

/**
 * a historical view of a repository definition
 */
export class RepositoryDefinitionHistorical extends RepositoryDefinition implements Historical {
	/**
	 * is the object deleted
	 */
	@IsBoolean()
	isDeleted = false
}
