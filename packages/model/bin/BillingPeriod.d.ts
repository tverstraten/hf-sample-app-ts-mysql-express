import { AbstractMutable } from './AbstractMutable';
/**
 * a singular interval of time used to bill accounts for
 */
export declare class BillingPeriod extends AbstractMutable {
    /**
     * the human readable identifier for the period
     */
    name: string;
    /**
     * the point in time it started
     */
    start?: Date;
    /**
     * the point in time it ceased
     */
    end?: Date;
}
