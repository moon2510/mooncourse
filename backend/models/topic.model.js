const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 80
    },
    description:{
        type: String
    },
    courseId:{
        type: String
    },
    lessonArray: [{ type: mongoose.Schema.Types.ObjectId, ref: Lesson}],

},
    { timestamps: true }
);

const TopicModel = mongoose.model("Topic", topicSchema);

module.exports = TopicModel;