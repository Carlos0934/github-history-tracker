import { githubService } from '../../services'
import { Commit, Pagination } from '../../types'
import parseGitHubURL from '../../utils/parseGithubURL'

export interface FindProjectCommitsRequest {
    url: string
    branch?: string
    pagination: Pagination
}

export interface FindProjectCommitsResponse {
    commits: Commit[]
}

async function findProjectCommits(
    request: FindProjectCommitsRequest,
): Promise<FindProjectCommitsResponse> {
    const { repo, owner } = parseGitHubURL(request.url)

    const commits = await githubService.findCommits({
        owner,
        repository: repo,
        pagination: request.pagination,
        branch: request.branch,
    })

    return { commits }
}

export default findProjectCommits
