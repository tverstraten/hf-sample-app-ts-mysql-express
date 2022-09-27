import { Traceable } from '../model/Traceable'

/**
 * a class that is held historically
 */
export interface Historical extends Traceable {
	/**
	 * is the object deleted
	 */
	isDeleted: boolean
}
