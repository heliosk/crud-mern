const User = require('../models/user.model');

exports.getUsers = async function (req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.getUser = async function (req, res) {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.createUser = async function (req, res) {
  const { name, email, address, phone } = req.body;

  const user = new User({
    name,
    email,
    address,
    phone,
  });

  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.updateUser = function (req, res) {
  User.findByIdAndUpdate(req.params.id, { $set: req.body }, function (
    err,
    user
  ) {
    if (err) return next(err);
    res.send(user);
  });
};

exports.deleteUser = async function (req, res) {
  try {
    const removedUser = await User.deleteOne({ _id: req.params.id });
    res.json(removedUser);
  } catch (err) {
    res.json({ message: err });
  }
};
