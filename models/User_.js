import mongoose from "mongoose";

const deadlineSchema = new mongoose.Schema({
  company: String,
  date: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  resumeUploaded: Boolean,
  totalApplications: Number,
  upcomingDeadlines: [deadlineSchema], 
});

export default mongoose.models.User ||
  mongoose.model("User", userSchema);
  