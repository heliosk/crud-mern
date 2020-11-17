const User = require('../models/user.model');

exports.getUsers = async function (req, res) {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.getUser = async function (req, res) {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        error: 'User not found',
      });
    }

    res.status(200).json(user);
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

    res.status(201).json(savedUser);
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
    res.status(200).json(user);
  });
};

exports.deleteUser = async function (req, res) {
  try {
    const removedUser = await User.deleteOne({ _id: req.params.id });

    if (removedUser.deletedCount === 0) {
      return res.status(404).json({
        error: 'User not found',
      });
    }

    res.status(200).json({ message: 'User was deleted successfully.' });
  } catch (err) {
    res.json({ message: err });
  }
};
