import { AbstractMutable } from "./AbstractMutable";

export class Notification extends AbstractMutable {
	userId?: number;

	text = "";

	readOn?: Date;
}
