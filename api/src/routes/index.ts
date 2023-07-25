import { Hono } from 'hono'
import commitRouter from './commits'

const router = new Hono()

router.route('/commits', commitRouter)

export default router
