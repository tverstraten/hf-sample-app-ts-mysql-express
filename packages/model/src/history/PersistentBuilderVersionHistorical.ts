import { IsBoolean } from 'class-validator'
import { PersistentBuilderVersion } from '../model/PersistentBuilderVersion'
import { Historical } from './Historical'

/**
 * one set of details of a version of a builder
 */
export class PersistentBuilderVersionHistorical extends PersistentBuilderVersion implements Historical {
	/**
	 * is the object deleted
	 */
	@IsBoolean()
	isDeleted = false
}
