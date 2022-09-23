import { PersistentBuilderVersion } from '../PersistentBuilderVersion';
import { Historical } from './Historical';
/**
 * one set of details of a version of a builder
 */
export declare class PersistentBuilderVersionHistorical extends PersistentBuilderVersion implements Historical {
    /**
     * is the object deleted
     */
    isDeleted: boolean;
}
