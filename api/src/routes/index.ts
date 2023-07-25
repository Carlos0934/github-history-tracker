import { Hono } from 'hono'
import projectRouter from './project'

const router = new Hono()

router.route('/projects', projectRouter)

export default router
