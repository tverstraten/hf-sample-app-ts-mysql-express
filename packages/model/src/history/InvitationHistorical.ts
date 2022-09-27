import { IsBoolean } from 'class-validator'
import { Invitation } from '../model/Invitation'
import { Historical } from './Historical'

/**
 * a historical representation of an invitation
 */
export class InvitationHistorical extends Invitation implements Historical {
	/**
	 * is the object deleted
	 */
	@IsBoolean()
	isDeleted = false
}
