import { MoviesController } from '@controllers/movies'

export function moviesRoutes (router) {
  router.get('/movies', MoviesController.index)
  router.get('/movies/search', MoviesController.show)
  router.post('/movies', MoviesController.store)
  router.put('/movies/:movieId', MoviesController.update)
  router.delete('/movies/:movieId', MoviesController.destroy)
}
