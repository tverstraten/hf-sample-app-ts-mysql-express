/* eslint-disable max-lines-per-function */
/* eslint-disable spellcheck/spell-checker */
/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { User } from '@tverstraten/hf-model'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TestHelper } from '@tverstraten/hf-utils'
import { UserDac } from '../UserDac'
import { IdentityProvider } from '@tverstraten/hf-model'

describe('UserDac', () => {
	it('create and read basic properties', async () => {
		const userDac = new UserDac(1)
		const currentUser = await userDac.findOneById(1)
		expect(currentUser).toBeDefined()
		const runDate = new Date()

		const objectDac = new UserDac(1)
		const newObject = new User()
		newObject.createdById = -1
		newObject.lastUpdatedById = -1
		newObject.isDeleted = false
		newObject.withinOrganizationId = Math.round(Math.random() * Number.MAX_SAFE_INTEGER) 
		newObject.givenName = TestHelper.randomString(128) 
		newObject.familyName = TestHelper.randomString(128) 
		newObject.contactEmail = TestHelper.randomString(128) 
		newObject.avatarUrl = TestHelper.randomString(1024) 
		newObject.performsId = Math.round(Math.random() * Number.MAX_SAFE_INTEGER) 
		newObject.primaryIdentityProvider = TestHelper.randomEnum(IdentityProvider) 
		newObject.enabled = Math.random() > .5 

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
		expect(resultObject.withinOrganizationId).toBe(newObject.withinOrganizationId)
		expect(resultObject.givenName).toBe(newObject.givenName)
		expect(resultObject.familyName).toBe(newObject.familyName)
		expect(resultObject.contactEmail).toBe(newObject.contactEmail)
		expect(resultObject.avatarUrl).toBe(newObject.avatarUrl)
		expect(resultObject.performsId).toBe(newObject.performsId)
		expect(resultObject.primaryIdentityProvider).toBe(newObject.primaryIdentityProvider)
		expect(resultObject.enabled).toBe(newObject.enabled)
	})
})




