const Topic = require("../models/topic.model");
const Lesson = require("../models/lesson.model");
require("dotenv").config();

const topicController = {
  createTopic: async (req, res) => {
    try {
      const {
        name,
        knowledge,
        lessonId
      } = req.body;

      const newTopic = new Topic({
        name,
        knowledge,
        lessonId
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
  getTopic: async (req, res) => {
    try {
      const topic = await Topic.find({
        lessonId: req.params.lessonId
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
  upDateTopicIdList: async (req,res) => {
    try {
      const topic = await Topic.find({
        lessonId: req.params.lessonId
      });

      const topicIdList = await Lesson.findByIdAndUpdate({
        lessonId: req.params.lessonId
      },{
        topicId: topic
      })

      if (topicIdList) {
        res.json(topicIdList);
      } else {
        res.status(404);
        throw new Error("Topic not Found");
      }

    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }
};

module.exports = topicController;
