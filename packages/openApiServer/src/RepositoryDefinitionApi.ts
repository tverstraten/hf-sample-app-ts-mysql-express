/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { RepositoryDefinition } from '@tverstraten/hf-model'
import { RepositoryDefinitionService } from '@tverstraten/hf-bll'
import { AbstractMutableApi } from './AbstractMutableApi'

export class RepositoryDefinitionApi extends AbstractMutableApi<RepositoryDefinition, RepositoryDefinitionService> {
	static baseName = '/repositoryDefinition'

	constructor(app: any) {
		super(RepositoryDefinition, RepositoryDefinitionApi.baseName, RepositoryDefinitionService)
		this.bind(app)
	}
}
