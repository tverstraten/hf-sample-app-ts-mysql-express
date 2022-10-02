import { SubscriptionType } from './SubscriptionType';
import { Traceable } from './Traceable';
export declare class Organization implements Traceable {
    id: number;
    name: string;
    primaryContactEmail: string;
    billingContactEmail: string;
    balance: number;
    currentSubscription: SubscriptionType;
}
//# sourceMappingURL=Organization.d.ts.map