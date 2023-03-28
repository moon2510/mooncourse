const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    courseId: {
      type: String,
    },
    userId: {
      type: String,
    },
    isPaid: {
      type: Boolean,
      default: true
    },
    progress: {
      type: Number,
      default: 0,
    },
    topicIdList: [{ 
      type: String,
      default: []
    }],
    paidAt: {
      type: Number,
      default: 0,
    }
  },
  { timestamps: true }
);

// lessonArray: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson'}],
const TransactionModel = mongoose.model("Transaction", transactionSchema);

module.exports = TransactionModel;
