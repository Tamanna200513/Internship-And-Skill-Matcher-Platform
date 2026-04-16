import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  logo: {
    type: String,
    default: "",
  },

  description: {
    type: String,
    default: "",
  },

  location: {
    type: String,
    default: "",
  },

  careersLink: {
    type: String,
    required: true,
    trim: true,
  },

  skillsRequired: [
    {
      type: String,
      trim: true,
    },
  ],

  category: {
    type: String,
    default: "",
    trim: true,
  },

  companyType: {
    type: String,
    default: "",
    trim: true,
  },

  eligibility: {
    qualification: [
      {
        type: String,
        trim: true,
      },
    ],

    batch: [
      {
        type: String,
        trim: true,
      },
    ],

    marksCriteria: {
      tenth: {
        type: String,
        default: "",
      },
      twelfth: {
        type: String,
        default: "",
      },
      graduation: {
        type: String,
        default: "",
      },
      cgpaEquivalent: {
        type: String,
        default: "",
      },
    },

    backlogCriteria: {
      type: String,
      default: "",
    },
  },

  rolesOffered: [
    {
      type: String,
      trim: true,
    },
  ],

  benefits: [
    {
      type: String,
      trim: true,
    },
  ],

  rounds: [
    {
      title: {
        type: String,
        trim: true,
      },
      description: {
        type: String,
        trim: true,
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