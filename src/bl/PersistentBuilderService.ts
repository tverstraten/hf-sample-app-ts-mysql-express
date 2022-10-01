import { PersistentBuilderDa } from '../da/PersistentBuilderDa'
import { AbstractService } from './AbstractService.generated'
import { PersistentBuilder } from '../model/PersistentBuilder'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class PersistentBuilderService extends AbstractService<PersistentBuilder> {
	constructor() {
		super(new PersistentBuilderDa())
	}
}
