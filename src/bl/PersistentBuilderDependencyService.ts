import { PersistentBuilderDependencyDa } from '../da/PersistentBuilderDependencyDa'
import { AbstractService } from './AbstractService.generated'
import { PersistentBuilderDependency } from '../model/PersistentBuilderDependency'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class PersistentBuilderDependencyService extends AbstractService<PersistentBuilderDependency> {
	constructor() {
		super(new PersistentBuilderDependencyDa())
	}
}
