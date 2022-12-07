var express = require('express');
var router = express.Router();


const courseControllers = require('../controllers/courseController')
const auth = require('../middleware/auth')

// router.post('/joinCourse', courseControllers.createCourse)
router.get('/courseLearner', courseControllers.getAllCourse)
// router.get('/myCourse/:authorId', courseControllers.getCourse)

// router.get('/infor', auth,  userCtrl.getUser)

// router.get('/history', auth, userCtrl.history)


module.exports = router
