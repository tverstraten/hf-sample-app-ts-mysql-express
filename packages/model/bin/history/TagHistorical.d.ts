import { Tag } from '../Tag';
import { Historical } from './Historical';
/**
 * one single persona that may use the system.
 */
export declare class Tagistorical extends Tag implements Historical {
    /**
     * is the object deleted
     */
    isDeleted: boolean;
}
