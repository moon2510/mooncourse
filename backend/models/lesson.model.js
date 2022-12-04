const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 80
    },
    description:{
        type: String
    },
    courseID:{
        type: String
    }

},
    { timestamps: true }
);

const LessonModel = mongoose.model("Lesson", lessonSchema);

module.exports = LessonModel;