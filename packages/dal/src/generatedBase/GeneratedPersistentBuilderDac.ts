/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { PersistentBuilder } from '@tverstraten/hf-model'
import { AbstractMutableDac } from './AbstractMutableDac'

/**
 * NOTE: This class is generated, do not make changes to it.
 */
export class GeneratedPersistentBuilderDac extends AbstractMutableDac<PersistentBuilder> 
{
	constructor(userId: number) {
		super(PersistentBuilder, userId)
	}
	
	protected getTableName(): string {
		return 'PersistentBuilders'
	}

	// eslint-disable-next-line max-lines-per-function
	protected fromRow(row: any): PersistentBuilder {
		const result = new PersistentBuilder()
		const resultAny = result as any
		result.id = row['id'] // int
		result.createdById = row['createdById'] // int
		resultAny.createdBy = (): any => { throw new RangeError(`Property createdBy was not loaded from database`)} // User
		result.createdOn = new Date(row['createdOn']) // dateTime
		result.objectVersion = row['objectVersion'] // int
		result.lastUpdatedById = row['lastUpdatedById'] // int
		resultAny.lastUpdatedBy = (): any => { throw new RangeError(`Property lastUpdatedBy was not loaded from database`)} // User
		result.lastUpdatedOn = new Date(row['lastUpdatedOn']) // dateTime
		result.isDeleted = row['isDeleted'] == 1 // boolean
		result.type = row['type'] // PersistentBuilderType
		result.withinOrganizationId = row['withinOrganizationId'] // int
		resultAny.withinOrganization = (): any => { throw new RangeError(`Property withinOrganization was not loaded from database`)} // Organization
		result.name = row['name'] // string
		result.releaseLevel = row['releaseLevel'] // ReleaseLevel
		result.mostCurrentVersionId = row['mostCurrentVersionId'] // int

		return result
	}
}
