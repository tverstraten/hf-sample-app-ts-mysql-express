import { AbstractMutable } from './AbstractMutable';
import { SubscriptionType } from './SubscriptionType';
/**
 * a real or sybolic entity that has one or more systems that they maintain/develop
 */
export declare class Organization extends AbstractMutable {
    /**
     * the human readable identifier for the organization
     */
    name: string;
    /**
     * the email address to use as a primary point of contact for the organization
     */
    primaryContactEmail: string;
    /**
     * the email address to use as a primary contact for billing
     */
    billingContactEmail: string;
    /**
     * the current amount that the organization owes for usage
     */
    balance: number;
    /**
     * the plan the account currently makes use of for making use of the system
     */
    currentSubscription: SubscriptionType;
}
