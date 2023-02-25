/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { PersistentBuilderDac } from '@tverstraten/hf-dal'
import { AbstractMutableService } from './AbstractMutableService'
import { PersistentBuilder } from '@tverstraten/hf-model'

/**
 * Services meant to operate on the persistent class PersistentBuilder.
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class PersistentBuilderService extends AbstractMutableService<PersistentBuilder> {
	constructor() {
		super(new PersistentBuilderDac())
	}
}
