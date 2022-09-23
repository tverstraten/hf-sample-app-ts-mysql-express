import { Notification } from '../Notification';
import { Historical } from './Historical';
/**
 * a single notice sent out to a user
 */
export declare class NotificationHistorical extends Notification implements Historical {
    /**
     * is the object deleted
     */
    isDeleted: boolean;
}
