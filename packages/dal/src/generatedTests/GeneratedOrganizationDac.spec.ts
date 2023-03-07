/* eslint-disable max-lines-per-function */
/* eslint-disable spellcheck/spell-checker */
/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Organization } from '@tverstraten/hf-model'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TestHelper } from '@tverstraten/hf-utils'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DacTestHelper } from './DacTestHelper'
import { OrganizationDac } from '../OrganizationDac'
import { UserDac } from '../UserDac'
import { SubscriptionType } from '@tverstraten/hf-model'
import { User } from '@tverstraten/hf-model' // OrganizationDac

describe('OrganizationDac', () => {
	it('create and read basic properties', async () => {
		const currentUser = await DacTestHelper.randomResult(new UserDac(1)) as User
		expect(currentUser).toBeDefined()
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const userDac = new UserDac(currentUser.id)		
		const runDate = new Date()

		const objectDac = new OrganizationDac(currentUser.id)
		const newObject = new Organization()
		newObject.createdById = -1
		newObject.lastUpdatedById = -1
		newObject.isDeleted = false
		newObject.name = TestHelper.randomString(1024) // string
		newObject.primaryContactEmail = TestHelper.randomString(128) // string
		newObject.billingContactEmail = TestHelper.randomString(128) // string
		newObject.balance = Math.round(Math.random() * Number.MAX_SAFE_INTEGER) / 100 // float
		newObject.currentSubscription = TestHelper.randomEnum(SubscriptionType) // enumeration

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
		expect(resultObject.name).toBe(newObject.name) // string
		expect(resultObject.primaryContactEmail).toBe(newObject.primaryContactEmail) // string
		expect(resultObject.billingContactEmail).toBe(newObject.billingContactEmail) // string
		expect(resultObject.balance).toBe(newObject.balance) // float
		expect(resultObject.currentSubscription).toBe(newObject.currentSubscription) // Enumeration
	})
	
	it('read one and change basic properties', async () => {
		const currentUser = await DacTestHelper.randomResult(new UserDac(1)) as User
		expect(currentUser).toBeDefined()
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const userDac = new UserDac(currentUser.id)
		const runDate = new Date()

		const objectDac = new OrganizationDac(currentUser.id)
		const initialRead = await objectDac.findBy('1=1 and isDeleted=0', [], undefined, 1, 1)
		const readObject = initialRead.rows[0]
		readObject.lastUpdatedById = -1
		readObject.name = TestHelper.randomString(1024) // string
		readObject.primaryContactEmail = TestHelper.randomString(128) // string
		readObject.billingContactEmail = TestHelper.randomString(128) // string
		readObject.balance = Math.round(Math.random() * Number.MAX_SAFE_INTEGER) / 100 // float
		readObject.currentSubscription = TestHelper.randomEnum(SubscriptionType) // enumeration

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
		expect(resultObject.name).toBe(readObject.name) // string
		expect(resultObject.primaryContactEmail).toBe(readObject.primaryContactEmail) // string
		expect(resultObject.billingContactEmail).toBe(readObject.billingContactEmail) // string
		expect(resultObject.balance).toBe(readObject.balance) // float
		expect(resultObject.currentSubscription).toBe(readObject.currentSubscription) // Enumeration
	})
})



