/* eslint-disable max-lines-per-function */
/* eslint-disable spellcheck/spell-checker */
/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { User } from '@tverstraten/hf-model'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TestHelper } from '@tverstraten/hf-utils'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DacTestHelper } from './DacTestHelper'
import { UserDac } from '../UserDac'
import { IdentityProvider } from '@tverstraten/hf-model'
import { OrganizationDac } from '../OrganizationDac'
import { OrganizationalRoleDac } from '../OrganizationalRoleDac'

describe('UserDac', () => {
	it('create and read basic properties', async () => {
		const currentUser = await DacTestHelper.randomResult(new UserDac(1)) as User
		expect(currentUser).toBeDefined()
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const userDac = new UserDac(currentUser.id)		
		const runDate = new Date()

		const objectDac = new UserDac(currentUser.id)
		const newObject = new User()
		newObject.createdById = -1
		newObject.lastUpdatedById = -1
		newObject.isDeleted = false
		newObject.withinOrganizationId = await DacTestHelper.randomResultId(new OrganizationDac(currentUser.id)) // int
		newObject.givenName = TestHelper.randomString(128) // string
		newObject.familyName = TestHelper.randomString(128) // string
		newObject.contactEmail = TestHelper.randomString(128) // string
		newObject.avatarUrl = TestHelper.randomString(1024) // string
		newObject.performsId = await DacTestHelper.randomResultId(new OrganizationalRoleDac(currentUser.id)) // int
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
		// withinOrganization - the type (Organization) is not being tested
		expect(resultObject.givenName).toBe(newObject.givenName) // string
		expect(resultObject.familyName).toBe(newObject.familyName) // string
		expect(resultObject.contactEmail).toBe(newObject.contactEmail) // string
		expect(resultObject.avatarUrl).toBe(newObject.avatarUrl) // string
		expect(resultObject.performsId).toBe(newObject.performsId) // int
		// performs - the type (OrganizationalRole) is not being tested
		expect(resultObject.primaryIdentityProvider).toBe(newObject.primaryIdentityProvider) // Enumeration
		expect(resultObject.enabled).toBe(newObject.enabled) // boolean
		expect(Math.abs((resultObject.lastInvitationSentOn as Date).getTime() - newObject.lastInvitationSentOn.getTime())).toBeLessThan(1000) // dateTime
		expect(Math.abs((resultObject.invitationAcceptedOn as Date).getTime() - newObject.invitationAcceptedOn.getTime())).toBeLessThan(1000) // dateTime
	})
	
	it('read one and change basic properties', async () => {
		const currentUser = await DacTestHelper.randomResult(new UserDac(1)) as User
		expect(currentUser).toBeDefined()
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const userDac = new UserDac(currentUser.id)
		const runDate = new Date()

		const objectDac = new UserDac(currentUser.id)
		const initialRead = await objectDac.findBy('1=1 and isDeleted=0', [], [], [], 1, 1)
		const readObject = initialRead.rows[0]
		readObject.lastUpdatedById = -1
		readObject.withinOrganizationId = await DacTestHelper.randomResultId(new OrganizationDac(currentUser.id)) // int
		readObject.givenName = TestHelper.randomString(128) // string
		readObject.familyName = TestHelper.randomString(128) // string
		readObject.contactEmail = TestHelper.randomString(128) // string
		readObject.avatarUrl = TestHelper.randomString(1024) // string
		readObject.performsId = await DacTestHelper.randomResultId(new OrganizationalRoleDac(currentUser.id)) // int
		readObject.primaryIdentityProvider = TestHelper.randomEnum(IdentityProvider) // enumeration
		readObject.enabled = Math.random() > .5 // boolean
		readObject.lastInvitationSentOn = new Date(Math.round(Math.random() * 10000000)) // dateTime
		readObject.invitationAcceptedOn = new Date(Math.round(Math.random() * 10000000)) // dateTime

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
		expect(resultObject.withinOrganizationId).toBe(readObject.withinOrganizationId) // int
		// withinOrganization - the type (Organization) is not being tested
		expect(resultObject.givenName).toBe(readObject.givenName) // string
		expect(resultObject.familyName).toBe(readObject.familyName) // string
		expect(resultObject.contactEmail).toBe(readObject.contactEmail) // string
		expect(resultObject.avatarUrl).toBe(readObject.avatarUrl) // string
		expect(resultObject.performsId).toBe(readObject.performsId) // int
		// performs - the type (OrganizationalRole) is not being tested
		expect(resultObject.primaryIdentityProvider).toBe(readObject.primaryIdentityProvider) // Enumeration
		expect(resultObject.enabled).toBe(readObject.enabled) // boolean
		expect(Math.abs((resultObject.lastInvitationSentOn as Date).getTime() - readObject.lastInvitationSentOn.getTime())).toBeLessThan(1000) // dateTime
		expect(Math.abs((resultObject.invitationAcceptedOn as Date).getTime() - readObject.invitationAcceptedOn.getTime())).toBeLessThan(1000) // dateTime
	})
})



