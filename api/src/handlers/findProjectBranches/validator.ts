import { z } from 'zod'

import { zValidator } from '@hono/zod-validator'

const findProjectBranchesRequestSchema = z.object({
    url: z.string(),
})

const findProjectCommitsRequestValidator = zValidator(
    'query',
    findProjectBranchesRequestSchema,
)

export default findProjectCommitsRequestValidator
