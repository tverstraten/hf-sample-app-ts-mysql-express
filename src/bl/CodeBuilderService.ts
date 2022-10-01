import { CodeBuilderDa } from '../da/CodeBuilderDa'
import { AbstractService } from './AbstractService.generated'
import { CodeBuilder } from '../model/CodeBuilder'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class CodeBuilderService extends AbstractService<CodeBuilder> {
	constructor() {
		super(new CodeBuilderDa())
	}
}
