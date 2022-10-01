import { TemplateDa } from '../da/TemplateDa'
import { AbstractService } from './AbstractService.generated'
import { Template } from '../model/Template'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class TemplateService extends AbstractService<Template> {
	constructor() {
		super(new TemplateDa())
	}
}
