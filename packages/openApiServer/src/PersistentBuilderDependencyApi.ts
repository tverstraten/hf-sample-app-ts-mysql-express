/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { PersistentBuilderDependency } from '@tverstraten/hf-model'
import { PersistentBuilderDependencyService } from '@tverstraten/hf-bll'
import { AbstractTraceableApi } from './AbstractTraceableApi'

export class PersistentBuilderDependencyApi extends AbstractTraceableApi<PersistentBuilderDependency, PersistentBuilderDependencyService> {
	static baseName = '/persistentBuilderDependency'

	constructor(app: any) {
		super(PersistentBuilderDependency, PersistentBuilderDependencyApi.baseName, PersistentBuilderDependencyService)
		this.bind(app)
	}
}
