/* eslint-disable max-lines-per-function */
/* eslint-disable spellcheck/spell-checker */
/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { SubscriptionTypeMetrics } from '@tverstraten/hf-model'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TestHelper } from '@tverstraten/hf-utils'
import { SubscriptionTypeMetricsDac } from '../SubscriptionTypeMetricsDac'
import { UserDac } from '../UserDac'
import { SubscriptionType } from '@tverstraten/hf-model'

describe('SubscriptionTypeMetricsDac', () => {
	it('create and read basic properties', async () => {
		const userDac = new UserDac(1)
		const currentUser = await userDac.findOneById(1)
		expect(currentUser).toBeDefined()

		const objectDac = new SubscriptionTypeMetricsDac(1)

		const newObject = new SubscriptionTypeMetrics()
		newObject.createdById = currentUser.id
		newObject.type = TestHelper.randomEnum(SubscriptionType) 
		newObject.name = TestHelper.randomString(255) 
		newObject.description = TestHelper.randomString(1024) 
		newObject.numberOfUsersAllowed = Math.random() * Number.MAX_SAFE_INTEGER 
		newObject.numberOfBuildsAllowed = Math.random() * Number.MAX_SAFE_INTEGER 
		newObject.costPerUser = Math.random() * Number.MAX_SAFE_INTEGER 
		newObject.costPerBuild = Math.random() * Number.MAX_SAFE_INTEGER 

		const results = await objectDac.createAndReturn([newObject])
		expect(results.length).toBe(1)
		const resultObject = results[0]
		expect(resultObject.id).toBeGreaterThan(0)
		expect(resultObject.createdById).toBe(newObject.createdById)
		expect(resultObject.createdOn).toBe(newObject.createdOn)
		expect(resultObject.type).toBe(newObject.type)
		expect(resultObject.name).toBe(newObject.name)
		expect(resultObject.description).toBe(newObject.description)
		expect(resultObject.numberOfUsersAllowed).toBe(newObject.numberOfUsersAllowed)
		expect(resultObject.numberOfBuildsAllowed).toBe(newObject.numberOfBuildsAllowed)
		expect(resultObject.costPerUser).toBe(newObject.costPerUser)
		expect(resultObject.costPerBuild).toBe(newObject.costPerBuild)
	})
})




