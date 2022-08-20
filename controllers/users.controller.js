const User = require("../models/users.model");

// create a user account
const createAccount = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json({ success: true, data: user });
  } catch (error) {
    res.json({ success: false, data: error });
  }
};

//login  a user
const loginUser = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    res.json({
      success: true,
      data: user,
    });
  } else {
    res.json({
      success: false,
      data: "User Not found",
    });
  }
};

module.exports = {
  createAccount,
  loginUser,
};
