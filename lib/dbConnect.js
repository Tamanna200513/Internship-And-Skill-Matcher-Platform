import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;   // ✅ correct

export async function dbConnect() {

  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI not found in .env.local");
  }

  if (mongoose.connections[0].readyState) return;

  await mongoose.connect(MONGODB_URI);
}