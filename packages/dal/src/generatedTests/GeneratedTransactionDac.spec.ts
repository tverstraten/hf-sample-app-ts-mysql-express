/* eslint-disable max-lines-per-function */
/* eslint-disable spellcheck/spell-checker */
/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Transaction } from '@tverstraten/hf-model'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TestHelper } from '@tverstraten/hf-utils'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DacTestHelper } from './DacTestHelper'
import { TransactionDac } from '../TransactionDac'
import { UserDac } from '../UserDac'
import { BillingPeriodDac } from '../BillingPeriodDac'
import { OrganizationDac } from '../OrganizationDac'
import { TransactionType } from '@tverstraten/hf-model'
import { User } from '@tverstraten/hf-model' // TransactionDac

describe('TransactionDac', () => {
	it('create and read basic properties', async () => {
		const currentUser = await DacTestHelper.randomResult(new UserDac(1)) as User
		expect(currentUser).toBeDefined()
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const userDac = new UserDac(currentUser.id)		
		const runDate = new Date()

		const objectDac = new TransactionDac(currentUser.id)
		const newObject = new Transaction()
		newObject.createdById = -1
		newObject.lastUpdatedById = -1
		newObject.isDeleted = false
		newObject.withinOrganizationId = await DacTestHelper.randomResultId(new OrganizationDac(currentUser.id)) // int
		newObject.transactionType = TestHelper.randomEnum(TransactionType) // enumeration
		newObject.effective = new Date(Math.round(Math.random() * 10000000)) // dateTime
		newObject.amount = Math.round(Math.random() * Number.MAX_SAFE_INTEGER) / 100 // float
		newObject.invoiceNumber = TestHelper.randomString(128) // string
		newObject.coveringId = await DacTestHelper.randomResultId(new BillingPeriodDac(currentUser.id)) // int

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
		// withinOrganization - the type (Organization) is not being tested
		expect(resultObject.transactionType).toBe(newObject.transactionType) // Enumeration
		expect(Math.abs((resultObject.effective as Date).getTime() - newObject.effective.getTime())).toBeLessThan(1000) // dateTime
		expect(resultObject.amount).toBe(newObject.amount) // float
		expect(resultObject.invoiceNumber).toBe(newObject.invoiceNumber) // string
		expect(resultObject.coveringId).toBe(newObject.coveringId) // int
		// covering - the type (BillingPeriod) is not being tested
	})
	
	it('read one and change basic properties', async () => {
		const currentUser = await DacTestHelper.randomResult(new UserDac(1)) as User
		expect(currentUser).toBeDefined()
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const userDac = new UserDac(currentUser.id)
		const runDate = new Date()

		const objectDac = new TransactionDac(currentUser.id)
		const initialRead = await objectDac.findBy('1=1 and isDeleted=0', [], [], [], 1, 1)
		const readObject = initialRead.rows[0]
		readObject.lastUpdatedById = -1
		readObject.withinOrganizationId = await DacTestHelper.randomResultId(new OrganizationDac(currentUser.id)) // int
		readObject.transactionType = TestHelper.randomEnum(TransactionType) // enumeration
		readObject.effective = new Date(Math.round(Math.random() * 10000000)) // dateTime
		readObject.amount = Math.round(Math.random() * Number.MAX_SAFE_INTEGER) / 100 // float
		readObject.invoiceNumber = TestHelper.randomString(128) // string
		readObject.coveringId = await DacTestHelper.randomResultId(new BillingPeriodDac(currentUser.id)) // int

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
		expect(resultObject.withinOrganizationId).toBe(readObject.withinOrganizationId) // int
		// withinOrganization - the type (Organization) is not being tested
		expect(resultObject.transactionType).toBe(readObject.transactionType) // Enumeration
		expect(Math.abs((resultObject.effective as Date).getTime() - readObject.effective.getTime())).toBeLessThan(1000) // dateTime
		expect(resultObject.amount).toBe(readObject.amount) // float
		expect(resultObject.invoiceNumber).toBe(readObject.invoiceNumber) // string
		expect(resultObject.coveringId).toBe(readObject.coveringId) // int
		// covering - the type (BillingPeriod) is not being tested
	})
})



