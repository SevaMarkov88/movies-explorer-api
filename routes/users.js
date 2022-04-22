const router = require('express').Router();
const {
  getUser,
  updateUserInfo,
} = require('../controllers/users');
const { userUpdateValidation } = require('../middlewares/validationJoi');

router.get('/me', getUser);
router.patch('/me', userUpdateValidation, updateUserInfo);

module.exports = router;
