import findProjectCommits from '.'
import { PROJECT_URL, PROJECT_USERNAME } from '../../consts'

test('should be implemented', async () => {
    await findProjectCommits({
        url: PROJECT_URL,
        pagination: {
            page: 1,
            perPage: 1,
        },
    })
})

test('should commit author be the same as username', async () => {
    const res = await findProjectCommits({
        url: PROJECT_URL,
        pagination: {
            page: 1,
            perPage: 1,
        },
    })

    const commit = res.commits[0]

    expect(commit.author.login).toBe(PROJECT_USERNAME)
})

test('should commit project url be the same as project url', async () => {
    const res = await findProjectCommits({
        url: PROJECT_URL,
        pagination: {
            page: 1,
            perPage: 1,
        },
    })

    const commit = res.commits[0]

    expect(commit.url).toBe(PROJECT_URL)
})
