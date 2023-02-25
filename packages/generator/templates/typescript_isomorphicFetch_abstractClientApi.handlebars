/**
 * NOTE: This file is generated, do not make changes to it.
 */
import fetch from 'isomorphic-fetch'

/**
 * Client proxy for the REST api calls in.
 * NOTE: This class is generated, do not make changes to it.
 */
export abstract class AbstractApi<T> {
	/**
	 * The environment variables.
	 */
	static environment: any

	/**
	 * The base name for the api calls.
	 */
	baseName = ''

	/**
	 *
	 * @param baseName - Create a new instance of the api.
	 *
	 * @param baseName - The base name of the url to use in the api calls'.
	 */
	constructor(baseName: string) {
		this.baseName = baseName
	}

	/**
	 * Wait for a specified number of milliseconds.
	 *
	 * @param milliseconds - The number of milliseconds to wait.
	 * @returns A promise to perform the wait.
	 */
	async wait(milliseconds: number): Promise<any> {
		return new Promise((resolve) => setTimeout(resolve, milliseconds))
	}

	/**
	 * Encode an object as a parameter. If the object is an array, encode it as a csv.
	 *
	 * @param parameter - The object the encode as a parameter string.
	 * @returns A uri encoded string representing the object as a parameter.
	 */
	encodeParameter(parameter: any): string {
		if (parameter == null) return ''
		if (!Array.isArray(parameter)) return encodeURIComponent(parameter)
		let result = ''
		parameter.forEach((piece) => {
			if (result != '') result += ','
			result += piece
		})

		return result
	}

	/**
	 * The generic method for dispatching REST requests. All derivations should use this.
	 *
	 * @param method - The HTTP method to perform the operation with.
	 * @param urlString - The url to call including parameters.
	 * @param body - A json object to send as the body of the request.
	 * @param as_blob - If true, the response is decoded as a blob rather than json.
	 * @returns The results of the request encoded as json or a blob.
	 */
	// eslint-disable-next-line max-params, require-jsdoc, max-lines-per-function
	async dispatch<M>(method: string, urlString: string, body: any, asBlob = false): Promise<M> {
		let authorization

		//console.log(`d
		const full_url = new URL(`${AbstractApi.environment.apiBaseUrl}${urlString}`)
		const full_url_string = full_url.toString()

		const response = await fetch(full_url_string, {
			method: method,
			headers: new Headers({
				// eslint-disable-next-line @typescript-eslint/naming-convention
				'Content-type': 'application/json',
				// eslint-disable-next-line @typescript-eslint/naming-convention
				Authorization: authorization,
			} as unknown as HeadersInit),
			body: JSON.stringify(body),
		})

		if (response.status >= 200 && response.status < 300) {
			if (asBlob) return response.blob() as M
			const response_body = await response.text()
			let values
			if (response_body == null || response_body == '') values = null
			else values = JSON.parse(response_body)

			return values
		}

		throw response
	}

	/**
	 * Find a single instance of T with the given id. If none are found, an empty result is returned.
	 * This is for the path /baseName/:id.
	 *
	 * @param id - The id of the instance to retrieve.
	 * @param expand - A comma separated list of property path's that specify which additional objects will be filled in the object (deep load). If nothing is specified only the object itself will be loaded, not of its relations will be included.
	 * @returns Get a single instance of T with the specified id.
	 */
	async findOneById(id: number, expand?: string[]): Promise<T> {
		const variable_path = `/${this.baseName}/${id}`
		const query_parameters = `?expand=${this.encodeParameter(expand)}`
		return this.dispatch<T>('get', `${variable_path}${query_parameters}`, undefined)
	}

	/**
	 * Find all instances of T that match the given filter. If none are found, an empty result is returned.
	 * This is for the path /baseName.
	 *
	 * @param filter - The odata like filter expression use to match which instances are returned.
	 * @param expand - A comma separated list of property path's that specify which additional objects will be filled in the object (deep load). If nothing is specified only the object itself will be loaded, not of its relations will be included.
	 * @param orderBy - A comma separated list of order by directives used to determine the order in which the objects are returned. Each directive is a single property name optionally followed by desc if descending is required. For example [first_name, last_name desc].
	 * @param page - If the results are paged (pageSize is specified), this is the page number to return. The first page is 1.
	 * @param pageSize - If specified, the results are paged and this is the size of each of those pages.
	 * @returns All instances of T that match the filter.
	 */
	// eslint-disable-next-line max-params, require-jsdoc
	async findAllByFilter(filter?: string, expand?: string, orderBy?: string, page?: number, pageSize?: number): Promise<T[]> {
		const variable_path = `/${this.baseName}`
		const query_parameters = `?expand=${this.encodeParameter(expand)}&filter=${this.encodeParameter(filter)}&orderBy=${this.encodeParameter(
			orderBy
		)}&page=${this.encodeParameter(page)}&pageSize=${this.encodeParameter(pageSize)}`
		return this.dispatch<T[]>('get', `${variable_path}${query_parameters}`, undefined)
	}
}
