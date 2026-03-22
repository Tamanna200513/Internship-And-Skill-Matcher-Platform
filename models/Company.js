import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  logo: {
    type: String, // image URL
  },

  description: {
    type: String,
  },

  location: {
    type: String,
  },

  careersLink: {
    type: String, // redirect to official site
    required: true,
  },

  skillsRequired: [
    {
      type: String, // e.g. "React", "Node.js"
    },
  ],

  category: {
    type: String, // e.g. "Frontend", "Backend", "Full Stack"
  },

  rounds: [
    {
      type: String, // short description of hiring rounds
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Company ||
  mongoose.model("Company", CompanySchema);