import { AbstractTraceable } from './AbstractTraceable'

export abstract class AbstractMutable extends AbstractTraceable {
	objectVersion = 1

	lastUpdatedById?: number = 0

	lastUpdatedOn: Date = new Date()
}
