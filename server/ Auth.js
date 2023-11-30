const User = require("./model/User")


// auth.js
exports.register = async (req, res, next) => {
    const {firstname,lastname,email,password } = req.body
    if (password.length < 6) {
      return res.status(400).json({ message: "Password less than 6 characters" })
    }
    try {
      await User.create({
        firstname,
        lastname,
        email,
        password,
      }).then(user =>
        res.status(200).json({
          message: "User successfully created",
          user,
        })
      )
    } catch (error) {
      res.status(401).json({
        message: "User not successful created",
        error: error.mesage,
      })
    }
  }

  // auth.js
exports.login = async (req, res, next) => {
  const { email, password } = req.body
  // Check if email and password is provided
  if (!email|| !password) {
    return res.status(400).json({
      message: "email or Password not present",
    })
  }

try {
  const user = await User.findOne({ email, password })
  if (!user) {
    res.status(401).json({
      message: "Login not successful",
      error: "User not found",
    })
  } else {
    res.status(200).json({
      message: "Login successful",
      user,
    })
  }
} catch (error) {
  res.status(400).json({
    message: "An error occurred",
    error: error.message,
  })
}

}
  