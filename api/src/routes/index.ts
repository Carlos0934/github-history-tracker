import { Hono } from 'hono'
import { cors } from 'hono/cors'
import projectRouter from './project'

const router = new Hono()

router.use('*', cors())
router.route('/projects', projectRouter)

export default router
