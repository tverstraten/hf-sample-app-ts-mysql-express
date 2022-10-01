import { SystemDescription } from '../model/SystemDescription'
import { SystemDescriptionService } from '../bl/SystemDescriptionService'
import { AbstractController } from './AbstractController.generated'

export class SystemDescriptionApi extends AbstractController<SystemDescription, SystemDescriptionService> {
	static baseName = '/systemDescription'

	constructor(app: any) {
		super(SystemDescription, SystemDescriptionApi.baseName, SystemDescriptionService)
		this.bind(app)
	}
}
