import { PersistentBuilderVersionDa } from '../da/PersistentBuilderVersionDa'
import { AbstractService } from './AbstractService.generated'
import { PersistentBuilderVersion } from '../model/PersistentBuilderVersion'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class PersistentBuilderVersionService extends AbstractService<PersistentBuilderVersion> {
	constructor() {
		super(new PersistentBuilderVersionDa())
	}
}
