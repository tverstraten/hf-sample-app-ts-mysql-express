import { AbstractTraceable } from "./AbstractTraceable";

export class PersistentBuilderDependency extends AbstractTraceable {
	builderId?: number = 0;

	dependentOnId?: number = 0;
}
