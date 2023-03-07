/* eslint-disable max-lines-per-function */
/* eslint-disable spellcheck/spell-checker */
/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { PersistentBuilderVersion } from '@tverstraten/hf-model'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TestHelper } from '@tverstraten/hf-utils'
import { DacTestHelper } from './DacTestHelper'
import { PersistentBuilderVersionDac } from '../PersistentBuilderVersionDac'
import { UserDac } from '../UserDac'
import { PersistentBuilderDac } from '../PersistentBuilderDac'
import { PersistentBuilderType } from '@tverstraten/hf-model'

describe('PersistentBuilderVersionDac', () => {
	it('create and read basic properties', async () => {
		const userDac = new UserDac(1)
		const currentUser = await userDac.findOneById(1)
		expect(currentUser).toBeDefined()
		const runDate = new Date()

		const objectDac = new PersistentBuilderVersionDac(1)
		const newObject = new PersistentBuilderVersion()
		newObject.createdById = -1
		newObject.lastUpdatedById = -1
		newObject.isDeleted = false
		newObject.type = TestHelper.randomEnum(PersistentBuilderType) // enumeration
		newObject.persistentBuilderId = await DacTestHelper.firstResultId(new PersistentBuilderDac(1)) // int
		newObject.version = TestHelper.randomString(128) // string
		newObject.released = Math.random() > .5 // boolean
		newObject.tags = TestHelper.randomString(1024) // string
		newObject.text = TestHelper.randomString(0) // string
		newObject.deprecated = Math.random() > .5 // boolean
		newObject.suggestedAlternateId = await DacTestHelper.firstResultId(new PersistentBuilderVersionDac(1)) // int

		const results = await objectDac.createAndReturn([newObject])
		expect(results.length).toBe(1)
		const resultObject = results[0]
		expect(resultObject.id).toBeGreaterThan(0)
		expect(resultObject.createdById).toBe(objectDac.userId)
		expect(Math.abs((resultObject.createdOn as Date).getTime() - runDate.getTime())).toBeLessThan(1000)
		expect(resultObject.objectVersion).toBe(1)
		expect(resultObject.lastUpdatedById).toBe(objectDac.userId)
		expect(Math.abs((resultObject.lastUpdatedOn as Date).getTime() - runDate.getTime())).toBeLessThan(1000)
		expect(resultObject.isDeleted).toBe(false)
		expect(resultObject.type).toBe(newObject.type) // Enumeration
		expect(resultObject.persistentBuilderId).toBe(newObject.persistentBuilderId) // int
		// persistentBuilder - the type (PersistentBuilder) is not matched
		expect(resultObject.version).toBe(newObject.version) // string
		expect(resultObject.released).toBe(newObject.released) // boolean
		expect(resultObject.tags).toBe(newObject.tags) // string
		expect(resultObject.text).toBe(newObject.text) // string
		expect(resultObject.deprecated).toBe(newObject.deprecated) // boolean
		expect(resultObject.suggestedAlternateId).toBe(newObject.suggestedAlternateId) // int
		// suggestedAlternate - the type (PersistentBuilderVersion) is not matched
	})
})




