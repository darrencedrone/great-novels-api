const express = require('express')
const { getAllAuthors, getAuthorByIdWithNovelsAndGenres } = require('./controllers/authors')
const { getAllGenres, getGenresByIdWithNovelsAndWithAuthors } = require('./controllers/genres')
const { getAllNovels, getNovelByIdWithAuthorsAndWithGenres } = require('./controllers/novels')

const app = express()

app.get('/authors', getAllAuthors)

app.get('/authors/:id', getAuthorByIdWithNovelsAndGenres)

app.get('/genres', getAllGenres)

app.get('/genres/:id', getGenresByIdWithNovelsAndWithAuthors)

app.get('/novels', getAllNovels)

app.get('/novels/:id', getNovelByIdWithAuthorsAndWithGenres)

app.listen(1974, () => {
  console.log('Listening on port 1974...')
})
