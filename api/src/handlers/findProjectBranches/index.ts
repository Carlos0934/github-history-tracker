import { githubService } from '../../services'
import { Branch } from '../../types'
import parseGitHubURL from '../../utils/parseGithubURL'

export interface FindProjectBranchesRequest {
    url: string
}

export interface FindProjectBranchResponse {
    branches: string[]
}

export default async function findProjectBranches(
    req: FindProjectBranchesRequest,
): Promise<FindProjectBranchResponse> {
    const { url } = req

    const { owner, repository } = parseGitHubURL(url)
    const branches: Branch[] = await githubService.findBranches({
        owner,
        repository,
    })

    const branchNames = branches.map((branch) => branch.name)

    return {
        branches: branchNames,
    }
}
