import { PersistentBuilder } from '../PersistentBuilder';
import { Historical } from './Historical';
/**
 * one set of details of a version of a builder
 */
export declare class PersistentBuilderHistorical extends PersistentBuilder implements Historical {
    /**
     * is the object deleted
     */
    isDeleted: boolean;
}
