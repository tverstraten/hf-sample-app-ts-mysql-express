import { AbstractTraceable } from '../model/AbstractTraceable'
import { AbstractTraceableService } from '../bl/AbstractTraceableService'
import { AbstractController } from './AbstractController.generated'

export class AbstractTraceableApi extends AbstractController<AbstractTraceable, AbstractTraceableService> {
	static baseName = '/abstractTraceable'

	constructor(app: any) {
		super(AbstractTraceable, AbstractTraceableApi.baseName, AbstractTraceableService)
		this.bind(app)
	}
}
