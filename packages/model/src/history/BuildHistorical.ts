import { Build } from '../Build'
import { Historical } from './Historical'

/**
 * one invocation of a builder
 */
export class BuildHistorical extends Build implements Historical {
	/**
	 * is the object deleted
	 */
	isDeleted = false
}
