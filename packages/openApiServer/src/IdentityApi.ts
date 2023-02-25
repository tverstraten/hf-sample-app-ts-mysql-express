/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Identity } from '@tverstraten/hf-model'
import { IdentityService } from '@tverstraten/hf-bll'
import { AbstractMutableApi } from './AbstractMutableApi'

export class IdentityApi extends AbstractMutableApi<Identity, IdentityService> {
	static baseName = '/identity'

	constructor(app: any) {
		super(Identity, IdentityApi.baseName, IdentityService)
		this.bind(app)
	}
}
