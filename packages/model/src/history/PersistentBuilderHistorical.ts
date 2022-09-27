import { IsBoolean } from 'class-validator'
import { PersistentBuilder } from '../model/PersistentBuilder'
import { Historical } from './Historical'

/**
 * one set of details of a version of a builder
 */
export class PersistentBuilderHistorical extends PersistentBuilder implements Historical {
	/**
	 * is the object deleted
	 */
	@IsBoolean()
	isDeleted = false
}
