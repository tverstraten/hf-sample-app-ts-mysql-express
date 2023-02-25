/**
 * A class implements this if it tracks usage data.
 */
export interface Traceable {
	/**
	 * The identifier.
	 */
	id: number

	/**
	 * The id of the user that created this.
	 */
	createdById?: number

	/**
	 * The point in time that this object was first created in persistent storage.
	 */
	createdOn?: Date
}
