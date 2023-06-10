import setupMiddlewares from '@config/middlewares'
import setupServer from '@config/server'
import express from 'express'

const app = express()
setupMiddlewares(app)
setupServer(app)

export default app