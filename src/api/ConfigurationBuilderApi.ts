import { ConfigurationBuilder } from '../model/ConfigurationBuilder'
import { ConfigurationBuilderService } from '../bl/ConfigurationBuilderService'
import { AbstractController } from './AbstractController.generated'

export class ConfigurationBuilderApi extends AbstractController<ConfigurationBuilder, ConfigurationBuilderService> {
	static baseName = '/configurationBuilder'

	constructor(app: any) {
		super(ConfigurationBuilder, ConfigurationBuilderApi.baseName, ConfigurationBuilderService)
		this.bind(app)
	}
}
