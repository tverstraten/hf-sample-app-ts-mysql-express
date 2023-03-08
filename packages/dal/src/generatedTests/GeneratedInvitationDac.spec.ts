/* eslint-disable max-lines-per-function */
/* eslint-disable spellcheck/spell-checker */
/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Invitation } from '@tverstraten/hf-model'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TestHelper } from '@tverstraten/hf-utils'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DacTestHelper } from './DacTestHelper'
import { InvitationDac } from '../InvitationDac'
import { UserDac } from '../UserDac'
import { User } from '@tverstraten/hf-model' // InvitationDac

describe('InvitationDac', () => {
	it('create and read basic properties', async () => {
		const currentUser = await DacTestHelper.randomResult(new UserDac(1)) as User
		expect(currentUser).toBeDefined()
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const userDac = new UserDac(currentUser.id)		
		const runDate = new Date()

		const objectDac = new InvitationDac(currentUser.id)
		const newObject = new Invitation()
		newObject.createdById = -1
		newObject.lastUpdatedById = -1
		newObject.isDeleted = false
		newObject.toEmail = TestHelper.randomString(128) // string
		newObject.invitedById = await DacTestHelper.randomResultId(new UserDac(currentUser.id)) // int
		newObject.invitedUserId = await DacTestHelper.randomResultId(new UserDac(currentUser.id)) // int
		newObject.lastReminderSentOn = new Date(Math.round(Math.random() * 10000000)) // dateTime

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
		expect(resultObject.toEmail).toBe(newObject.toEmail) // string
		expect(resultObject.invitedById).toBe(newObject.invitedById) // int
		// invitedBy - the type (User) is not being tested
		expect(resultObject.invitedUserId).toBe(newObject.invitedUserId) // int
		// invitedUser - the type (User) is not being tested
		expect(Math.abs((resultObject.lastReminderSentOn as Date).getTime() - newObject.lastReminderSentOn.getTime())).toBeLessThan(1000) // dateTime
	})
	
	it('read one and change basic properties', async () => {
		const currentUser = await DacTestHelper.randomResult(new UserDac(1)) as User
		expect(currentUser).toBeDefined()
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const userDac = new UserDac(currentUser.id)
		const runDate = new Date()

		const objectDac = new InvitationDac(currentUser.id)
		const initialRead = await objectDac.findBy('1=1 and isDeleted=0', [], [], [], 1, 1)
		const readObject = initialRead.rows[0]
		readObject.lastUpdatedById = -1
		readObject.toEmail = TestHelper.randomString(128) // string
		readObject.invitedById = await DacTestHelper.randomResultId(new UserDac(currentUser.id)) // int
		readObject.invitedUserId = await DacTestHelper.randomResultId(new UserDac(currentUser.id)) // int
		readObject.lastReminderSentOn = new Date(Math.round(Math.random() * 10000000)) // dateTime

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
		expect(resultObject.toEmail).toBe(readObject.toEmail) // string
		expect(resultObject.invitedById).toBe(readObject.invitedById) // int
		// invitedBy - the type (User) is not being tested
		expect(resultObject.invitedUserId).toBe(readObject.invitedUserId) // int
		// invitedUser - the type (User) is not being tested
		expect(Math.abs((resultObject.lastReminderSentOn as Date).getTime() - readObject.lastReminderSentOn.getTime())).toBeLessThan(1000) // dateTime
	})
})



