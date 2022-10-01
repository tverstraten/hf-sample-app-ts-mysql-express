import { AbstractMutable } from "./AbstractMutable";
import { PersistentBuilderType } from "./PersistentBuilderType";
import { ReleaseLevel } from "./ReleaseLevel";

export class PersistentBuilder extends AbstractMutable {
	type: PersistentBuilderType = PersistentBuilderType.configuration;

	withinOrganizationId?: number;

	name = "";

	releaseLevel: ReleaseLevel = ReleaseLevel.community;

	mostCurrentVersionId?: number;
}
