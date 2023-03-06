/* eslint-disable max-lines-per-function */
/* eslint-disable spellcheck/spell-checker */
/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Transaction } from '@tverstraten/hf-model'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TestHelper } from '@tverstraten/hf-utils'
import { TransactionDac } from '../TransactionDac'
import { UserDac } from '../UserDac'
import { TransactionType } from '@tverstraten/hf-model'

describe('TransactionDac', () => {
	it('create and read basic properties', async () => {
		const userDac = new UserDac(1)
		const currentUser = await userDac.findOneById(1)
		expect(currentUser).toBeDefined()

		const objectDac = new TransactionDac(1)

		const newObject = new Transaction()
		newObject.createdById = currentUser.id
		newObject.lastUpdatedById = currentUser.id
		newObject.isDeleted = false
		newObject.withinOrganizationId = Math.round(Math.random() * Number.MAX_SAFE_INTEGER) 
		newObject.transactionType = TestHelper.randomEnum(TransactionType) 
		newObject.effective = new Date(Math.round(Math.random() * 10000000))
		newObject.amount = Math.random() * Number.MAX_SAFE_INTEGER 
		newObject.invoiceNumber = TestHelper.randomString(128) 
		newObject.coveringId = Math.round(Math.random() * Number.MAX_SAFE_INTEGER) 

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
		expect(resultObject.withinOrganizationId).toBe(newObject.withinOrganizationId)
		expect(resultObject.transactionType).toBe(newObject.transactionType)
		expect(resultObject.effective).toBe(newObject.effective)
		expect(resultObject.amount).toBe(newObject.amount)
		expect(resultObject.invoiceNumber).toBe(newObject.invoiceNumber)
		expect(resultObject.coveringId).toBe(newObject.coveringId)
	})
})




