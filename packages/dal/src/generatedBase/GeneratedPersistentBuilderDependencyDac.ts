/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { PersistentBuilderDependency } from '@tverstraten/hf-model'
import { AbstractTraceableDac } from './AbstractTraceableDac'

/**
 * NOTE: This class is generated, do not make changes to it.
 */
export class GeneratedPersistentBuilderDependencyDac extends AbstractTraceableDac<PersistentBuilderDependency> 
{
	constructor(userId: number) {
		super(PersistentBuilderDependency, userId)
	}
	
	protected getTableName(): string {
		return 'PersistentBuilderDependencies'
	}

	// eslint-disable-next-line max-lines-per-function
	protected fromRow(row: any): PersistentBuilderDependency {
		const result = new PersistentBuilderDependency()
		const resultAny = result as any
		result.id = row['id'] // int
		result.createdById = row['createdById'] // int
		resultAny.createdBy = (): any => { throw new RangeError(`Property createdBy was not loaded from database`)} // User
		result.createdOn = new Date(row['createdOn']) // dateTime
		result.builderId = row['builderId'] // int
		resultAny.builder = (): any => { throw new RangeError(`Property builder was not loaded from database`)} // PersistentBuilderVersion
		result.dependentOnId = row['dependentOnId'] // int
		resultAny.dependentOn = (): any => { throw new RangeError(`Property dependentOn was not loaded from database`)} // PersistentBuilderVersion

		return result
	}
}
