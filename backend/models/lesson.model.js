const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 80
    },
    knowledge:{
        type: String
    },
    topicId:{
        type: String
    }

},
    { timestamps: true }
);

const LessonModel = mongoose.model("Lesson", lessonSchema);

module.exports = LessonModel;