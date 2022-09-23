import { IsBoolean } from 'class-validator'
import { Tag } from '../Tag'
import { Historical } from './Historical'

/**
 * one single persona that may use the system.
 */
export class Tagistorical extends Tag implements Historical {
	/**
	 * is the object deleted
	 */
	@IsBoolean()
	isDeleted = false
}
