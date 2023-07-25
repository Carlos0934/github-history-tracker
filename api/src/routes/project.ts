import { Hono } from 'hono'
import findProjectCommitsRequestValidator from '../handlers/findProjectCommits/validator'
import findProjectCommits, {
    FindProjectCommitsRequest,
} from '../handlers/findProjectCommits'

const projectRouter = new Hono()

projectRouter.get(
    '/commits',
    findProjectCommitsRequestValidator,
    async (ctx) => {
        const { url, branch, page, perPage } = ctx.req.valid('query')
        const req: FindProjectCommitsRequest = {
            url,
            branch,
            pagination: {
                page,
                perPage,
            },
        }

        const res = await findProjectCommits(req)

        return ctx.json(res)
    },
)
export default projectRouter
