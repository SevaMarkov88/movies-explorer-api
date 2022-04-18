const Movie = require('../model/movie');
const BadRequestErr = require('../errors/BadRequestError');
const NotFoundError = require('../errors/NotFoundError');
const ForbiddenErr = require('../errors/ForbiddenError');

module.exports.getMovies = (req, res, next) => {
  const owner = req.user._id;

  Movie.find({ owner })
    .then((movies) => res.status(200).send(movies))
    .catch(next);
};

module.exports.postMovie = (req, res, next) => {
  const {
    country, director, duration, year, description,
    image, trailer, nameRU, nameEN, thumbnail, movieId,
  } = req.body;
  const ownerId = req.user._id;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
    owner: ownerId,
  })
    .then((movie) => res.status(200).send({ movie }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new BadRequestErr('Переданы некорректные данные.');
      }
      return next(err);
    })
    .catch(next);
};

module.exports.deleteMovie = (req, res, next) => {
  Movie.findById(req.params.movieId).select('+owner')
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError('Вильм не найден');
      } else if (movie.owner.toString() !== req.user._id) {
        throw new ForbiddenErr('Фильм добавил другой пользователь. Невозможно удалить');
      }

      Movie.findByIdAndDelete(req.params.movieId).select('-owner')
        .then((deletedMovie) => res.status(200).send(deletedMovie));
    })
    .catch(next);
};
