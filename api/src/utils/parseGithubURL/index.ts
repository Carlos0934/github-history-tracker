// Given a GitHub URL, returns the owner and repo name
function parseGitHubURL(url: string) {
    const parsed = new URL(url)
    const [, owner, repo] = parsed.pathname.split('/')
    return {
        owner,
        repo,
    }
}

export default parseGitHubURL
