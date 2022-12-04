var express = require('express');
var router = express.Router();


const courseControllers = require('../controllers/courseController')
const auth = require('../middleware/auth')

router.post('/createCourse', courseControllers.createCourse)
router.get('/myCourse', courseControllers.getCourse)

// router.post('/login', userCtrl.login)

// router.get('/logout', userCtrl.logout)


// router.get('/infor', auth,  userCtrl.getUser)

// router.get('/history', auth, userCtrl.history)


module.exports = router

