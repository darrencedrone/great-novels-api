const Sequelize = require('sequelize')
const AuthorsModel = require('./authors')
const GenresModel = require('./genres')
const NovelsModel = require('./novels')
const NovelsGenresModel = require('./novelsgenres')

const connection = new Sequelize('greatauthors', 'greatauthors', 'b3tt3rth@nth3m0v13!', {
  host: 'localhost', dialect: 'mysql'
})

const Authors = AuthorsModel(connection, Sequelize)
const Genres = GenresModel(connection, Sequelize)
const Novels = NovelsModel(connection, Sequelize, Authors)
const NovelsGenres = NovelsGenresModel(connection, Sequelize, Genres, Novels)

Authors.hasMany(Novels)
Novels.belongsTo(Authors)

Genres.belongsToMany(Novels, { through: NovelsGenres })
Novels.belongsToMany(Genres, { through: NovelsGenres })

module.exports = {
  Authors,
  Genres,
  Novels,
  NovelsGenres,
}
