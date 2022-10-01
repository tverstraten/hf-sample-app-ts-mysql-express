import { PersistentBuilderType } from "./PersistentBuilderType";
import { PersistentBuilderVersion } from "./PersistentBuilderVersion";

export class ConfigurationBuilder extends PersistentBuilderVersion {
	constructor() {
		super();
		this.type = PersistentBuilderType.configuration;
	}
}
