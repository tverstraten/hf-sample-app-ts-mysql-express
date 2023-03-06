/* eslint-disable max-lines-per-function */
/* eslint-disable spellcheck/spell-checker */
/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Organization } from '@tverstraten/hf-model'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TestHelper } from '@tverstraten/hf-utils'
import { OrganizationDac } from '../OrganizationDac'
import { UserDac } from '../UserDac'
import { SubscriptionType } from '@tverstraten/hf-model'

describe('OrganizationDac', () => {
	it('create and read basic properties', async () => {
		const userDac = new UserDac(1)
		const currentUser = await userDac.findOneById(1)
		expect(currentUser).toBeDefined()
		const runDate = new Date()

		const objectDac = new OrganizationDac(1)
		const newObject = new Organization()
		newObject.createdById = -1
		newObject.lastUpdatedById = -1
		newObject.isDeleted = false
		newObject.name = TestHelper.randomString(1024) 
		newObject.primaryContactEmail = TestHelper.randomString(128) 
		newObject.billingContactEmail = TestHelper.randomString(128) 
		newObject.balance = Math.random() * Number.MAX_SAFE_INTEGER / 100
		newObject.currentSubscription = TestHelper.randomEnum(SubscriptionType) 

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
		expect(resultObject.name).toBe(newObject.name)
		expect(resultObject.primaryContactEmail).toBe(newObject.primaryContactEmail)
		expect(resultObject.billingContactEmail).toBe(newObject.billingContactEmail)
		expect(resultObject.balance).toBe(newObject.balance)
		expect(resultObject.currentSubscription).toBe(newObject.currentSubscription)
	})
})




