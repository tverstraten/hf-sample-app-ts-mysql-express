/* eslint-disable max-lines-per-function */
/* eslint-disable spellcheck/spell-checker */
import { IdentityProvider, User } from '@tverstraten/hf-model'
import { TestHelper } from '@tverstraten/hf-utils'
import { UserDac } from '../UserDac'

describe('UserDac', () => {
	it('create and read basic properties', async () => {
		const userDac = new UserDac(1)
		const currentUser = await userDac.findOneById(1)
		expect(currentUser).toBeDefined()

		const newObject = new User()
		newObject.createdById = currentUser.id
		newObject.lastUpdatedById = currentUser.id
		newObject.isDeleted = false
		newObject.givenName = TestHelper.randomString(50)
		newObject.familyName = TestHelper.randomString(50)
		newObject.avatarUrl = TestHelper.randomString(50)
		newObject.contactEmail = TestHelper.randomString(50)
		newObject.primaryIdentityProvider = IdentityProvider.github
		newObject.withinOrganizationId = 1

		const results = await userDac.createAndReturn([newObject])

		expect(results.length).toBe(1)
		const resultObject = results[0]
		expect(resultObject.id).toBeGreaterThan(0)
		expect(resultObject.createdById).toBe(newObject.createdById)
		expect(resultObject.lastUpdatedById).toBe(newObject.lastUpdatedById)
		expect(resultObject.isDeleted).toBe(newObject.isDeleted)
		expect(resultObject.givenName).toBe(newObject.givenName)
		expect(resultObject.familyName).toBe(newObject.familyName)
		expect(resultObject.avatarUrl).toBe(newObject.avatarUrl)
		expect(resultObject.contactEmail).toBe(newObject.contactEmail)
		expect(resultObject.primaryIdentityProvider).toBe(newObject.primaryIdentityProvider)
		expect(resultObject.withinOrganizationId).toBe(newObject.withinOrganizationId)
	})
})
