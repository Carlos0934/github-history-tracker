export interface Commit {
    url: string
    sha: string
    node_id: string
    commit: GitCommit
    author: CommitAuthor
}

export interface CommitAuthor {
    login: string
    id: number
    node_id: string
    avatar_url: string
    url: string
}

export interface GitCommit {
    url: string
    author: GitCommitAuthor
    message: string
}

export interface GitCommitAuthor {
    name: string
    email: string
    date: Date
}

export interface Pagination {
    page: number
    perPage: number
}

export interface Branch {
    name: string
    commit: BranchCommit
}

export interface BranchCommit {
    sha: string
    url: string
}
