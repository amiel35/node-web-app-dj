const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  user_name: String,
  user_pw: String,
  
});

const Users = mongoose.model('Users', userSchema);
module.exports = Users;