// Given a GitHub URL, returns the owner and repo name
function parseGitHubURL(url: string) {
    const parsed = new URL(url)
    const [, owner, repository] = parsed.pathname.split('/')
    return {
        owner,
        repository,
    }
}

export default parseGitHubURL
