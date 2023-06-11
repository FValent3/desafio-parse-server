import { faker } from '@faker-js/faker'
import Movie from '@models/movies'

export async function generateMovies (nMovies) {
  for (let i = 0; i < nMovies; i++) {
    const movieData = {
      title: faker.lorem.words(),
      description: faker.lorem.sentences(),
      poster: faker.image.url(),
      releaseYear: faker.number.int({ min: 1800, max: 2023 })
    }

    const movie = new Movie(movieData)

    try {
      await movie.save()
    } catch (error) {
      console.log(error)
    }
  }
}
