import Movie from '@models/movies'
import Parse from 'parse/node'

const MoviesController = {
  async index (req, res) {
    const query = new Parse.Query('Movie')

    try {
      const movies = await query.find()
      const movieData = movies.map(movie => movie.toJSON())

      return res.status(200).json(movieData)
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error', message: error.message })
    }
  },

  async show (req, res) {
    let { title, releaseYear } = req.query
    const query = new Parse.Query('Movie')

    if (!title && !releaseYear) {
      return res.status(400).json({ error: 'You must provide at least one parameter' })
    }

    if (title) {
      query.equalTo('title', title)
    }

    if (releaseYear) {
      releaseYear = parseInt(releaseYear)
      query.equalTo('releaseYear', releaseYear)
    }

    try {
      const movies = await query.find()

      if (!movies) {
        return res.status(400).json({ error: "Wrong Id or doesn't exist" })
      }

      const movieData = movies.map(movie => movie.toJSON())

      return res.status(200).json(movieData)
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error', message: error.message })
    }
  },

  async store (req, res) {
    const { title, description, poster, releaseYear } = req.body

    const movie = new Movie({ title, description, poster, releaseYear })

    try {
      await movie.save()
      return res.status(201).json(movie)
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error', message: error.message })
    }
  },

  async update (req, res) {
    const { movieId } = req.params
    const updatedFields = req.body

    const query = new Parse.Query('Movie')

    try {
      const movie = await query.get(movieId)

      if (!movie) {
        return res.status(400).json({ error: "Wrong Id or doesn't exist" })
      }

      Object.keys(updatedFields).forEach(field => {
        movie.set(field, updatedFields[field])
      })

      await movie.save()
      return res.status(200).json(movie.toJSON())
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error', message: error.message })
    }
  },

  async destroy (req, res) {
    const { movieId } = req.params
    const query = new Parse.Query('Movie')

    try {
      const movie = await query.get(movieId)

      if (!movie) {
        return res.status(400).json({ error: "Wrong Id or doesn't exist" })
      }

      await movie.destroy()
      return res.status(200).json({ message: 'Movie deleted successfully' })
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error', message: error.message })
    }
  }
}

export { MoviesController }
