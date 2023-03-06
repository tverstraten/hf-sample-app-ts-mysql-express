/* eslint-disable max-lines-per-function */
/* eslint-disable spellcheck/spell-checker */
/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Email } from '@tverstraten/hf-model'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TestHelper } from '@tverstraten/hf-utils'
import { EmailDac } from '../EmailDac'
import { UserDac } from '../UserDac'

describe('EmailDac', () => {
	it('create and read basic properties', async () => {
		const userDac = new UserDac(1)
		const currentUser = await userDac.findOneById(1)
		expect(currentUser).toBeDefined()

		const objectDac = new EmailDac(1)

		const newObject = new Email()
		newObject.createdById = currentUser.id
		newObject.lastUpdatedById = currentUser.id
		newObject.isDeleted = false
		newObject.withinOrganizationId = Math.round(Math.random() * Number.MAX_SAFE_INTEGER) 
		newObject.from = TestHelper.randomString(128) 
		newObject.sentTo = TestHelper.randomString(128) 
		newObject.userSentToId = Math.round(Math.random() * Number.MAX_SAFE_INTEGER) 
		newObject.ccd = TestHelper.randomString(1024) 
		newObject.bccd = TestHelper.randomString(1024) 
		newObject.firstRead = new Date(Math.round(Math.random() * 10000000))
		newObject.subject = TestHelper.randomString(256) 
		newObject.body = TestHelper.randomString(8192) 

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
		expect(resultObject.from).toBe(newObject.from)
		expect(resultObject.sentTo).toBe(newObject.sentTo)
		expect(resultObject.userSentToId).toBe(newObject.userSentToId)
		expect(resultObject.ccd).toBe(newObject.ccd)
		expect(resultObject.bccd).toBe(newObject.bccd)
		expect(resultObject.firstRead).toBe(newObject.firstRead)
		expect(resultObject.subject).toBe(newObject.subject)
		expect(resultObject.body).toBe(newObject.body)
	})
})




