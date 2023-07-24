import parseGitHubURL from '.'
import { PROJECT_REPO, PROJECT_URL, PROJECT_USERNAME } from '../../consts'

test('should return the correct repo and owner', () => {
    const { repo, owner } = parseGitHubURL(PROJECT_URL)

    expect(repo).toBe(PROJECT_REPO)
    expect(owner).toBe(PROJECT_USERNAME)
})
