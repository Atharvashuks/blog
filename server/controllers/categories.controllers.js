import Category from "../models/Category.model.js";

export const newCategory = async (req, res) => {
  const newCategory = new Category(req.body);
  try {
    const savedPost = await newCategory.save();
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getCategory = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json(error);
    }
}
