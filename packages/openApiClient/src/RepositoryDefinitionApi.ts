import { AbstractMutableApi } from './AbstractMutableApi'
import { RepositoryDefinition } from '@tverstraten/hf-model'

/**
 * Api client meant to proxy to open api services that operate on the persistent class RepositoryDefinition.
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class RepositoryDefinitionApi extends AbstractMutableApi<RepositoryDefinition> {
	constructor() {
		super('RepositoryDefinition')
	}
}
