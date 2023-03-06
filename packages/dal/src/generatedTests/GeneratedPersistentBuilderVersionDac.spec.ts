/* eslint-disable max-lines-per-function */
/* eslint-disable spellcheck/spell-checker */
/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { PersistentBuilderVersion } from '@tverstraten/hf-model'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TestHelper } from '@tverstraten/hf-utils'
import { PersistentBuilderVersionDac } from '../PersistentBuilderVersionDac'
import { UserDac } from '../UserDac'
import { PersistentBuilderType } from '@tverstraten/hf-model'

describe('PersistentBuilderVersionDac', () => {
	it('create and read basic properties', async () => {
		const userDac = new UserDac(1)
		const currentUser = await userDac.findOneById(1)
		expect(currentUser).toBeDefined()

		const objectDac = new PersistentBuilderVersionDac(1)

		const newObject = new PersistentBuilderVersion()
		newObject.createdById = currentUser.id
		newObject.lastUpdatedById = currentUser.id
		newObject.isDeleted = false
		newObject.type = TestHelper.randomEnum(PersistentBuilderType) 
		newObject.persistentBuilderId = Math.round(Math.random() * Number.MAX_SAFE_INTEGER) 
		newObject.version = TestHelper.randomString(128) 
		newObject.released = Math.random() > .5 
		newObject.tags = TestHelper.randomString(1024) 
		newObject.text = TestHelper.randomString(0) 
		newObject.deprecated = Math.random() > .5 
		newObject.suggestedAlternateId = Math.round(Math.random() * Number.MAX_SAFE_INTEGER) 

		const results = await objectDac.createAndReturn([newObject])
		expect(results.length).toBe(1)
		const resultObject = results[0]
		expect(resultObject.id).toBeGreaterThan(0)
		expect(resultObject.createdById).toBe(newObject.createdById)
		expect(resultObject.createdOn).toBe(newObject.createdOn)
		expect(resultObject.objectVersion).toBe(newObject.objectVersion)
		expect(resultObject.lastUpdatedById).toBe(newObject.lastUpdatedById)
		expect(resultObject.lastUpdatedOn).toBe(newObject.lastUpdatedOn)
		expect(resultObject.isDeleted).toBe(newObject.isDeleted)
		expect(resultObject.type).toBe(newObject.type)
		expect(resultObject.persistentBuilderId).toBe(newObject.persistentBuilderId)
		expect(resultObject.version).toBe(newObject.version)
		expect(resultObject.released).toBe(newObject.released)
		expect(resultObject.tags).toBe(newObject.tags)
		expect(resultObject.text).toBe(newObject.text)
		expect(resultObject.deprecated).toBe(newObject.deprecated)
		expect(resultObject.suggestedAlternateId).toBe(newObject.suggestedAlternateId)
	})
})




