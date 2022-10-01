import { PersistentBuilderType } from './PersistentBuilderType'
import { PersistentBuilderVersion } from './PersistentBuilderVersion'

export class Template extends PersistentBuilderVersion {
	constructor() {
		super()
		this.type = PersistentBuilderType.template
	}
}
