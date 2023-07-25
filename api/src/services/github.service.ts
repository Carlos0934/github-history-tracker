import { Branch, Commit, Pagination } from '../types'

interface FindCommitsParams {
    repository: string
    owner: string
    branch?: string
    pagination: Pagination
}
interface FindBranchesParams {
    repository: string
    owner: string
}
export class GithubService {
    constructor(private readonly token: string) {}
    async findCommits({
        repository,
        owner,
        pagination,
        branch,
    }: FindCommitsParams): Promise<Commit[]> {
        const url = `https://api.github.com/repos/${owner}/${repository}/commits`
        const query = new URLSearchParams({
            page: pagination.page.toString(),
            per_page: pagination.perPage.toString(),
            ...(branch && { sha: branch }),
        })

        const res = await fetch(`${url}?${query}`, {
            headers: {
                Authorization: `Bearer  ${this.token}`,
            },
        })

        // Return empty array if not authorized to access the repository
        // or if the branch does not exist or if the repository is empty
        if (res.status === 401 || res.status === 409) return []

        if (!res.ok) {
            console.error('Error fetching commits', res.status)
            const error = await res.json()
            console.error('Error fetching commits', error)
            throw new Error('Error fetching commits')
        }

        const commits = await res.json()

        return commits.map(this.mapResponseToCommit)
    }

    async findBranches({
        repository,
        owner,
    }: FindBranchesParams): Promise<Branch[]> {
        const url = `https://api.github.com/repos/${owner}/${repository}/branches`

        const res = await fetch(url, {
            headers: {
                Authorization: `Bearer  ${this.token}`,
            },
        })

        // Return empty array if not authorized to access the repository

        if (res.status === 401) return []

        if (!res.ok) {
            console.error('Error fetching branches', res.status)
            const error = await res.json()
            console.error('Error fetching branches', error)
            throw new Error('Error fetching branches')
        }

        const branches = await res.json()

        return branches
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private mapResponseToCommit(commit: any): Commit {
        return {
            author: {
                login: commit.author.login,
                id: commit.author.id,
                node_id: commit.author.node_id,
                avatar_url: commit.author.avatar_url,
                url: commit.author.url,
            },
            commit: {
                author: commit.commit.author,
                message: commit.commit.message,
                url: commit.commit.url,
            },
            node_id: commit.node_id,
            sha: commit.sha,
            url: commit.url,
        }
    }
}
