/* eslint-disable max-lines-per-function */
/* eslint-disable spellcheck/spell-checker */
/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Email } from '@tverstraten/hf-model'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TestHelper } from '@tverstraten/hf-utils'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DacTestHelper } from './DacTestHelper'
import { EmailDac } from '../EmailDac'
import { UserDac } from '../UserDac'
import { OrganizationDac } from '../OrganizationDac'
import { User } from '@tverstraten/hf-model' // EmailDac

describe('EmailDac', () => {
	it('create and read basic properties', async () => {
		const currentUser = await DacTestHelper.randomResult(new UserDac(1)) as User
		expect(currentUser).toBeDefined()
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const userDac = new UserDac(currentUser.id)		
		const runDate = new Date()

		const objectDac = new EmailDac(currentUser.id)
		const newObject = new Email()
		newObject.createdById = -1
		newObject.lastUpdatedById = -1
		newObject.isDeleted = false
		newObject.withinOrganizationId = await DacTestHelper.randomResultId(new OrganizationDac(currentUser.id)) // int
		newObject.from = TestHelper.randomString(128) // string
		newObject.sentTo = TestHelper.randomString(128) // string
		newObject.userSentToId = await DacTestHelper.randomResultId(new UserDac(currentUser.id)) // int
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
		// withinOrganization - the type (Organization) is not being tested
		expect(resultObject.from).toBe(newObject.from) // string
		expect(resultObject.sentTo).toBe(newObject.sentTo) // string
		expect(resultObject.userSentToId).toBe(newObject.userSentToId) // int
		// userSentTo - the type (User) is not being tested
		expect(resultObject.ccd).toBe(newObject.ccd) // string
		expect(resultObject.bccd).toBe(newObject.bccd) // string
		expect(Math.abs((resultObject.firstRead as Date).getTime() - newObject.firstRead.getTime())).toBeLessThan(1000) // dateTime
		expect(resultObject.subject).toBe(newObject.subject) // string
		expect(resultObject.body).toBe(newObject.body) // string
	})
	
	it('read one and change basic properties', async () => {
		const currentUser = await DacTestHelper.randomResult(new UserDac(1)) as User
		expect(currentUser).toBeDefined()
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const userDac = new UserDac(currentUser.id)
		const runDate = new Date()

		const objectDac = new EmailDac(currentUser.id)
		const initialRead = await objectDac.findBy('1=1 and isDeleted=0', [], [], [], 1, 1)
		const readObject = initialRead.rows[0]
		readObject.lastUpdatedById = -1
		readObject.withinOrganizationId = await DacTestHelper.randomResultId(new OrganizationDac(currentUser.id)) // int
		readObject.from = TestHelper.randomString(128) // string
		readObject.sentTo = TestHelper.randomString(128) // string
		readObject.userSentToId = await DacTestHelper.randomResultId(new UserDac(currentUser.id)) // int
		readObject.ccd = TestHelper.randomString(1024) // string
		readObject.bccd = TestHelper.randomString(1024) // string
		readObject.firstRead = new Date(Math.round(Math.random() * 10000000)) // dateTime
		readObject.subject = TestHelper.randomString(256) // string
		readObject.body = TestHelper.randomString(8192) // string

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
		expect(resultObject.from).toBe(readObject.from) // string
		expect(resultObject.sentTo).toBe(readObject.sentTo) // string
		expect(resultObject.userSentToId).toBe(readObject.userSentToId) // int
		// userSentTo - the type (User) is not being tested
		expect(resultObject.ccd).toBe(readObject.ccd) // string
		expect(resultObject.bccd).toBe(readObject.bccd) // string
		expect(Math.abs((resultObject.firstRead as Date).getTime() - readObject.firstRead.getTime())).toBeLessThan(1000) // dateTime
		expect(resultObject.subject).toBe(readObject.subject) // string
		expect(resultObject.body).toBe(readObject.body) // string
	})
})



