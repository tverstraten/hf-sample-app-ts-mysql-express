/* eslint-disable max-lines-per-function */
/* eslint-disable spellcheck/spell-checker */
/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Email } from '@tverstraten/hf-model'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TestHelper } from '@tverstraten/hf-utils'
import { DacTestHelper } from './DacTestHelper'
import { EmailDac } from '../EmailDac'
import { UserDac } from '../UserDac'
import { OrganizationDac } from '../OrganizationDac'

describe('EmailDac', () => {
	it('create and read basic properties', async () => {
		const userDac = new UserDac(1)
		const currentUser = await userDac.findOneById(1)
		expect(currentUser).toBeDefined()
		const runDate = new Date()

		const objectDac = new EmailDac(1)
		const newObject = new Email()
		newObject.createdById = -1
		newObject.lastUpdatedById = -1
		newObject.isDeleted = false
		newObject.withinOrganizationId = await DacTestHelper.firstResultId(new OrganizationDac(1)) // int
		newObject.from = TestHelper.randomString(128) // string
		newObject.sentTo = TestHelper.randomString(128) // string
		newObject.userSentToId = await DacTestHelper.firstResultId(new UserDac(1)) // int
		newObject.ccd = TestHelper.randomString(1024) // string
		newObject.bccd = TestHelper.randomString(1024) // string
		newObject.firstRead = new Date(Math.round(Math.random() * 10000000)) // dateTime
		newObject.subject = TestHelper.randomString(256) // string
		newObject.body = TestHelper.randomString(8192) // string

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
		expect(resultObject.from).toBe(newObject.from) // string
		expect(resultObject.sentTo).toBe(newObject.sentTo) // string
		expect(resultObject.userSentToId).toBe(newObject.userSentToId) // int
		// userSentTo - the type (User) is not matched
		expect(resultObject.ccd).toBe(newObject.ccd) // string
		expect(resultObject.bccd).toBe(newObject.bccd) // string
		expect(Math.abs((resultObject.firstRead as Date).getTime() - newObject.firstRead.getTime())).toBeLessThan(1000) // dateTime
		expect(resultObject.subject).toBe(newObject.subject) // string
		expect(resultObject.body).toBe(newObject.body) // string
	})
})




