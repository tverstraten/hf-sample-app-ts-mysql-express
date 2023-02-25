import { AbstractTraceableApi } from './AbstractTraceableApi'
import { PersistentBuilderDependency } from '@tverstraten/hf-model'

/**
 * Api client meant to proxy to open api services that operate on the persistent class PersistentBuilderDependency.
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class PersistentBuilderDependencyApi extends AbstractTraceableApi<PersistentBuilderDependency> {
	constructor() {
		super('PersistentBuilderDependency')
	}
}
