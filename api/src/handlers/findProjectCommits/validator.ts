import { z } from 'zod'

import { zValidator } from '@hono/zod-validator'

const findProjectCommitsRequestSchema = z.object({
    url: z.string(),
    branch: z.string().optional(),
    page: z.string().transform((x) => parseInt(x)),
    perPage: z.string().transform((x) => parseInt(x)),
})

const findProjectCommitsRequestValidator = zValidator(
    'query',
    findProjectCommitsRequestSchema,
)

export default findProjectCommitsRequestValidator
