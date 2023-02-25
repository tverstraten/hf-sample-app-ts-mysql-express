/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { AbstractTraceableApi } from './AbstractTraceableApi'

/**
 * Client proxy for the REST api calls in.
 * NOTE: This class is generated, do not make changes to it.
 */
export abstract class AbstractMutableApi<T> extends AbstractTraceableApi<T> {
	/**
	 * Update the values for the instances of T that are provided.
	 * This is for the path /T.
	 *
	 * @param body -.
	 * @returns The ids of the instances of T that have been updated.
	 */
	async update(body: T[]): Promise<number[]> {
		const variable_path = `/${this.baseName}`
		return this.dispatch('put', `${variable_path}`, body)
	}

	/**
	 * Mark the single instance of T with the specified id as being deleted.
	 * This is for the path /T.
	 *
	 * @param id - The id of the instance to remove.
	 * @returns The instance of T has been removed.
	 */
	async softDelete(id: number): Promise<void> {
		const variable_path = `/${this.baseName}/${id}`
		return this.dispatch('delete', `${variable_path}`, undefined)
	}

	/**
	 * Remove the single instance of T with the specified id.
	 * This is for the path /T.
	 *
	 * @param id - The id of the instance to remove.
	 * @returns The instance of T has been removed.
	 */
	async delete(id: number): Promise<void> {
		const variable_path = `/${this.baseName}/${id}/permanent`
		return this.dispatch('delete', `${variable_path}`, undefined)
	}
}
