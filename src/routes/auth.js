import { authController } from '@controllers'

export function authRoutes (router) {
  router.post('/auth', authController.login)
}
