import { RepositoryDefinition } from '../model/RepositoryDefinition'
import { RepositoryDefinitionService } from '../bl/RepositoryDefinitionService'
import { AbstractController } from './AbstractController.generated'

export class RepositoryDefinitionApi extends AbstractController<RepositoryDefinition, RepositoryDefinitionService> {
	static baseName = '/repositoryDefinition'

	constructor(app: any) {
		super(RepositoryDefinition, RepositoryDefinitionApi.baseName, RepositoryDefinitionService)
		this.bind(app)
	}
}
