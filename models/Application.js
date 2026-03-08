import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
  },
  status: {
    type: String,
    default: "Pending",
  },
  appliedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Application ||
  mongoose.model("Application", ApplicationSchema);