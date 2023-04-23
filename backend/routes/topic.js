var express = require("express");
var router = express.Router();

const topicController = require("../controllers/topicController");
const auth = require("../middleware/auth");

router.post("/create_topic", auth, topicController.createTopic);
router.get("/gettopics/:courseId", topicController.getTopics);
router.put("/update_topic", auth, topicController.updateTopic);
router.post("/delete_topic", auth, topicController.deleteTopic);
// router.get("/getTopic/:lessonId", topicController.get);
// router.get('/myCourse/:authorId', courseControllers.getCourse)

module.exports = router;
