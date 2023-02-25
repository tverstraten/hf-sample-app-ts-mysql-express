/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { RepositoryDefinitionDac } from '@tverstraten/hf-dal'
import { AbstractMutableService } from './AbstractMutableService'
import { RepositoryDefinition } from '@tverstraten/hf-model'

/**
 * Services meant to operate on the persistent class RepositoryDefinition.
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class RepositoryDefinitionService extends AbstractMutableService<RepositoryDefinition> {
	constructor() {
		super(new RepositoryDefinitionDac())
	}
}
