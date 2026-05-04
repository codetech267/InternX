const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    college: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    skills: {
      type: String,
      required: true,
    },
    resumeUrl: {
      type: String,
      required: true,
    },
    paymentId: {
      type: String,
      required: false,
      default: "PENDING",
    },
    internshipRole: {
      type: String,
      required: true,
      default: "MERN Stack Developer",
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true },
);

const Application = mongoose.model("Application", applicationSchema);
module.exports = Application;
