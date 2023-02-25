/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { SystemDescriptionDac } from '@tverstraten/hf-dal'
import { AbstractMutableService } from './AbstractMutableService'
import { SystemDescription } from '@tverstraten/hf-model'

/**
 * Services meant to operate on the persistent class SystemDescription.
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class SystemDescriptionService extends AbstractMutableService<SystemDescription> {
	constructor() {
		super(new SystemDescriptionDac())
	}
}
