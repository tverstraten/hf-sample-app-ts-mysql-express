import { Describable, Nameable } from '@hfadmin/runtime';
import { Traceable } from './Traceable';
export declare class SubscriptionTypeMetrics implements Nameable, Describable, Traceable {
    id: number;
    name: string;
    description: string;
    numberOfUsersAllowed?: number;
    numberOfBuildsAllowed?: number;
}
//# sourceMappingURL=SubscriptionTypeMetrics.d.ts.map