import { AbstractMutable } from './AbstractMutable';
/**
 * one invocation of a builder
 */
export declare class Build extends AbstractMutable {
    /**
     * the organization it is for
     *
     * @see Organization
     */
    withinOrganizationId?: number;
    /**
     * the system the build is for
     *
     * @see SystemDescription
     */
    forSystemId?: number;
    /**
     * the point in time the build was started
     */
    startedOn: Date;
    /**
     * the point in time the build was completed
     */
    finishedOn?: Date;
    /**
     * the id of the user that built it
     *
     * @see User
     */
    builtById?: number;
    /**
     * the user that triggered the build
     *
     * @see User
     */
    triggeredById?: number;
}
