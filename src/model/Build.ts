import { AbstractMutable } from './AbstractMutable'

export class Build extends AbstractMutable {
	withinOrganizationId?: number

	forSystemId?: number

	startedOn: Date = new Date()

	finishedOn?: Date

	builtById?: number

	triggeredById?: number
}
