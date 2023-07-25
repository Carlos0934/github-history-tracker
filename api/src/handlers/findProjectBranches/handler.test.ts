import findProjectBranches from '.'
import { PROJECT_URL } from '../../consts'

test('should be implemented', async () => {
    await findProjectBranches({
        url: PROJECT_URL,
    })
})

test('should return least one branch', async () => {
    const res = await findProjectBranches({
        url: PROJECT_URL,
    })

    expect(res.branches.length).toBeGreaterThan(0)
})
