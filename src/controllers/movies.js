import Movies from '@models/movies'
import Parse from 'parse/node'

const MoviesController = {
  async index (req, res) {
    const query = new Parse.Query('Movie')

    try {
      const movies = await query.find()
      return res.status(200).json(movies)
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error', message: error.message })
    }
  },

  async show (req, res) {
    const movieId = req.params
    const query = new Parse.Query('Movie')

    try {
      const movie = await query.get(movieId)

      if (!movie) {
        return res.status(400).json({ error: "Wrong Id or doesn't exist" })
      }

      return res.status(200).json(movie)
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error', message: error.message })
    }
  },

  async store (req, res) {
    const { title, description, poster, releaseYear } = req.body

    const movie = new Movies(title, description, poster, releaseYear)

    try {
      await movie.save()
      return res.status(201).json(movie)
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error', message: error.message })
    }
  },

  async update (req, res) {
    const movieId = req.params
    const updatedFields = req.body

    const query = new Parse.Query('Movie')

    try {
      const movie = await query.get(movieId)

      if (!movie) {
        return res.status(400).json({ error: "Wrong Id or doesn't exist" })
      }

      for (const field of updatedFields) {
        movie.set(field, updatedFields[field])
      }

      await movie.save()
      return res.status(200).json(movie)
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error', message: error.message })
    }
  },

  async destroy (req, res) {
    const movieId = req.params
    const query = new Parse.Query('Movie')

    try {
      const movie = await query.get(movieId)

      if (!movie) {
        return res.status(400).json({ error: "Wrong Id or doesn't exist" })
      }

      await movie.destroy()
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error', message: error.message })
    }
  }
}

export { MoviesController }
