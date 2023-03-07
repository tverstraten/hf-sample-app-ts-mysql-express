/* eslint-disable max-lines-per-function */
/* eslint-disable spellcheck/spell-checker */
/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { PersistentBuilderVersion } from '@tverstraten/hf-model'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TestHelper } from '@tverstraten/hf-utils'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DacTestHelper } from './DacTestHelper'
import { PersistentBuilderVersionDac } from '../PersistentBuilderVersionDac'
import { UserDac } from '../UserDac'
import { PersistentBuilderDac } from '../PersistentBuilderDac'
import { PersistentBuilderType } from '@tverstraten/hf-model'
import { User } from '@tverstraten/hf-model' // PersistentBuilderVersionDac

describe('PersistentBuilderVersionDac', () => {
	it('create and read basic properties', async () => {
		const currentUser = await DacTestHelper.randomResult(new UserDac(1)) as User
		expect(currentUser).toBeDefined()
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const userDac = new UserDac(currentUser.id)		
		const runDate = new Date()

		const objectDac = new PersistentBuilderVersionDac(currentUser.id)
		const newObject = new PersistentBuilderVersion()
		newObject.createdById = -1
		newObject.lastUpdatedById = -1
		newObject.isDeleted = false
		newObject.type = TestHelper.randomEnum(PersistentBuilderType) // enumeration
		newObject.persistentBuilderId = await DacTestHelper.randomResultId(new PersistentBuilderDac(currentUser.id)) // int
		newObject.version = TestHelper.randomString(128) // string
		newObject.released = Math.random() > .5 // boolean
		newObject.tags = TestHelper.randomString(1024) // string
		newObject.text = TestHelper.randomString(0) // string
		newObject.deprecated = Math.random() > .5 // boolean
		newObject.suggestedAlternateId = await DacTestHelper.randomResultId(new PersistentBuilderVersionDac(currentUser.id)) // int

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
		// persistentBuilder - the type (PersistentBuilder) is not being tested
		expect(resultObject.version).toBe(newObject.version) // string
		expect(resultObject.released).toBe(newObject.released) // boolean
		expect(resultObject.tags).toBe(newObject.tags) // string
		expect(resultObject.text).toBe(newObject.text) // string
		expect(resultObject.deprecated).toBe(newObject.deprecated) // boolean
		expect(resultObject.suggestedAlternateId).toBe(newObject.suggestedAlternateId) // int
		// suggestedAlternate - the type (PersistentBuilderVersion) is not being tested
	})
	
	it('read one and change basic properties', async () => {
		const currentUser = await DacTestHelper.randomResult(new UserDac(1)) as User
		expect(currentUser).toBeDefined()
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const userDac = new UserDac(currentUser.id)
		const runDate = new Date()

		const objectDac = new PersistentBuilderVersionDac(currentUser.id)
		const initialRead = await objectDac.findBy('1=1 and isDeleted=0', [], undefined, 1, 1)
		const readObject = initialRead.rows[0]
		readObject.lastUpdatedById = -1
		readObject.type = TestHelper.randomEnum(PersistentBuilderType) // enumeration
		readObject.persistentBuilderId = await DacTestHelper.randomResultId(new PersistentBuilderDac(currentUser.id)) // int
		readObject.version = TestHelper.randomString(128) // string
		readObject.released = Math.random() > .5 // boolean
		readObject.tags = TestHelper.randomString(1024) // string
		readObject.text = TestHelper.randomString(0) // string
		readObject.deprecated = Math.random() > .5 // boolean
		readObject.suggestedAlternateId = await DacTestHelper.randomResultId(new PersistentBuilderVersionDac(currentUser.id)) // int

		const results = await objectDac.updateAndReturn([readObject])
		expect(results.length).toBe(1)
		const resultObject = results[0]
		expect(resultObject.createdOn).toBeDefined()
		expect(resultObject.objectVersion).toBe(readObject.objectVersion + 1)
		expect(resultObject.lastUpdatedById).toBe(objectDac.userId)
		expect(Math.abs((resultObject.lastUpdatedOn as Date).getTime() - runDate.getTime())).toBeLessThan(1000)
		expect(resultObject.isDeleted).toBe(false)
		expect(resultObject.id).toBe(readObject.id) // int
		expect(resultObject.createdById).toBe(readObject.createdById) // int
		// createdBy - the type (User) is not being tested
		expect(resultObject.type).toBe(readObject.type) // Enumeration
		expect(resultObject.persistentBuilderId).toBe(readObject.persistentBuilderId) // int
		// persistentBuilder - the type (PersistentBuilder) is not being tested
		expect(resultObject.version).toBe(readObject.version) // string
		expect(resultObject.released).toBe(readObject.released) // boolean
		expect(resultObject.tags).toBe(readObject.tags) // string
		expect(resultObject.text).toBe(readObject.text) // string
		expect(resultObject.deprecated).toBe(readObject.deprecated) // boolean
		expect(resultObject.suggestedAlternateId).toBe(readObject.suggestedAlternateId) // int
		// suggestedAlternate - the type (PersistentBuilderVersion) is not being tested
	})
})



