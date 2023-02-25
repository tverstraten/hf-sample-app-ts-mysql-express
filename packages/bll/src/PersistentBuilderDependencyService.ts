/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { PersistentBuilderDependencyDac } from '@tverstraten/hf-dal'
import { AbstractTraceableService } from './AbstractTraceableService'
import { PersistentBuilderDependency } from '@tverstraten/hf-model'

/**
 * Services meant to operate on the persistent class PersistentBuilderDependency.
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class PersistentBuilderDependencyService extends AbstractTraceableService<PersistentBuilderDependency> {
	constructor() {
		super(new PersistentBuilderDependencyDac())
	}
}
