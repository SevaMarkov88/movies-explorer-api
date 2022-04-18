const router = require('express').Router();
const auth = require('../middlewares/auth');
const {
  getMovies,
  postMovie,
  deleteMovie,
} = require('../controllers/movies');
const { validateIdParameter } = require('../middlewares/validationJoi');

router.get('/', auth, getMovies);
router.post('/', auth, postMovie);
router.delete('/_id', auth, validateIdParameter('movieId'), deleteMovie);

module.exports = router;
