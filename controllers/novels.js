const models = require('../models')

const getAllNovels = async (request, response) => {
  const novels = await models.Novels.findAll({
    include: [{ model: models.Authors }, { model: models.Genres }]
  })

  return response.send(novels)
}

const getNovelBySearchValueWithAuthorsAndWithGenres = async (request, response) => {
  try {
    const { searchValue } = request.params

    const novel = await models.Novels.findOne({
      where: {
        [models.Op.or]: [
          { id: searchValue },
          { title: { [models.Op.like]: `%${searchValue}%` } }
        ]
      },
      include: [{ model: models.Authors }, { model: models.Genres }]
    })

    return novel
      ? response.send(novel)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to find novel')
  }
}

module.exports = { getAllNovels, getNovelBySearchValueWithAuthorsAndWithGenres }
