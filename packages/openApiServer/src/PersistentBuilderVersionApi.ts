/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { PersistentBuilderVersion } from '@tverstraten/hf-model'
import { PersistentBuilderVersionService } from '@tverstraten/hf-bll'
import { AbstractMutableApi } from './AbstractMutableApi'

export class PersistentBuilderVersionApi extends AbstractMutableApi<PersistentBuilderVersion, PersistentBuilderVersionService> {
	static baseName = '/persistentBuilderVersion'

	constructor(app: any) {
		super(PersistentBuilderVersion, PersistentBuilderVersionApi.baseName, PersistentBuilderVersionService)
		this.bind(app)
	}
}
