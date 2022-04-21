const router = require('express').Router();
const {
  getMovies,
  postMovie,
  deleteMovie,
} = require('../controllers/movies');
const { validateIdParameter, movieValidation } = require('../middlewares/validationJoi');

router.get('/', getMovies);
router.post('/', movieValidation, postMovie);
router.delete('/:movieId', validateIdParameter('movieId'), deleteMovie);

module.exports = router;
