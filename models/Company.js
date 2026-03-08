import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
  name: String,
  role: String,
  skillsRequired: [String],
  location: String,
  deadline: Date,
});

export default mongoose.models.Company || mongoose.model("Company", CompanySchema);

