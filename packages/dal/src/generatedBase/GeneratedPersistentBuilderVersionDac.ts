/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { PersistentBuilderVersion } from '@tverstraten/hf-model'
import { AbstractMutableDac } from './AbstractMutableDac'

/**
 * NOTE: This class is generated, do not make changes to it.
 */
export class GeneratedPersistentBuilderVersionDac extends AbstractMutableDac<PersistentBuilderVersion> 
{
	constructor(userId: number) {
		super(PersistentBuilderVersion, userId)
	}
	
	protected getTableName(): string {
		return 'PersistentBuilderVersions'
	}

	// eslint-disable-next-line max-lines-per-function
	protected fromRow(row: any): PersistentBuilderVersion {
		const result = new PersistentBuilderVersion()
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
		result.type = row['type'] // PersistentBuilderType
		result.persistentBuilderId = row['persistentBuilderId'] // int
		resultAny.persistentBuilder = (): any => { throw new RangeError(`Property persistentBuilder was not loaded from database`)} // PersistentBuilder
		result.version = row['version'] // string
		result.released = row['released'] == 1 // boolean
		result.tags = row['tags'] // string
		result.text = row['text'] // string
		result.deprecated = row['deprecated'] == 1 // boolean
		result.suggestedAlternateId = row['suggestedAlternateId'] // int
		resultAny.suggestedAlternate = (): any => { throw new RangeError(`Property suggestedAlternate was not loaded from database`)} // PersistentBuilderVersion

		return result
	}
}
