const router = require('express').Router();
const {
  getMovies,
  postMovie,
  deleteMovie,
} = require('../controllers/movies');
const { validateIdParameter } = require('../middlewares/validationJoi');

router.get('/', getMovies);
router.post('/', postMovie);
router.delete('/:movieid', validateIdParameter('movieId'), deleteMovie);

module.exports = router;
