// user.js
const Mongoose = require("mongoose")
const UserSchema = new Mongoose.Schema({
  firstname:{
    type: String,
    unique: true,
    required: true,
  },

  lastname:{
    type: String,
    unique: true,
    required: true,
  },

  email:{
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  
})
const User = Mongoose.model("user", UserSchema)
module.exports = User