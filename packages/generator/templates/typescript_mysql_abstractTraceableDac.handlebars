/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Traceable } from '@tverstraten/hf-model'
import { LogAsyncMethod } from '@tverstraten/log-annotations'
import { ResultSetHeader, RowDataPacket } from 'mysql2/promise'
import { AbstractDac } from './AbstractDac'

/**
 * Base point of inheritance for data access classes to model classes that can be created.
 * NOTE: This class is generated, do not make changes to it.
 */
export abstract class AbstractTraceableDac<T extends Traceable> extends AbstractDac<T> {
	isMutable?: boolean

	get mutable(): boolean {
		if (!this.isMutable) this.isMutable = Object.keys(new this.supportType()).find((key) => key === 'objectVersion') ? true : false
		return this.isMutable
	}

	getInsertSqlFragments(values: any): { columnNames: string; parameterMarkers: string; parameters: any[] } {
		let columnNames = ''
		let parameterMarkers = ''
		const parameters = [] as any[]
		Object.keys(values).forEach((columnName) => {
			if (!this.excludedProperties.includes(columnName)) {
				const columnValue = values[columnName]
				// must explicitly check for undefined to avoid falsy values such as "false"
				if (columnValue != undefined && (typeof columnValue != 'object' || columnValue instanceof Date)) {
					if (columnNames !== '') columnNames += ','
					columnNames += `\`${columnName}\``
					if (parameterMarkers !== '') parameterMarkers += ','
					parameterMarkers += '?'
					parameters.push(columnValue)
				}
			}
		})

		return { columnNames: columnNames, parameterMarkers: parameterMarkers, parameters: parameters }
	}

	setDefaults(value: any): any {
		const newValue = Object.assign({}, value)
		newValue.createdOn = new Date()
		newValue.createdById = this.userId

		if (this.mutable) {
			newValue.lastUpdatedById = this.userId
			newValue.lastUpdatedOn = new Date()
		}

		return newValue
	}

	@LogAsyncMethod()
	async insertOnePartial(originalValue: any): Promise<number> {
		const adjustedValue = this.setDefaults(originalValue)
		const fragments = this.getInsertSqlFragments(adjustedValue)
		const sql = `INSERT INTO \`${this.getTableName()}\` (${fragments.columnNames}) values (${fragments.parameterMarkers});SELECT LAST_INSERT_ID()`
		const executeResult = (await this.executePrepared(sql, fragments.parameters)) as ResultSetHeader

		const result1 = (executeResult as any)[1] as RowDataPacket[]
		let insertedRowId: number | undefined
		if (executeResult != null) {
			result1.forEach((row) => {
				insertedRowId = row['LAST_INSERT_ID()']
			})
		}

		if (insertedRowId) return insertedRowId
		throw new RangeError(`Row was not returned from the database`)
	}

	@LogAsyncMethod()
	async insertPartial(values: any[]): Promise<number[]> {
		const promises = values?.map((value) => this.insertOnePartial(value))
		const results = await Promise.allSettled(promises)
		const ids = results.map((result) => {
			if (result.status === 'fulfilled') return result.value
			else throw result.reason
		})

		return ids
	}

	async create(newItem: T[]): Promise<number[]> {
		return this.insertPartial(newItem)
	}

	@LogAsyncMethod()
	async insertOnePartialAndReturn(originalValue: any): Promise<T> {
		const adjustedValue = this.setDefaults(originalValue)
		const fragments = this.getInsertSqlFragments(adjustedValue)
		const sql = `INSERT INTO \`${this.getTableName()}\` (${fragments.columnNames}) values (${
			fragments.parameterMarkers
		});SELECT * FROM \`${this.getTableName()}\` WHERE \`${this.getIdColumnName()}\` = LAST_INSERT_ID()`
		const executeResult = await this.executePrepared(sql, fragments.parameters)

		// RowDataPacket[] | ResultSetHeader
		const result1 = (executeResult as any)[1] as RowDataPacket[]
		let insertedRow
		if (executeResult != null) {
			result1.forEach((row) => {
				insertedRow = this.fromRow(row)
			})
		}

		if (insertedRow) return insertedRow as T
		throw new RangeError(`Row was not returned from the database`)
	}

	@LogAsyncMethod()
	async insertPartialAndReturn(values: any[]): Promise<T[]> {
		const promises = values?.map((value) => this.insertOnePartialAndReturn(value))
		const results = await Promise.allSettled(promises)
		const resultObjects = results.map((result) => {
			if (result.status === 'fulfilled') return result.value
			else throw result.reason
		})

		return resultObjects
	}

	async createAndReturn(newItem: T[]): Promise<T[]> {
		return this.insertPartialAndReturn(newItem)
	}
}
