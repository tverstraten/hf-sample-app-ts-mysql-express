/* eslint-disable max-lines-per-function */
/* eslint-disable spellcheck/spell-checker */
/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Identity } from '@tverstraten/hf-model'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TestHelper } from '@tverstraten/hf-utils'
import { DacTestHelper } from './DacTestHelper'
import { IdentityDac } from '../IdentityDac'
import { UserDac } from '../UserDac'
import { IdentityProvider } from '@tverstraten/hf-model'

describe('IdentityDac', () => {
	it('create and read basic properties', async () => {
		const userDac = new UserDac(1)
		const currentUser = await userDac.findOneById(1)
		expect(currentUser).toBeDefined()
		const runDate = new Date()

		const objectDac = new IdentityDac(1)
		const newObject = new Identity()
		newObject.createdById = -1
		newObject.lastUpdatedById = -1
		newObject.isDeleted = false
		newObject.providedBy = TestHelper.randomEnum(IdentityProvider) // enumeration
		newObject.socialIdentifier = TestHelper.randomString(128) // string
		newObject.forId = await DacTestHelper.firstResultId(new UserDac(1)) // int
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
		// for - the type (User) is not matched
		expect(resultObject.enabled).toBe(newObject.enabled) // boolean
		expect(Math.abs((resultObject.expiresOn as Date).getTime() - newObject.expiresOn.getTime())).toBeLessThan(1000) // dateTime
	})
})




