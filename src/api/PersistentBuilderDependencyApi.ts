import { PersistentBuilderDependency } from '../model/PersistentBuilderDependency'
import { PersistentBuilderDependencyService } from '../bl/PersistentBuilderDependencyService'
import { AbstractController } from './AbstractController.generated'

export class PersistentBuilderDependencyApi extends AbstractController<PersistentBuilderDependency, PersistentBuilderDependencyService> {
	static baseName = '/persistentBuilderDependency'

	constructor(app: any) {
		super(PersistentBuilderDependency, PersistentBuilderDependencyApi.baseName, PersistentBuilderDependencyService)
		this.bind(app)
	}
}
