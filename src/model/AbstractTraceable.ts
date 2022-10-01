import { Traceable } from './Traceable'

export abstract class AbstractTraceable implements Traceable {
	id = 0

	createdById?: number = 0

	createdOn: Date = new Date()
}
