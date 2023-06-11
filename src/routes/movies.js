import { MoviesController } from '@controllers/movies'

export function moviesRoutes (router) {
  router.get('/movies', MoviesController.index)
  router.get('/movies/:id', MoviesController.show)
  router.post('/movies', MoviesController.store)
  router.put('/movies/:id', MoviesController.update)
  router.delete('/movies/:id', MoviesController.destroy)
}
