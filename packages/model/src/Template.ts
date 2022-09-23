import { PersistentBuilderType } from './PersistentBuilderType'
import { PersistentBuilderVersion } from './PersistentBuilderVersion'

/**
 * a body of text used in a template builder to produce text (code) as output
 */
export class Template extends PersistentBuilderVersion {
	/**
	 * create a new instance of the object
	 */
	constructor() {
		super()
		this.type = PersistentBuilderType.template
	}
}
