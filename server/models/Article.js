import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema(
  {
    body: { type: [String], required: true },
    categories: { type: [String], required: true },
    description: { type: String, required: true },
    minutesRead: { type: Number, required: true },
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Article", ArticleSchema);
