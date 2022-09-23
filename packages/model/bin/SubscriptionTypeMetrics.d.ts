import { Describable, Nameable } from '@harvest-forward/runtime';
/**
 * a plan for subscriptions
 */
export declare class SubscriptionTypeMetrics implements Nameable, Describable {
    /**
     * a human readable identifier for the type of subscription
     */
    name: string;
    /**
     * a word or phrase used to provide basic information on the subscription
     */
    description: string;
    /**
     * the maximum number of users that can be active in the organization
     */
    numberOfUsersAllowed: number;
    /**
     * the maximum number of builds that can be performed for each billing cycle
     */
    numberOfBuildsAllowed: number;
    /**
     * the incremental cost of a user beyond what is permitted under the plan
     */
    costPerUser: number;
    /**
     * the incremental cost per build beyond what is permitted under the plan
     */
    costPerBuild: number;
    static free: SubscriptionTypeMetrics;
    static pro: SubscriptionTypeMetrics;
    static team: SubscriptionTypeMetrics;
    static enterprise: SubscriptionTypeMetrics;
    /**
     * create a new instance of the object
     *
     * @param name - the word or phrase to use to identify the subscription type
     * @param description - the way in which to describe the subscription
     * @param numberOfUsersAllowed - the number of concurrent users that can be enabled in a given billing period of the plan. any more are charged
     * @param numberOfBuildsAllowed - the number the number of builds that cen be performed in a billing period without incurring additional cost
     * @param costPerUser - the incremental cost of an enabled user in a billing period
     * @param costPerBuild - the incremental cost of a build run during a billing period
     */
    private constructor();
    /**
     * the various types available
     */
    static types: SubscriptionTypeMetrics[];
}
