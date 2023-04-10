const Lesson = require("../models/lesson.model");
require("dotenv").config();

const lessonControllers = {
  createLesson: async (req, res) => {
    try {
      const { name, knowledge, topicId } = req.body;

      const newLesson = new Lesson({
        name,
        knowledge,
        topicId,
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
  getLessons: async (req, res) => {
    try {
      const lesson = await Lesson.find({
        topicId: req.params.topicId,
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
