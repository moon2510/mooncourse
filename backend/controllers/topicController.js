const Topic = require("../models/topic.model");
// const Lesson = require("../models/lesson.model");
require("dotenv").config();

const topicController = {
  createTopic: async (req, res) => {
    try {
      const { name, description, courseId } = req.body;

      const newTopic = new Topic({
        name,
        description,
        courseId,
      });

      // Save mongodb
      await newTopic.save();

      return res.status(201).json({
        message: "Topic created successfully",
        status: 201,
        topic: newTopic,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getTopics: async (req, res) => {
    try {
      const topic = await Topic.find({
        courseId: req.params.courseId,
      });
      if (topic) {
        res.json(topic);
      } else {
        res.status(404);
        throw new Error("Topic not Found");
      }
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateTopic: async (req, res) => {
    console.log(req.params);
    try {
      // const topic = await Topic.find({
      //   topicId: req.params.topicId,
      // });
      const topicUpdate = await Topic.findByIdAndUpdate(
        {
          _id: req.body.topicId,
        },
        {
          name: req.body.name,
        },
        {
          description: req.body.description,
        }
      );

      if (topicUpdate) {
        res.json(topicUpdate);
      } else {
        res.status(404);
        throw new Error("Topic not Found");
      }
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteTopic: async (req, res) => {
    try {
      const topicDelete = await Topic.findByIdAndDelete({
        _id: req.body.topicId,
      });

      if (topicDelete) {
        res.json(topicDelete);
      } else {
        res.status(404);
        throw new Error("Topic not Found");
      }
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  upDateTopicIdList: async (req, res) => {
    try {
      const topic = await Topic.find({
        lessonId: req.params.lessonId,
      });

      const topicIdList = await Lesson.findByIdAndUpdate(
        {
          lessonId: req.params.lessonId,
        },
        {
          topicId: topic,
        }
      );

      if (topicIdList) {
        res.json(topicIdList);
      } else {
        res.status(404);
        throw new Error("Topic not Found");
      }
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = topicController;
