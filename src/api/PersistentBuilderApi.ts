import { PersistentBuilder } from '../model/PersistentBuilder'
import { PersistentBuilderService } from '../bl/PersistentBuilderService'
import { AbstractController } from './AbstractController.generated'

export class PersistentBuilderApi extends AbstractController<PersistentBuilder, PersistentBuilderService> {
	static baseName = '/persistentBuilder'

	constructor(app: any) {
		super(PersistentBuilder, PersistentBuilderApi.baseName, PersistentBuilderService)
		this.bind(app)
	}
}
