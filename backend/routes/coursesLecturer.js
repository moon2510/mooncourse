var express = require('express');
var router = express.Router();


const courseControllers = require('../controllers/courseController')
const auth = require('../middleware/auth')

router.post('/createCourse', courseControllers.createCourse)
router.get('/myCourse/:authorId', courseControllers.getCourse)

// router.get('/infor', auth,  userCtrl.getUser)

// router.get('/history', auth, userCtrl.history)


module.exports = router

