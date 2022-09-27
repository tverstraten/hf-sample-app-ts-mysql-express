import { IsBoolean } from 'class-validator'
import { CodeBuilder } from '../model/CodeBuilder'
import { Historical } from './Historical'

/**
 * one version of a code builder
 */
export class CodeBuilderHistorical extends CodeBuilder implements Historical {
	/**
	 * is the object deleted
	 */
	@IsBoolean()
	isDeleted = false
}
