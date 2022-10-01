import { ConfigurationBuilderDa } from '../da/ConfigurationBuilderDa'
import { AbstractService } from './AbstractService.generated'
import { ConfigurationBuilder } from '../model/ConfigurationBuilder'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class ConfigurationBuilderService extends AbstractService<ConfigurationBuilder> {
	constructor() {
		super(new ConfigurationBuilderDa())
	}
}
