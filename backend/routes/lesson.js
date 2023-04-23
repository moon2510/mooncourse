var express = require("express");
var router = express.Router();

const lessonControllers = require("../controllers/lessonController");
const auth = require("../middleware/auth");

router.post("/createLesson", auth, lessonControllers.createLesson);
router.get("/getLessons/:topicId", lessonControllers.getLessons);
// router.get('/myCourse/:authorId', courseControllers.getCourse)

module.exports = router;
