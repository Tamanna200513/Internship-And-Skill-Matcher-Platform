import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  logo: {
    type: String,
  },

  description: {
    type: String,
  },

  location: {
    type: String,
  },

  careersLink: {
    type: String,
    required: true,
  },

  skillsRequired: [
    {
      type: String,
    },
  ],

  category: {
    type: String,
  },

  companyType: {
    type: String,
  },

  eligibility: {
    qualification: {
      type: String,
    },
    batch: {
      type: String,
    },
    marksCriteria: {
      type: String,
    },
    backlogCriteria: {
      type: String,
    },
  },

  rolesOffered: [
    {
      type: String,
    },
  ],

  benefits: [
    {
      type: String,
    },
  ],

  rounds: [
    {
      title: {
        type: String,
      },
      description: {
        type: String,
      },
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Company ||
  mongoose.model("Company", CompanySchema);