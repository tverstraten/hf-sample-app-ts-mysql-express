/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { SystemDescription } from '@tverstraten/hf-model'
import { SystemDescriptionService } from '@tverstraten/hf-bll'
import { AbstractMutableApi } from './AbstractMutableApi'

export class SystemDescriptionApi extends AbstractMutableApi<SystemDescription, SystemDescriptionService> {
	static baseName = '/systemDescription'

	constructor(app: any) {
		super(SystemDescription, SystemDescriptionApi.baseName, SystemDescriptionService)
		this.bind(app)
	}
}
