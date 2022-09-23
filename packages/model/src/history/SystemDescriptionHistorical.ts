import { IsBoolean } from 'class-validator'
import { SystemDescription } from '../SystemDescription'
import { Historical } from './Historical'

/**
 * a complete application system
 */
export class SystemDescriptionHistorical extends SystemDescription implements Historical {
	/**
	 * is the object deleted
	 */
	@IsBoolean()
	isDeleted = false
}
