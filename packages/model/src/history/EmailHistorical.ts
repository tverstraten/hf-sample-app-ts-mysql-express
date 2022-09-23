import { IsBoolean } from 'class-validator'
import { Email } from '../Email'
import { Historical } from './Historical'

/**
 * an email that was sent
 */
export class EmailHistorical extends Email implements Historical {
	/**
	 * is the object deleted
	 */
	@IsBoolean()
	isDeleted = false
}
