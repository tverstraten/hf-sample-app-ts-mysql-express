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

		const objectDac = new UserDac(1)

		const newObject = new User()
		newObject.createdById = currentUser.id
		newObject.lastUpdatedById = currentUser.id
		newObject.isDeleted = false
		newObject.withinOrganizationId = Math.round(Math.random() * Number.MAX_SAFE_INTEGER) 
		newObject.givenName = TestHelper.randomString(128) 
		newObject.familyName = TestHelper.randomString(128) 
		newObject.contactEmail = TestHelper.randomString(128) 
		newObject.avatarUrl = TestHelper.randomString(1024) 
		newObject.performsId = Math.round(Math.random() * Number.MAX_SAFE_INTEGER) 
		newObject.primaryIdentityProvider = TestHelper.randomEnum(IdentityProvider) 
		newObject.enabled = Math.random() > .5 
		newObject.lastInvitationSentOn = new Date(Math.round(Math.random() * 10000000))
		newObject.invitationAcceptedOn = new Date(Math.round(Math.random() * 10000000))

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
		expect(resultObject.withinOrganizationId).toBe(newObject.withinOrganizationId)
		expect(resultObject.givenName).toBe(newObject.givenName)
		expect(resultObject.familyName).toBe(newObject.familyName)
		expect(resultObject.contactEmail).toBe(newObject.contactEmail)
		expect(resultObject.avatarUrl).toBe(newObject.avatarUrl)
		expect(resultObject.performsId).toBe(newObject.performsId)
		expect(resultObject.primaryIdentityProvider).toBe(newObject.primaryIdentityProvider)
		expect(resultObject.enabled).toBe(newObject.enabled)
		expect(resultObject.lastInvitationSentOn).toBe(newObject.lastInvitationSentOn)
		expect(resultObject.invitationAcceptedOn).toBe(newObject.invitationAcceptedOn)
	})
})




