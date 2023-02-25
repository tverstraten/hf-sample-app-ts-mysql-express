/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { InvitationDac } from '@tverstraten/hf-dal'
import { AbstractMutableService } from './AbstractMutableService'
import { Invitation } from '@tverstraten/hf-model'

/**
 * Services meant to operate on the persistent class Invitation.
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class InvitationService extends AbstractMutableService<Invitation> {
	constructor() {
		super(new InvitationDac())
	}
}
