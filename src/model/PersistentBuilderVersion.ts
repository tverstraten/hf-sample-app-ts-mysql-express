import { PersistentBuilderType } from './PersistentBuilderType'
import { Traceable } from './Traceable'

export class PersistentBuilderVersion implements Traceable {
	id = 0

	type: PersistentBuilderType = PersistentBuilderType.configuration

	persistentBuilderId?: number

	version = ''

	released = false

	tags = ''

	text = ''

	deprecated = false

	suggestedAlternateId?: number
}
