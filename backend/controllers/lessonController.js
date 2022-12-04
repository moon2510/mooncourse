const Lesson = require("../models/lesson.model");
require("dotenv").config();

const lessonControllers = {
  createCourse: async (req, res) => {
    try {
      const {
        name,
        description,
      } = req.body;

      const newLesson = new Lesson({
        name,
        description
      });

      // Save mongodb
      await newLesson.save();
      return res.status(201).json({
        message: "Lesson created successfully",
        status: 201,
        course: newLesson,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
//   getLesson: async (req, res) => {
//     try {
//       const courses = await Course.find({
//         authorId: req.params.authorId
//       });
//       if (courses) {
//         res.json(courses);
//       } else {
//         res.status(404);
//         throw new Error("Courses not Found");
//       }
//       // console.log("NIIIII", store.get("userID"));
//     } catch (err) {
//       return res.status(500).json({ msg: err.message });
//     }
//   },
};

module.exports = lessonControllers;
