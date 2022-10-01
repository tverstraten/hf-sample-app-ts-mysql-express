import { RepositoryDefinitionDa } from '../da/RepositoryDefinitionDa'
import { AbstractService } from './AbstractService.generated'
import { RepositoryDefinition } from '../model/RepositoryDefinition'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class RepositoryDefinitionService extends AbstractService<RepositoryDefinition> {
	constructor() {
		super(new RepositoryDefinitionDa())
	}
}
