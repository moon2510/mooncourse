const mongoose = require("mongoose");
const Lesson = require("./lesson.model");
const topicSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 80,
    },
    description: {
      type: String,
    },
    courseId: {
      type: mongoose.Schema.ObjectId,
      ref: "Course",
      required: [true, "You should provide a course"],
    },
    lessonArray: [{ type: mongoose.Schema.Types.ObjectId, ref: Lesson }],
  },
  { timestamps: true }
);



const TopicModel = mongoose.model("Topic", topicSchema);

module.exports = TopicModel;
