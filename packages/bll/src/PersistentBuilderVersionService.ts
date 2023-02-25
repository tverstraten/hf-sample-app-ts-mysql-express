/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { PersistentBuilderVersionDac } from '@tverstraten/hf-dal'
import { AbstractMutableService } from './AbstractMutableService'
import { PersistentBuilderVersion } from '@tverstraten/hf-model'

/**
 * Services meant to operate on the persistent class PersistentBuilderVersion.
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class PersistentBuilderVersionService extends AbstractMutableService<PersistentBuilderVersion> {
	constructor() {
		super(new PersistentBuilderVersionDac())
	}
}
