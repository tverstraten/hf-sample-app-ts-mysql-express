import { AbstractMutable } from '../model/AbstractMutable'
import { AbstractMutableService } from '../bl/AbstractMutableService'
import { AbstractController } from './AbstractController.generated'

export class AbstractMutableApi extends AbstractController<AbstractMutable, AbstractMutableService> {
	static baseName = '/abstractMutable'

	constructor(app: any) {
		super(AbstractMutable, AbstractMutableApi.baseName, AbstractMutableService)
		this.bind(app)
	}
}
