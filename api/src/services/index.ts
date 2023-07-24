import { GithubService } from './github.service'

const { GITHUB_TOKEN } = process.env

if (!GITHUB_TOKEN) throw new Error('Missing GITHUB_TOKEN env var')

export const githubService = new GithubService(GITHUB_TOKEN)
