import { IsBoolean } from 'class-validator'
import { Template } from '../model/Template'
import { Historical } from './Historical'

/**
 * one version of a template
 */
export class TemplateHistorical extends Template implements Historical {
	/**
	 * is the object deleted
	 */
	@IsBoolean()
	isDeleted = false
}
