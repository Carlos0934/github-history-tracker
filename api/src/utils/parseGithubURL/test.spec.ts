import parseGitHubURL from '.'
import { PROJECT_REPO, PROJECT_URL, PROJECT_USERNAME } from '../../consts'

test('should return the correct repo and owner', () => {
    const { repository, owner } = parseGitHubURL(PROJECT_URL)

    expect(repository).toBe(PROJECT_REPO)
    expect(owner).toBe(PROJECT_USERNAME)
})
