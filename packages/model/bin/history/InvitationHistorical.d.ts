import { Invitation } from '../Invitation';
import { Historical } from './Historical';
/**
 * a historical representation of an invitation
 */
export declare class InvitationHistorical extends Invitation implements Historical {
    /**
     * is the object deleted
     */
    isDeleted: boolean;
}
