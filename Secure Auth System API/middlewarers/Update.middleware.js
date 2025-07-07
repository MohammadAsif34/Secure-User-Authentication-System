import User from "../models/Users.model.js";

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const user = await User.findById(id);
    if (updateData.email || updateData.password) {
      return res.json({
        status: 400,
        code: "UPDATE_DEINED",
        msg: "email and password update not allowed.",
      });
    }
    if (updateData.username) {
      const usernameExists = await User.findOne({
        username: updateData.username,
      }).select("+username");
      if (usernameExists) {
        return res.json({
          status: 401,
          code: "USERNAME_ALREADY_EXISTS",
          msg: "username is already exists.",
        });
      }
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    );
    console.log("userId: ", id);
    res.json({
      status: 200,
      code: "UPDATE_SUCCESSFULLY",
      msg: "all details updated successfully",
      data: user,
      updatedData: updatedUser,
    });
  } catch (err) {
    res.json({ status: 500, code: "INTERNAL_ERROR", msg: err.message });
  }
};
