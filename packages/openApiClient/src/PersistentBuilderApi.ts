import { AbstractMutableApi } from './AbstractMutableApi'
import { PersistentBuilder } from '@tverstraten/hf-model'

/**
 * Api client meant to proxy to open api services that operate on the persistent class PersistentBuilder.
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class PersistentBuilderApi extends AbstractMutableApi<PersistentBuilder> {
	constructor() {
		super('PersistentBuilder')
	}
}
