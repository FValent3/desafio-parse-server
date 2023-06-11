import Parse from 'parse/node'

const Movies = Parse.Object.extend('Movie', {
  initialize: function (attrs, options) {
    this.set('title', attrs.title)
    this.set('description', attrs.description)
    this.set('poster', attrs.poster)
    this.set('releaseYear', attrs.releaseYear)
  }
})

export default Movies
