import { User } from '../User';
import { Historical } from './Historical';
/**
 * one single persona that may use the system.
 */
export declare class UserHistorical extends User implements Historical {
    /**
     * is the object deleted
     */
    isDeleted: boolean;
}
