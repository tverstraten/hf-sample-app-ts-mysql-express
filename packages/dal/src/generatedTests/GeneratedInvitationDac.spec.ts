/* eslint-disable max-lines-per-function */
/* eslint-disable spellcheck/spell-checker */
/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Invitation } from '@tverstraten/hf-model'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TestHelper } from '@tverstraten/hf-utils'
import { DacTestHelper } from './DacTestHelper'
import { InvitationDac } from '../InvitationDac'
import { UserDac } from '../UserDac'

describe('InvitationDac', () => {
	it('create and read basic properties', async () => {
		const userDac = new UserDac(1)
		const currentUser = await userDac.findOneById(1)
		expect(currentUser).toBeDefined()
		const runDate = new Date()

		const objectDac = new InvitationDac(1)
		const newObject = new Invitation()
		newObject.createdById = -1
		newObject.lastUpdatedById = -1
		newObject.isDeleted = false
		newObject.toEmail = TestHelper.randomString(128) // string
		newObject.invitedById = await DacTestHelper.firstResultId(new UserDac(1)) // int
		newObject.invitedUserId = await DacTestHelper.firstResultId(new UserDac(1)) // int
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
		// invitedBy - the type (User) is not matched
		expect(resultObject.invitedUserId).toBe(newObject.invitedUserId) // int
		// invitedUser - the type (User) is not matched
		expect(Math.abs((resultObject.lastReminderSentOn as Date).getTime() - newObject.lastReminderSentOn.getTime())).toBeLessThan(1000) // dateTime
	})
})




