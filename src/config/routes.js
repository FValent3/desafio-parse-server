import { authRoutes, moviesRoutes } from '@routes'
import { Router } from 'express'

export default app => {
  const router = new Router()
  authRoutes(router)
  moviesRoutes(router)

  app.use('/', router)
}
