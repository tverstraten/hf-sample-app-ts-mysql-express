import { Organization } from '../Organization';
import { Historical } from './Historical';
/**
 * an real or sybolic entity that has one or more systems that they maintain/develop
 */
export declare class OrganizationHistorical extends Organization implements Historical {
    /**
     * is the object deleted
     */
    isDeleted: boolean;
}
