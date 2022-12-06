const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 80
    },
    knowledge:{
        type: String
    },
    lessonId:{
        type: String
    }

},
    { timestamps: true }
);

const TopicModel = mongoose.model("Topic", topicSchema);

module.exports = TopicModel;