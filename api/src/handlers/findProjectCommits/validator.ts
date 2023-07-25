import { z, Schema } from 'zod'
import { FindProjectCommitsRequest } from '.'
import { zValidator } from '@hono/zod-validator'

const findProjectCommitsRequestSchema: Schema<FindProjectCommitsRequest> =
    z.object({
        url: z.string(),
        branch: z.string().optional(),
        pagination: z.object({
            page: z.number(),
            perPage: z.number(),
        }),
    })

const findProjectCommitsRequestValidator = zValidator(
    'json',
    findProjectCommitsRequestSchema,
)

export default findProjectCommitsRequestValidator
