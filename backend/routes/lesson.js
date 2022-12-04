var express = require('express');
var router = express.Router();


const lessonControllers = require('../controllers/lessonController')
const auth = require('../middleware/auth')

router.post('/createLesson', lessonControllers.createLesson)
// router.get('/myCourse/:authorId', courseControllers.getCourse)


module.exports = router

