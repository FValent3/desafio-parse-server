import { authController } from '@controllers/auth'

export function authRoutes (router) {
  router.post('/auth', authController.login)
}
