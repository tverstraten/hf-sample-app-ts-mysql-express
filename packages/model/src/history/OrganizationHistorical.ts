import { IsBoolean } from 'class-validator'
import { Organization } from '../model/Organization'
import { Historical } from './Historical'

/**
 * an real or sybolic entity that has one or more systems that they maintain/develop
 */
export class OrganizationHistorical extends Organization implements Historical {
	/**
	 * is the object deleted
	 */
	@IsBoolean()
	isDeleted = false
}
