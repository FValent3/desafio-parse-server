import Parse from 'parse/node'

const Movies = Parse.Object.extend('Movie', {
  initialize: function (attrs, options) {
    this.title = attrs.title
    this.description = attrs.description
    this.poster = attrs.poster
    this.releaseYear = attrs.releaseYear
  }
})

export default Movies
