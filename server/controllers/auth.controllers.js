import User from "../models/User.model.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const { username, email, password, profilePic } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 14);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    !user && res.status(400).json("Wrong credientials!!!");

    const isPassword = await bcrypt.compare(password, user.password);

    !isPassword && res.status(400).json("Wrong credientials!!!");

    // const {user.password, ...otherDetsils} = user._doc;

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};
