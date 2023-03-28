const Lesson = require("../models/topic.model");
require("dotenv").config();

const lessonControllers = {
  createLesson: async (req, res) => {
    try {
      const {
        name,
        description,
        courseId
      } = req.body;

      const newLesson = new Lesson({
        name,
        description,
        courseId
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
  getLesson: async (req, res) => {
    try {
      const lesson = await Lesson.find({
        courseId: req.params.courseId
      });
      if (lesson) {
        res.json(lesson);
      } else {
        res.status(404);
        throw new Error("Lesson not Found");
      }
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = lessonControllers;
