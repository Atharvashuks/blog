import User from "../models/User.model.js";
import bcrypt from "bcrypt";

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

export const deleteUser = async(req,res) => {
    const {id} = req.params;
    
}
