import { Email } from '../Email';
import { Historical } from './Historical';
/**
 * an email that was sent
 */
export declare class EmailHistorical extends Email implements Historical {
    /**
     * is the object deleted
     */
    isDeleted: boolean;
}
