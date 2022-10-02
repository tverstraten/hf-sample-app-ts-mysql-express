import { Traceable } from './Traceable'

export class PersistentBuilderDependency implements Traceable {
	id = 0

	builderId?: number = 0

	dependentOnId?: number = 0
}
