import { SystemDescriptionDa } from '../da/SystemDescriptionDa'
import { AbstractService } from './AbstractService.generated'
import { SystemDescription } from '../model/SystemDescription'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class SystemDescriptionService extends AbstractService<SystemDescription> {
	constructor() {
		super(new SystemDescriptionDa())
	}
}
