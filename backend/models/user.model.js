const moongose = require('mongoose');
const Schema = moongose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  email: { type: String, require: true, max: 100 },
  address: { type: String, required: false, max: 255 },
  phone: { type: Number, required: false },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = moongose.model('User', UserSchema);
