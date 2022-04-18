const router = require('express').Router();
const auth = require('../middlewares/auth');
const {
  getMovies,
  postMovies,
  deleteMovies,
} = require('../controllers/movies');
const { validateIdParameter } = require('../middlewares/validationJoi');

router.get('/', auth, getMovies);
router.post('/', auth, postMovies);
router.delete('/_id', auth, validateIdParameter('movieId'), deleteMovies);

module.exports = router;
