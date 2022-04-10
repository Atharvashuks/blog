import Post from "../models/Post.model.js";

export const createPost = async (req, res) => {
    const newPost = new Post(req.body)
    try {
        const savePost = await newPost.save();

        res.status(200).json(savePost);
    } catch (error) {
        res.status(500).json(error);
    }
};