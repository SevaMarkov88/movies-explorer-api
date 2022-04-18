const router = require('express').Router();
const auth = require('../middlewares/auth');
const {
  getUser,
  updateUserInfo,
} = require('../controllers/users');
const { userUpdateValidation } = require('../middlewares/validationJoi');

router.get('/me', auth, getUser);
router.patch('/me', auth, userUpdateValidation, updateUserInfo);

module.exports = router;
