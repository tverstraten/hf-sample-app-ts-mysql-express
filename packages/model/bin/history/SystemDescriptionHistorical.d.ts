import { SystemDescription } from '../SystemDescription';
import { Historical } from './Historical';
/**
 * a complete application system
 */
export declare class SystemDescriptionHistorical extends SystemDescription implements Historical {
    /**
     * is the object deleted
     */
    isDeleted: boolean;
}
