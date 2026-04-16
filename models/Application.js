import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  status: {
    type: String,
    default: "Applied", // Applied, Selected, Rejected
  },
}, { timestamps: true });

export default mongoose.models.Application || mongoose.model("Application", ApplicationSchema);