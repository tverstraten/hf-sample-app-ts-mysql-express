import { AbstractMutable } from "./AbstractMutable";
import { SubscriptionType } from "./SubscriptionType";

export class Organization extends AbstractMutable {
	name = "";

	primaryContactEmail = "";

	billingContactEmail = "";

	balance = 0;

	currentSubscription: SubscriptionType = SubscriptionType.free;
}
