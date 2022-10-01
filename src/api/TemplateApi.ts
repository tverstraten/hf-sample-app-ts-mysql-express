import { Template } from '../model/Template'
import { TemplateService } from '../bl/TemplateService'
import { AbstractController } from './AbstractController.generated'

export class TemplateApi extends AbstractController<Template, TemplateService> {
	static baseName = '/template'

	constructor(app: any) {
		super(Template, TemplateApi.baseName, TemplateService)
		this.bind(app)
	}
}
