/* eslint-disable max-lines-per-function */
/* eslint-disable spellcheck/spell-checker */
/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { PersistentBuilderDependency } from '@tverstraten/hf-model'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TestHelper } from '@tverstraten/hf-utils'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DacTestHelper } from './DacTestHelper'
import { PersistentBuilderDependencyDac } from '../PersistentBuilderDependencyDac'
import { UserDac } from '../UserDac'
import { PersistentBuilderVersionDac } from '../PersistentBuilderVersionDac'
import { User } from '@tverstraten/hf-model' // PersistentBuilderDependencyDac

describe('PersistentBuilderDependencyDac', () => {
	it('create and read basic properties', async () => {
		const currentUser = await DacTestHelper.randomResult(new UserDac(1)) as User
		expect(currentUser).toBeDefined()
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const userDac = new UserDac(currentUser.id)		
		const runDate = new Date()

		const objectDac = new PersistentBuilderDependencyDac(currentUser.id)
		const newObject = new PersistentBuilderDependency()
		newObject.createdById = -1
		newObject.builderId = await DacTestHelper.randomResultId(new PersistentBuilderVersionDac(currentUser.id)) // int
		newObject.dependentOnId = await DacTestHelper.randomResultId(new PersistentBuilderVersionDac(currentUser.id)) // int

		const results = await objectDac.createAndReturn([newObject])
		expect(results.length).toBe(1)
		const resultObject = results[0]
		expect(resultObject.id).toBeGreaterThan(0)
		expect(resultObject.createdById).toBe(objectDac.userId)
		expect(Math.abs((resultObject.createdOn as Date).getTime() - runDate.getTime())).toBeLessThan(1000)
		expect(resultObject.builderId).toBe(newObject.builderId) // int
		// builder - the type (PersistentBuilderVersion) is not being tested
		expect(resultObject.dependentOnId).toBe(newObject.dependentOnId) // int
		// dependentOn - the type (PersistentBuilderVersion) is not being tested
	})
	
})



