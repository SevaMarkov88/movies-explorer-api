const router = require('express').Router();
const auth = require('../middlewares/auth');
const {
  getUsers,
  getUser,
  getUserById,
  updateUserInfo,
} = require('../controllers/users');
const { userUpdateValidation, validateIdParameter } = require('../middlewares/validationJoi');

router.get('/', auth, getUsers);
router.get('/me', auth, getUser);
router.get('/:userId', auth, validateIdParameter('userId'), getUserById);
router.patch('/me', auth, userUpdateValidation, updateUserInfo);

module.exports = router;
