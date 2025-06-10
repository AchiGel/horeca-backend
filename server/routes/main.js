import { Router } from "express";
import Article from "../models/Article.js";

const router = Router();

// GET all articles
router.get("/articles", async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch articles" });
  }
});

// GET article by ID
router.get("/articles/:id", async (req, res) => {
  try {
    const article = await Article.findOne({ id: req.params.id });
    if (!article) return res.status(404).json({ error: "Article not found" });
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch article" });
  }
});

// POST new article
router.post("/articles", async (req, res) => {
  try {
    const newArticle = new Article(req.body);
    const saved = await newArticle.save();
    res.status(201).json(saved);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Failed to create article", details: error.message });
  }
});

// PUT update article
router.put("/articles/:id", async (req, res) => {
  try {
    const updated = await Article.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    if (!updated) return res.status(404).json({ error: "Article not found" });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: "Failed to update article" });
  }
});

// DELETE article
router.delete("/articles/:id", async (req, res) => {
  try {
    const deleted = await Article.findOneAndDelete({ _id: req.params.id });
    if (!deleted) return res.status(404).json({ error: "Article not found" });
    res.json({ message: "Article deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete article" });
  }
});

export default router;
