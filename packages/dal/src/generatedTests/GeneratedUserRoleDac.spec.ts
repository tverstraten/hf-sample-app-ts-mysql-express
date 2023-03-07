/* eslint-disable max-lines-per-function */
/* eslint-disable spellcheck/spell-checker */
/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { UserRole } from '@tverstraten/hf-model'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TestHelper } from '@tverstraten/hf-utils'
import { DacTestHelper } from './DacTestHelper'
import { UserRoleDac } from '../UserRoleDac'
import { UserDac } from '../UserDac'

describe('UserRoleDac', () => {
	it('create and read basic properties', async () => {
		const userDac = new UserDac(1)
		const currentUser = await userDac.findOneById(1)
		expect(currentUser).toBeDefined()
		const runDate = new Date()

		const objectDac = new UserRoleDac(1)
		const newObject = new UserRole()
		newObject.createdById = -1
		newObject.userId = await DacTestHelper.firstResultId(new UserDac(1)) // int
		newObject.roleId = await DacTestHelper.firstResultId(new UserDac(1)) // int

		const results = await objectDac.createAndReturn([newObject])
		expect(results.length).toBe(1)
		const resultObject = results[0]
		expect(resultObject.id).toBeGreaterThan(0)
		expect(resultObject.createdById).toBe(objectDac.userId)
		expect(Math.abs((resultObject.createdOn as Date).getTime() - runDate.getTime())).toBeLessThan(1000)
		expect(resultObject.userId).toBe(newObject.userId) // int
		// user - the type (User) is not matched
		expect(resultObject.roleId).toBe(newObject.roleId) // int
		// role - the type (User) is not matched
	})
})




