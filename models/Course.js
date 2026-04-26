import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true, // video thumbnail
    },
    instructor: {
      type: String, // CodeWithHarry
    },
    instructorImg: {
      type: String, // 👈 yaha instructor ki pic aayegi
    },
    category: {
      type: String,
    },
    description: {
      type: String,
    }
  },
  { timestamps: true }
);

export default mongoose.models.Course ||
  mongoose.model("Course", CourseSchema);