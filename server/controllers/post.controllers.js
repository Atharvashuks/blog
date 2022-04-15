import Post from "../models/Post.model.js";

export const createPost = async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savePost = await newPost.save();

    res.status(200).json(savePost);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { username } = req.body;
  const user = req.body;
  try {
    const post = await Post.findById(id);

    if (post.username === username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          id,
          { ...user, id },
          { new: true }
        );

        res.status(200).json(updatedPost);
      } catch (error) {
        res.status(501).json(error);
      }
    } else {
      res.status(403).json(`You can update only your post!!!`);
    }
  } catch (error) {
    res.status(502).json(error);
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  const { username } = req.body;
  try {
    const post = await Post.findById(id);

    if (post.username === username) {
      try {
        await post.delete();

        res.status(200).send("Post deleted successfully");
      } catch (error) {
        res.status(501).json(error);
      }
    } else {
      res.status(401).json("You can delete only your post!!!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllPost = async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};
