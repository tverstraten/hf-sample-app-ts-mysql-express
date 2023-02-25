/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { IdentityDac } from '@tverstraten/hf-dal'
import { AbstractMutableService } from './AbstractMutableService'
import { Identity } from '@tverstraten/hf-model'

/**
 * Services meant to operate on the persistent class Identity.
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class IdentityService extends AbstractMutableService<Identity> {
	constructor() {
		super(new IdentityDac())
	}
}
