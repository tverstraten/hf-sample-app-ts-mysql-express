import { Traceable } from './Traceable'

export class Build implements Traceable {
	id = 0

	withinOrganizationId?: number

	forSystemId?: number

	startedOn: Date = new Date()

	finishedOn?: Date

	builtById?: number

	triggeredById?: number
}
