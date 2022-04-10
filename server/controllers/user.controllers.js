import bcrypt from "bcrypt";
import mongoose from "mongoose";

import User from "../models/User.model.js";
import Post from "../models/Post.model.js";

export const update = async (req, res) => {
  const { userId } = req.body;
  const { id } = req.params;
  const user = req.body;

  if (userId === id) {
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 14);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { ...user, id },
        { new: true }
      );

      res.status(200).send(updatedUser);
    } catch (error) {
      res.status(404).json(error);
    }
  } else {
    res.status(401).send(`You can update only your account!!!`);
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  const user = await User.findById(id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No post with that id!!!`);
  }

  if (userId == id) {
    if (user) {
      try {
        await Post.deleteMany({ username: user.username });

        await User.findByIdAndDelete(id);

        res.status(200).send("User deleted!!!");
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(405).send(`User not found!!!`);
    }
  } else {
    res.status(401).json(`You can only delete your account!!!`);
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    const { password, ...others } = user._doc;

    res.status(200).json(others);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
