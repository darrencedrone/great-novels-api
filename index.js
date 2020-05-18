const express = require('express')
const { getAllAuthors, getAuthorSearchByIdWithNovelsAndGenres } = require('./controllers/authors')
const { getAllGenres, getGenresByIdWithNovelsAndWithAuthors } = require('./controllers/genres')
const { getAllNovels, getNovelBySearchValueWithAuthorsAndWithGenres } = require('./controllers/novels')

const app = express()

app.get('/authors', getAllAuthors)

app.get('/authors/:searchValue', getAuthorSearchByIdWithNovelsAndGenres)

app.get('/genres', getAllGenres)

app.get('/genres/:id', getGenresByIdWithNovelsAndWithAuthors)

app.get('/novels', getAllNovels)

app.get('/novels/:searchValue', getNovelBySearchValueWithAuthorsAndWithGenres)

app.listen(1974, () => {
  console.log('Listening on port 1974...')
})
