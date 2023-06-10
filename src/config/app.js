import setupMiddlewares from '@config/middlewares'
import setupRoutes from '@config/routes'
import setupServer from '@config/server'
import express from 'express'

const app = express()
setupMiddlewares(app)
setupServer(app)
setupRoutes(app)

export default app
