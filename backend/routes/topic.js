var express = require('express');
var router = express.Router();


const topicController = require('../controllers/topicController')
const auth = require('../middleware/auth')

router.post('/createTopic', topicController.createTopic)
router.get('/getTopic/:lessonId', topicController.getTopic)
// router.get('/myCourse/:authorId', courseControllers.getCourse)


module.exports = router

