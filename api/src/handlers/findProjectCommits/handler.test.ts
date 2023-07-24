import findProjectCommits from '.'

const PROJECT_URL = 'https://github.com/Carlos0934/github-history-tracker'
const USERNAME = 'Carlos0934'

test('should be implemented', async () => {
    await findProjectCommits({
        url: PROJECT_URL,
        username: USERNAME,
        pagination: {
            page: 1,
            perPage: 1,
        },
    })
})
