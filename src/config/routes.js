import { authRoutes } from '@routes'
import { Router } from 'express'

export default app => {
  const router = new Router()
  authRoutes(router)

  app.use('/', router)
}
