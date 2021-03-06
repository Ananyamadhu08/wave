const router = require('express').Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

router.get('/search', auth, userController.searchUser);

router.get('/user/:id', auth, userController.getUser);

router.patch('/user', auth, userController.updateUser);

router.patch('/user/:id/follow', auth, userController.follow);

router.patch('/user/:id/unfollow', auth, userController.unfollow);

router.get('/userSuggestions', auth, userController.suggestedUsers);

module.exports = router;
