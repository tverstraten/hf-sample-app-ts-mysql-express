import { PersistentBuilderType } from './PersistentBuilderType'
import { ReleaseLevel } from './ReleaseLevel'
import { Traceable } from './Traceable'

export class PersistentBuilder implements Traceable {
	id = 0

	type: PersistentBuilderType = PersistentBuilderType.configuration

	withinOrganizationId?: number

	name = ''

	releaseLevel: ReleaseLevel = ReleaseLevel.community

	mostCurrentVersionId?: number
}
