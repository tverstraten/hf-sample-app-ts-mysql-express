import { IsBoolean } from 'class-validator'
import { ConfigurationBuilder } from '../ConfigurationBuilder'
import { Historical } from './Historical'

/**
 * one version of a configuration
 */
export class ConfigurationBuilderHistorical extends ConfigurationBuilder implements Historical {
	/**
	 * is the object deleted
	 */
	@IsBoolean()
	isDeleted = false
}
