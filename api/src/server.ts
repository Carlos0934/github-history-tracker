import router from './routes'
import { serve } from '@hono/node-server'
import { Hono } from 'hono'

function startServer() {
    const app = new Hono()

    const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000

    app.route('/api', router)

    const server = serve({
        port: port,
        fetch: app.fetch,
    })

    server.addListener('listening', () => {
        console.log(`Server listening on http://localhost:${port}`)
    })

    return
}

export default startServer
