import { IsBoolean } from 'class-validator'
import { User } from '../User'
import { Historical } from './Historical'

/**
 * one single persona that may use the system.
 */
export class UserHistorical extends User implements Historical {
	/**
	 * is the object deleted
	 */
	@IsBoolean()
	isDeleted = false
}
