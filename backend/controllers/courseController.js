const Course = require("../models/course.model");
require("dotenv").config();

const courseControllers = {
  createCourse: async (req, res) => {
    try {
      const {
        name,
        description,
        level,
        numberLesson,
        numberLearner,
        rating,
        price,
        authorId,
        image,
      } = req.body;

      const newCourse = new Course({
        name,
        description,
        level,
        numberLesson,
        numberLearner,
        rating,
        price,
        authorId,
        image,
      });

      // Save mongodb
      await newCourse.save();
      return res.status(201).json({
        message: "Course created successfully",
        status: 201,
        course: newCourse,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getCourse: async (req, res) => {
    try {
      const courses = await Course.find({
        authorId: req.params.authorId
      });
      if (courses) {
        res.json(courses);
      } else {
        res.status(404);
        throw new Error("Courses not Found");
      }
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getAllCourse:  async (req, res) => {
    try {
      const courses = await Course.find({});
      if (courses) {
        res.json(courses);
      } else {
        res.status(404);
        throw new Error("Courses not Found");
      }
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = courseControllers;
