import { InvitationDa } from '../da/InvitationDa'
import { AbstractService } from './AbstractService.generated'
import { Invitation } from '../model/Invitation'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class InvitationService extends AbstractService<Invitation> {
	constructor() {
		super(new InvitationDa())
	}
}
