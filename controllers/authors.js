const models = require('../models')

const getAllAuthors = async (request, response) => {
  const authors = await models.Authors.findAll()

  return response.send(authors)
}

const getAuthorSearchByIdWithNovelsAndGenres = async (request, response) => {
  try {
    const { searchValue } = request.params

    const author = await models.Authors.findOne({
      where: {
        [models.Op.or]: [
          { id: searchValue },
          { nameLast: { [models.Op.like]: `%${searchValue}%` } }
        ]
      },
      include: [
        {
          model: models.Novels,
          include: [
            { model: models.Genres }
          ]
        }]
    })

    return author
      ? response.send(author)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to find author')
  }
}

module.exports = { getAllAuthors, getAuthorSearchByIdWithNovelsAndGenres }
