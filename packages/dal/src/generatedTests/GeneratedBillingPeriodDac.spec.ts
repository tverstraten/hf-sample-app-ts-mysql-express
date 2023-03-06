/* eslint-disable max-lines-per-function */
/* eslint-disable spellcheck/spell-checker */
/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { BillingPeriod } from '@tverstraten/hf-model'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TestHelper } from '@tverstraten/hf-utils'
import { BillingPeriodDac } from '../BillingPeriodDac'
import { UserDac } from '../UserDac'

describe('BillingPeriodDac', () => {
	it('create and read basic properties', async () => {
		const userDac = new UserDac(1)
		const currentUser = await userDac.findOneById(1)
		expect(currentUser).toBeDefined()

		const objectDac = new BillingPeriodDac(1)

		const newObject = new BillingPeriod()
		newObject.createdById = currentUser.id
		newObject.lastUpdatedById = currentUser.id
		newObject.isDeleted = false
		newObject.name = TestHelper.randomString(128) 
		newObject.start = new Date(Math.round(Math.random() * 10000000))
		newObject.end = new Date(Math.round(Math.random() * 10000000))

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
		expect(resultObject.name).toBe(newObject.name)
		expect(resultObject.start).toBe(newObject.start)
		expect(resultObject.end).toBe(newObject.end)
	})
})



