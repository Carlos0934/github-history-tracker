import { Commit, Pagination } from '../types'

export interface FindProjectCommitsRequest {
    url: string
    username: string
    branch?: string
    pagination: Pagination
}

export interface FindProjectCommitsResponse {
    commits: Commit[]
}

function findProjectCommits(
    request: FindProjectCommitsRequest,
): Promise<FindProjectCommitsResponse> {
    console.log('findProjectCommits', request)
    throw new Error('Not implemented')
}

export default findProjectCommits
