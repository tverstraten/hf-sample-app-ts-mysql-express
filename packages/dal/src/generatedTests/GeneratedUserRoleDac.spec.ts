/* eslint-disable max-lines-per-function */
/* eslint-disable spellcheck/spell-checker */
/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { UserRole } from '@tverstraten/hf-model'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TestHelper } from '@tverstraten/hf-utils'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DacTestHelper } from './DacTestHelper'
import { UserRoleDac } from '../UserRoleDac'
import { UserDac } from '../UserDac'
import { User } from '@tverstraten/hf-model' // UserRoleDac

describe('UserRoleDac', () => {
	it('create and read basic properties', async () => {
		const currentUser = await DacTestHelper.randomResult(new UserDac(1)) as User
		expect(currentUser).toBeDefined()
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const userDac = new UserDac(currentUser.id)		
		const runDate = new Date()

		const objectDac = new UserRoleDac(currentUser.id)
		const newObject = new UserRole()
		newObject.createdById = -1
		newObject.userId = await DacTestHelper.randomResultId(new UserDac(currentUser.id)) // int
		newObject.roleId = await DacTestHelper.randomResultId(new UserDac(currentUser.id)) // int

		const results = await objectDac.createAndReturn([newObject])
		expect(results.length).toBe(1)
		const resultObject = results[0]
		expect(resultObject.id).toBeGreaterThan(0)
		expect(resultObject.createdById).toBe(objectDac.userId)
		expect(Math.abs((resultObject.createdOn as Date).getTime() - runDate.getTime())).toBeLessThan(1000)
		expect(resultObject.userId).toBe(newObject.userId) // int
		// user - the type (User) is not being tested
		expect(resultObject.roleId).toBe(newObject.roleId) // int
		// role - the type (User) is not being tested

		// test the values again but by reading this getTime
		const reReadObject = await objectDac.findOneById(resultObject.id)
		expect(reReadObject.createdById).toBe(objectDac.userId)
		expect(Math.abs((reReadObject.createdOn as Date).getTime() - runDate.getTime())).toBeLessThan(1000)
		expect(reReadObject.userId).toBe(newObject.userId) // int
		// user - the type (User) is not being tested
		expect(reReadObject.roleId).toBe(newObject.roleId) // int
		// role - the type (User) is not being tested

		// test deep loading the initial values
		const createdByResult = await objectDac.findOneById(resultObject.id, ['createdBy'])
		expect(createdByResult?.createdBy?.id).toBe(resultObject.createdById)
		const userResult = await objectDac.findOneById(resultObject.id, ['user'])
		expect(userResult?.user?.id).toBe(resultObject.userId)
		const roleResult = await objectDac.findOneById(resultObject.id, ['role'])
		expect(roleResult?.role?.id).toBe(resultObject.roleId)
	})
	
})



