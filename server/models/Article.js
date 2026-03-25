import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    body: { type: [String], required: true },
    categories: {
      type: [String],
      enum: [
        "restaurants",
        "hotels",
        "cafes",
        "catering",
        "management",
        "trends",
      ],
      required: true,
    },
    imageUrl: { type: String, required: true },
    minutesRead: { type: Number, required: true },
  },
  { timestamps: true },
);

ArticleSchema.index({ slug: 1 });
ArticleSchema.index({ createdAt: -1 });

export default mongoose.model("Article", ArticleSchema);
