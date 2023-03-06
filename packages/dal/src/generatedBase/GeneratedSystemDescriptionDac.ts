/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { SystemDescription } from '@tverstraten/hf-model'
import { AbstractMutableDac } from './AbstractMutableDac'

/**
 * NOTE: This class is generated, do not make changes to it.
 */
export class GeneratedSystemDescriptionDac extends AbstractMutableDac<SystemDescription> 
{
	constructor(userId: number) {
		super(SystemDescription, userId)
	}
	
	protected getTableName(): string {
		return 'SystemDescriptions'
	}

	// eslint-disable-next-line max-lines-per-function
	protected fromRow(row: any): SystemDescription {
		const result = new SystemDescription()
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
		result.withinOrganizationId = row['withinOrganizationId'] // int
		resultAny.withinOrganization = (): any => { throw new RangeError(`Property withinOrganization was not loaded from database`)} // Organization
		result.name = row['name'] // string
		result.description = row['description'] // string
		result.configurationId = row['configurationId'] // int
		resultAny.configuration = (): any => { throw new RangeError(`Property configuration was not loaded from database`)} // PersistentBuilder
		result.systemAsJson = row['systemAsJson'] // string

		return result
	}
}
