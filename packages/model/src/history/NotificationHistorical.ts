import { IsBoolean } from 'class-validator'
import { Notification } from '../model/Notification'
import { Historical } from './Historical'

/**
 * a single notice sent out to a user
 */
export class NotificationHistorical extends Notification implements Historical {
	/**
	 * is the object deleted
	 */
	@IsBoolean()
	isDeleted = false
}
