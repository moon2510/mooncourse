const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        maxlength: 80
    },
    description: {
        type: String,
        required: [true, 'Please provide description for course'],
        maxlength: 200
    },
    level: {
        type: String,
        require: true,
        maxlength: 50
    },
    numberLesson: {
        type: Number,
        require: true,
        default:0
    },
    numberLearner: {
        type: Number,
        require: true,
        default:0
    },
    rating: {
        type: Number,
        require: true,
        default:4.0
    },
    price: {
        type: Number,
        required: [true, 'Please provide price for course'],
    },
    authorId:{
        type: String,
        required: [true],
    },
    image:{
        type: String,
        required: [true],
    }

},
    { timestamps: true }
);

const CourseModel = mongoose.model("Course", courseSchema);

module.exports = CourseModel;