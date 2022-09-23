import { Traceable } from '../Traceable';
/**
 * a class that is held historically
 */
export interface Historical extends Traceable {
    /**
     * is the object deleted
     */
    isDeleted: boolean;
}
