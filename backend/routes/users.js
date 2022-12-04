var express = require('express');
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
const userCtrl = require('../controllers/userController')
const auth = require('../middleware/auth')

router.post('/register', userCtrl.register)
// router.post('/register', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/login', userCtrl.login)

router.get('/logout', userCtrl.logout)


// router.get('/infor', auth,  userCtrl.getUser)

// router.get('/history', auth, userCtrl.history)


module.exports = router

