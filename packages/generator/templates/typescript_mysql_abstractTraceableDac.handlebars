/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { LogAsyncMethod } from '@tverstraten/log-annotations'
import { ResultSetHeader, RowDataPacket } from 'mysql2/promise'
import { Traceable } from '@tverstraten/hf-model'
import { AbstractDac } from './AbstractDac'

/**
 * Base point of inheritance for data access classes to model classes that can be created.
 * NOTE: This class is generated, do not make changes to it.
 */
export abstract class AbstractTraceableDac<T extends Traceable> extends AbstractDac<T> {
	getInsertSqlFragments(values: any): { columnNames: string; parameterMarkers: string; parameters: any[] } {
		let columnNames = ''
		let parameterMarkers = ''
		const parameters = [] as any[]
		Object.keys(values).forEach((columnName) => {
			const columnValue = values[columnName]
			if (columnValue !== undefined) {
				if (columnNames !== '') columnNames += ','
				columnNames += `\`${columnName}\``
				if (parameterMarkers !== '') parameterMarkers += ','
				parameterMarkers += '?'
			}
		})

		return { columnNames: columnNames, parameterMarkers: parameterMarkers, parameters: parameters }
	}

	@LogAsyncMethod()
	async insertPartial(values: any): Promise<boolean> {
		const fragments = this.getInsertSqlFragments(values)
		const sql = `INSERT INTO \`${this.getTableName()}\` (${fragments.columnNames}) values (${fragments.parameterMarkers})`
		const executeResult = (await this.executePrepared(sql, fragments.parameters)) as ResultSetHeader

		return executeResult.affectedRows === 1
	}

	async create(newItem: T): Promise<boolean> {
		const didSucceed = await this.insertPartial(newItem)
		return didSucceed
	}

	@LogAsyncMethod()
	async insertPartialAndReturn(values: any): Promise<T> {
		const fragments = this.getInsertSqlFragments(values)
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

	async createAndReturn(newItem: T): Promise<T> {
		const newRow = await this.insertPartialAndReturn(newItem)
		return newRow
	}
}
