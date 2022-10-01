import { PersistentBuilderType } from './PersistentBuilderType'
import { PersistentBuilderVersion } from './PersistentBuilderVersion'

export class CodeBuilder extends PersistentBuilderVersion {
	constructor() {
		super()
		this.type = PersistentBuilderType.code
	}
}
