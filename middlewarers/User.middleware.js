export const getUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.json({
        status: 400,
        msg: "Username and password are required",
      });
    }

    const user = await User.findOne({ username }).select("password");
    if (!user) {
      return res.json({
        status: 401,
        msg: "Invalid username or password",
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.json({
        status: 401,
        msg: "Invalid username or password",
      });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // set true in production
      sameSite: "Lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({
      status: 200,
      msg: "Login successful",
    });
  } catch (err) {
    res.json({ status: 500, error: err.message });
  }
};
