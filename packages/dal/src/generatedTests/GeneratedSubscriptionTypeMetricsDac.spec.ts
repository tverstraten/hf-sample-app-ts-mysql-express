/* eslint-disable max-lines-per-function */
/* eslint-disable spellcheck/spell-checker */
/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { SubscriptionTypeMetrics } from '@tverstraten/hf-model'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TestHelper } from '@tverstraten/hf-utils'
import { DacTestHelper } from './DacTestHelper'
import { SubscriptionTypeMetricsDac } from '../SubscriptionTypeMetricsDac'
import { UserDac } from '../UserDac'
import { SubscriptionType } from '@tverstraten/hf-model'

describe('SubscriptionTypeMetricsDac', () => {
	it('create and read basic properties', async () => {
		const userDac = new UserDac(1)
		const currentUser = await userDac.findOneById(1)
		expect(currentUser).toBeDefined()
		const runDate = new Date()

		const objectDac = new SubscriptionTypeMetricsDac(1)
		const newObject = new SubscriptionTypeMetrics()
		newObject.createdById = -1
		newObject.type = TestHelper.randomEnum(SubscriptionType) // enumeration
		newObject.name = TestHelper.randomString(255) // string
		newObject.description = TestHelper.randomString(1024) // string
		newObject.numberOfUsersAllowed = Math.round(Math.random() * Number.MAX_SAFE_INTEGER) / 100 // float
		newObject.numberOfBuildsAllowed = Math.round(Math.random() * Number.MAX_SAFE_INTEGER) / 100 // float
		newObject.costPerUser = Math.round(Math.random() * Number.MAX_SAFE_INTEGER) / 100 // float
		newObject.costPerBuild = Math.round(Math.random() * Number.MAX_SAFE_INTEGER) / 100 // float

		const results = await objectDac.createAndReturn([newObject])
		expect(results.length).toBe(1)
		const resultObject = results[0]
		expect(resultObject.id).toBeGreaterThan(0)
		expect(resultObject.createdById).toBe(objectDac.userId)
		expect(Math.abs((resultObject.createdOn as Date).getTime() - runDate.getTime())).toBeLessThan(1000)
		expect(resultObject.type).toBe(newObject.type) // Enumeration
		expect(resultObject.name).toBe(newObject.name) // string
		expect(resultObject.description).toBe(newObject.description) // string
		expect(resultObject.numberOfUsersAllowed).toBe(newObject.numberOfUsersAllowed) // float
		expect(resultObject.numberOfBuildsAllowed).toBe(newObject.numberOfBuildsAllowed) // float
		expect(resultObject.costPerUser).toBe(newObject.costPerUser) // float
		expect(resultObject.costPerBuild).toBe(newObject.costPerBuild) // float
	})
})




