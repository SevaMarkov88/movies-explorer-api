const router = require('express').Router();
const auth = require('../middlewares/auth');
const {
  getMovies,
  postMovie,
  deleteMovie,
} = require('../controllers/movies');
const { validateIdParameter, movieValidation } = require('../middlewares/validationJoi');

router.get('/', auth, getMovies);
router.post('/', auth, movieValidation, postMovie);
router.delete('/:movieId', auth, validateIdParameter('movieId'), deleteMovie);

module.exports = router;
