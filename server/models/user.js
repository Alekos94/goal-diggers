const mongoose = require('../ds.js');
const {Schema} = mongoose;

const UserSchema = new Schema ({
  userName: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  dateOfBirth: {type: String, required: true},
  position: {type: String, required: true}
});

const Users = mongoose.model('User', UserSchema);

module.exports = Users;