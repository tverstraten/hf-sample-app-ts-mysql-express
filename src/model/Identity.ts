import { AbstractMutable } from "./AbstractMutable";
import { IdentityProvider } from "./IdentityProvider";

export class Identity extends AbstractMutable {
	providedBy = IdentityProvider.github;

	socialIdentifier = "";

	forId?: number;

	enabled = false;

	expiresOn?: Date;
}
