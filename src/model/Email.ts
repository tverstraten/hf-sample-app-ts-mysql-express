import { AbstractMutable } from "./AbstractMutable";

export class Email extends AbstractMutable {
	withinOrganizationId?: number;

	from = "";

	sentTo = "";

	userSentToId?: number;

	ccd?: string;

	get ccdArray(): string[] {
		if (!this.ccd || this.ccd.trim() === "") return [];
		const results = this.ccd.split(",");
		for (let index = 0; index < results.length; index++) {
			results[index] = results[index].trim();
		}
		return results;
	}

	bccd?: string;

	get bccdArray(): string[] {
		if (!this.bccd || this.bccd.trim() === "") return [];
		const results = this.bccd.split(",");
		for (let index = 0; index < results.length; index++) {
			results[index] = results[index].trim();
		}
		return results;
	}

	firstRead?: Date;

	subject = "";

	body = "";
}
