/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { RepositoryDefinition } from '@tverstraten/hf-model'
import { AbstractMutableDac } from './AbstractMutableDac'

/**
 * NOTE: This class is generated, do not make changes to it.
 */
export class GeneratedRepositoryDefinitionDac extends AbstractMutableDac<RepositoryDefinition> 
{
	constructor(userId: number) {
		super(RepositoryDefinition, userId)
	}
	
	protected getTableName(): string {
		return 'RepositoryDefinitions'
	}

	// eslint-disable-next-line max-lines-per-function
	protected fromRow(row: any): RepositoryDefinition {
		const result = new RepositoryDefinition()
		const resultAny = result as any
		result.id = row['id'] // int
		result.createdById = row['createdById'] // int
		resultAny.createdBy = (): any => { throw new RangeError(`Property createdBy was not loaded from database`)} // User
		result.createdOn = new Date(row['createdOn']) // date
		result.objectVersion = row['objectVersion'] // int
		result.lastUpdatedById = row['lastUpdatedById'] // int
		resultAny.lastUpdatedBy = (): any => { throw new RangeError(`Property lastUpdatedBy was not loaded from database`)} // User
		result.lastUpdatedOn = new Date(row['lastUpdatedOn']) // date
		result.isDeleted = row['isDeleted'] == 1 // boolean
		result.withinOrganizationId = row['withinOrganizationId'] // int
		resultAny.withinOrganization = (): any => { throw new RangeError(`Property withinOrganization was not loaded from database`)} // Organization
		result.name = row['name'] // string
		result.providerName = row['providerName'] // string
		result.url = row['url'] // string
		result.pat = row['pat'] // string

		return result
	}
}
