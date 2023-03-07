/* eslint-disable max-lines-per-function */
/* eslint-disable spellcheck/spell-checker */
/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { BillingPeriod } from '@tverstraten/hf-model'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TestHelper } from '@tverstraten/hf-utils'
import { DacTestHelper } from './DacTestHelper'
import { BillingPeriodDac } from '../BillingPeriodDac'
import { UserDac } from '../UserDac'

describe('BillingPeriodDac', () => {
	it('create and read basic properties', async () => {
		const userDac = new UserDac(1)
		const currentUser = await userDac.findOneById(1)
		expect(currentUser).toBeDefined()
		const runDate = new Date()

		const objectDac = new BillingPeriodDac(1)
		const newObject = new BillingPeriod()
		newObject.createdById = -1
		newObject.lastUpdatedById = -1
		newObject.isDeleted = false
		newObject.name = TestHelper.randomString(128) // string
		newObject.start = new Date(Math.round(Math.random() * 10000000)) // dateTime
		newObject.end = new Date(Math.round(Math.random() * 10000000)) // dateTime

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
		expect(Math.abs((resultObject.start as Date).getTime() - newObject.start.getTime())).toBeLessThan(1000) // dateTime
		expect(Math.abs((resultObject.end as Date).getTime() - newObject.end.getTime())).toBeLessThan(1000) // dateTime
	})
})




