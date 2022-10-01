import { IdentityDa } from '../da/IdentityDa'
import { AbstractService } from './AbstractService.generated'
import { Identity } from '../model/Identity'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class IdentityService extends AbstractService<Identity> {
	constructor() {
		super(new IdentityDa())
	}
}
