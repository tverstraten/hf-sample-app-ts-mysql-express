import { PersistentBuilderVersion } from '../model/PersistentBuilderVersion'
import { PersistentBuilderVersionService } from '../bl/PersistentBuilderVersionService'
import { AbstractController } from './AbstractController.generated'

export class PersistentBuilderVersionApi extends AbstractController<PersistentBuilderVersion, PersistentBuilderVersionService> {
	static baseName = '/persistentBuilderVersion'

	constructor(app: any) {
		super(PersistentBuilderVersion, PersistentBuilderVersionApi.baseName, PersistentBuilderVersionService)
		this.bind(app)
	}
}
