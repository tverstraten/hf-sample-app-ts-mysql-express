/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { PersistentBuilder } from '@tverstraten/hf-model'
import { PersistentBuilderService } from '@tverstraten/hf-bll'
import { AbstractMutableApi } from './AbstractMutableApi'

export class PersistentBuilderApi extends AbstractMutableApi<PersistentBuilder, PersistentBuilderService> {
	static baseName = '/persistentBuilder'

	constructor(app: any) {
		super(PersistentBuilder, PersistentBuilderApi.baseName, PersistentBuilderService)
		this.bind(app)
	}
}
