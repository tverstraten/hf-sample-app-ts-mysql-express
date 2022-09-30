import { Identifiable } from '@hfadmin/runtime'

/**
 * a class impements this if it tracks useage data
 */
export interface Traceable extends Identifiable {
	/**
	 * the id of the user that created this
	 */
	createdById?: number

	/**
	 * the point in time that this object was first created
	 */
	createdOn: Date
}
