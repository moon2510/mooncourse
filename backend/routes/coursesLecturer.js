var express = require("express");
var router = express.Router();

const courseControllers = require("../controllers/courseController");
const auth = require("../middleware/auth");

router.post("/createCourse", auth, courseControllers.createCourse);
router.get("/myCourse/:authorId", auth, courseControllers.getCourse);
// router.put('/myCourse/:courseId', courseControllers.updateLessonNumber)
// router.get('/infor', auth,  userCtrl.getUser)

// router.get('/history', auth, userCtrl.history)

module.exports = router;
