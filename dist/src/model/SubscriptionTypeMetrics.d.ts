import { Describable, Nameable } from "@hfadmin/runtime";
export declare class SubscriptionTypeMetrics implements Nameable, Describable {
    name: string;
    description: string;
    numberOfUsersAllowed: number;
    numberOfBuildsAllowed: number;
    static free: SubscriptionTypeMetrics;
    static pro: SubscriptionTypeMetrics;
    static team: SubscriptionTypeMetrics;
    static enterprise: SubscriptionTypeMetrics;
    private constructor();
    static types: SubscriptionTypeMetrics[];
}
//# sourceMappingURL=SubscriptionTypeMetrics.d.ts.map