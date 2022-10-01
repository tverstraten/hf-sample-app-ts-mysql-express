import { AbstractMutable } from './AbstractMutable'
import { PersistentBuilderType } from './PersistentBuilderType'

export abstract class PersistentBuilderVersion extends AbstractMutable {
	type: PersistentBuilderType = PersistentBuilderType.configuration

	persistentBuilderId?: number

	version = ''

	released = false

	tags = ''

	text = ''

	deprecated = false

	suggestedAlternateId?: number
}
