import { z } from 'zod'

import { zValidator } from '@hono/zod-validator'

const findProjectBranchesRequestSchema = z.object({
    url: z.string(),
})

const findProjectBranchesValidator = zValidator(
    'query',
    findProjectBranchesRequestSchema,
)

export default findProjectBranchesValidator
