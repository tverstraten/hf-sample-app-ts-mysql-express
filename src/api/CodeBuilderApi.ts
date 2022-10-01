import { CodeBuilder } from '../model/CodeBuilder'
import { CodeBuilderService } from '../bl/CodeBuilderService'
import { AbstractController } from './AbstractController.generated'

export class CodeBuilderApi extends AbstractController<CodeBuilder, CodeBuilderService> {
	static baseName = '/codeBuilder'

	constructor(app: any) {
		super(CodeBuilder, CodeBuilderApi.baseName, CodeBuilderService)
		this.bind(app)
	}
}
