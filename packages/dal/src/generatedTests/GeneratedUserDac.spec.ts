/* eslint-disable max-lines-per-function */
/* eslint-disable spellcheck/spell-checker */
/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { User } from '@tverstraten/hf-model'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TestHelper } from '@tverstraten/hf-utils'
import { DacTestHelper } from './DacTestHelper'
import { UserDac } from '../UserDac'
import { IdentityProvider } from '@tverstraten/hf-model'
import { OrganizationDac } from '../OrganizationDac'
import { OrganizationalRoleDac } from '../OrganizationalRoleDac'

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
		newObject.withinOrganizationId = await DacTestHelper.firstResultId(new OrganizationDac(1)) // int
		newObject.givenName = TestHelper.randomString(128) // string
		newObject.familyName = TestHelper.randomString(128) // string
		newObject.contactEmail = TestHelper.randomString(128) // string
		newObject.avatarUrl = TestHelper.randomString(1024) // string
		newObject.performsId = await DacTestHelper.firstResultId(new OrganizationalRoleDac(1)) // int
		newObject.primaryIdentityProvider = TestHelper.randomEnum(IdentityProvider) // enumeration
		newObject.enabled = Math.random() > .5 // boolean
		newObject.lastInvitationSentOn = new Date(Math.round(Math.random() * 10000000)) // dateTime
		newObject.invitationAcceptedOn = new Date(Math.round(Math.random() * 10000000)) // dateTime

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
		expect(resultObject.withinOrganizationId).toBe(newObject.withinOrganizationId) // int
		// withinOrganization - the type (Organization) is not matched
		expect(resultObject.givenName).toBe(newObject.givenName) // string
		expect(resultObject.familyName).toBe(newObject.familyName) // string
		expect(resultObject.contactEmail).toBe(newObject.contactEmail) // string
		expect(resultObject.avatarUrl).toBe(newObject.avatarUrl) // string
		expect(resultObject.performsId).toBe(newObject.performsId) // int
		// performs - the type (OrganizationalRole) is not matched
		expect(resultObject.primaryIdentityProvider).toBe(newObject.primaryIdentityProvider) // Enumeration
		expect(resultObject.enabled).toBe(newObject.enabled) // boolean
		expect(Math.abs((resultObject.lastInvitationSentOn as Date).getTime() - newObject.lastInvitationSentOn.getTime())).toBeLessThan(1000) // dateTime
		expect(Math.abs((resultObject.invitationAcceptedOn as Date).getTime() - newObject.invitationAcceptedOn.getTime())).toBeLessThan(1000) // dateTime
	})
})




