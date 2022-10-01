import { Identity } from '../model/Identity'
import { IdentityService } from '../bl/IdentityService'
import { AbstractController } from './AbstractController.generated'

export class IdentityApi extends AbstractController<Identity, IdentityService> {
	static baseName = '/identity'

	constructor(app: any) {
		super(Identity, IdentityApi.baseName, IdentityService)
		this.bind(app)
	}
}
