/* eslint-disable max-lines-per-function */
/* eslint-disable spellcheck/spell-checker */
/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Transaction } from '@tverstraten/hf-model'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TestHelper } from '@tverstraten/hf-utils'
import { DacTestHelper } from './DacTestHelper'
import { TransactionDac } from '../TransactionDac'
import { UserDac } from '../UserDac'
import { BillingPeriodDac } from '../BillingPeriodDac'
import { OrganizationDac } from '../OrganizationDac'
import { TransactionType } from '@tverstraten/hf-model'

describe('TransactionDac', () => {
	it('create and read basic properties', async () => {
		const userDac = new UserDac(1)
		const currentUser = await userDac.findOneById(1)
		expect(currentUser).toBeDefined()
		const runDate = new Date()

		const objectDac = new TransactionDac(1)
		const newObject = new Transaction()
		newObject.createdById = -1
		newObject.lastUpdatedById = -1
		newObject.isDeleted = false
		newObject.withinOrganizationId = await DacTestHelper.firstResultId(new OrganizationDac(1)) // int
		newObject.transactionType = TestHelper.randomEnum(TransactionType) // enumeration
		newObject.effective = new Date(Math.round(Math.random() * 10000000)) // dateTime
		newObject.amount = Math.round(Math.random() * Number.MAX_SAFE_INTEGER) / 100 // float
		newObject.invoiceNumber = TestHelper.randomString(128) // string
		newObject.coveringId = await DacTestHelper.firstResultId(new BillingPeriodDac(1)) // int

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
		// withinOrganization - the type (Organization) is not matched
		expect(resultObject.transactionType).toBe(newObject.transactionType) // Enumeration
		expect(Math.abs((resultObject.effective as Date).getTime() - newObject.effective.getTime())).toBeLessThan(1000) // dateTime
		expect(resultObject.amount).toBe(newObject.amount) // float
		expect(resultObject.invoiceNumber).toBe(newObject.invoiceNumber) // string
		expect(resultObject.coveringId).toBe(newObject.coveringId) // int
		// covering - the type (BillingPeriod) is not matched
	})
})




