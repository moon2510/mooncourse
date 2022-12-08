const Transaction = require("../models/transaction.model");
require("dotenv").config();

const transactionControllers = {
  createTransaction: async (req, res) => {
    try {
      const { courseId, userId, isPaid, progress, topicIdList, paidAt } =
        req.body;

      const transaction = await Transaction.find({
        courseId: courseId,
        userId: userId,
      });
      console.log("len", transaction.length);
      if (!transaction.length == 0) {
        console.log("Transaction exists");
      } else {
        console.log("No transaction");
        const newTransaction = new Transaction({
          courseId,
          userId,
          isPaid,
          progress,
          topicIdList,
          paidAt,
        });

        // Save mongodb
        await newTransaction.save();
        return res.status(201).json({
          message: "Transaction created successfully",
          status: 201,
          transaction: newTransaction,
        });
      }
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  //   getCourse: async (req, res) => {
  //     try {
  //       const courses = await Course.find({
  //         authorId: req.params.authorId
  //       });
  //       if (courses) {
  //         res.json(courses);
  //       } else {
  //         res.status(404);
  //         throw new Error("Courses not Found");
  //       }
  //     } catch (err) {
  //       return res.status(500).json({ msg: err.message });
  //     }
  //   },
  //   getAllCourse:  async (req, res) => {
  //     try {
  //       const courses = await Course.find({});
  //       if (courses) {
  //         res.json(courses);
  //       } else {
  //         res.status(404);
  //         throw new Error("Courses not Found");
  //       }
  //     } catch (err) {
  //       return res.status(500).json({ msg: err.message });
  //     }
  //   },
};

module.exports = transactionControllers;
