/* eslint-disable max-lines-per-function */
/* eslint-disable spellcheck/spell-checker */
/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Identity } from '@tverstraten/hf-model'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TestHelper } from '@tverstraten/hf-utils'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DacTestHelper } from './DacTestHelper'
import { IdentityDac } from '../IdentityDac'
import { UserDac } from '../UserDac'
import { IdentityProvider } from '@tverstraten/hf-model'
import { User } from '@tverstraten/hf-model' // IdentityDac

describe('IdentityDac', () => {
	it('create and read basic properties', async () => {
		const currentUser = await DacTestHelper.randomResult(new UserDac(1)) as User
		expect(currentUser).toBeDefined()
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const userDac = new UserDac(currentUser.id)		
		const runDate = new Date()

		const objectDac = new IdentityDac(currentUser.id)
		const newObject = new Identity()
		newObject.createdById = -1
		newObject.lastUpdatedById = -1
		newObject.isDeleted = false
		newObject.providedBy = TestHelper.randomEnum(IdentityProvider) // enumeration
		newObject.socialIdentifier = TestHelper.randomString(128) // string
		newObject.forId = await DacTestHelper.randomResultId(new UserDac(currentUser.id)) // int
		newObject.enabled = Math.random() > .5 // boolean
		newObject.expiresOn = new Date(Math.round(Math.random() * 10000000)) // dateTime

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
		expect(resultObject.providedBy).toBe(newObject.providedBy) // Enumeration
		expect(resultObject.socialIdentifier).toBe(newObject.socialIdentifier) // string
		expect(resultObject.forId).toBe(newObject.forId) // int
		// for - the type (User) is not being tested
		expect(resultObject.enabled).toBe(newObject.enabled) // boolean
		expect(Math.abs((resultObject.expiresOn as Date).getTime() - newObject.expiresOn.getTime())).toBeLessThan(1000) // dateTime
	})
	
	it('read one and change basic properties', async () => {
		const currentUser = await DacTestHelper.randomResult(new UserDac(1)) as User
		expect(currentUser).toBeDefined()
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const userDac = new UserDac(currentUser.id)
		const runDate = new Date()

		const objectDac = new IdentityDac(currentUser.id)
		const initialRead = await objectDac.findBy('1=1 and isDeleted=0', [], [], [], 1, 1)
		const readObject = initialRead.rows[0]
		readObject.lastUpdatedById = -1
		readObject.providedBy = TestHelper.randomEnum(IdentityProvider) // enumeration
		readObject.socialIdentifier = TestHelper.randomString(128) // string
		readObject.forId = await DacTestHelper.randomResultId(new UserDac(currentUser.id)) // int
		readObject.enabled = Math.random() > .5 // boolean
		readObject.expiresOn = new Date(Math.round(Math.random() * 10000000)) // dateTime

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
		expect(resultObject.providedBy).toBe(readObject.providedBy) // Enumeration
		expect(resultObject.socialIdentifier).toBe(readObject.socialIdentifier) // string
		expect(resultObject.forId).toBe(readObject.forId) // int
		// for - the type (User) is not being tested
		expect(resultObject.enabled).toBe(readObject.enabled) // boolean
		expect(Math.abs((resultObject.expiresOn as Date).getTime() - readObject.expiresOn.getTime())).toBeLessThan(1000) // dateTime
	})
})



