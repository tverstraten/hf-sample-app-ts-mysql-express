import { AbstractMutable } from "./AbstractMutable";

export class RepositoryDefinition extends AbstractMutable {
	withinOrganizationId?: number;

	name = "";

	providerName = "";

	url = "";

	pat = "";
}
