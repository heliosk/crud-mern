const User = require('../models/user.model');

exports.getUsers = function (req, res) {};

exports.getUser = function (req, res) {};

exports.createUser = function (req, res) {
  const { name, email, address, phone } = req.body;

  console.log('here onw');

  const user = new User({
    name,
    email,
    address,
    phone,
  });

  console.log(user);

  user.save(function (err) {
    console.log('inside');
    if (err) {
      return next(err);
    }
    res.send('User was created succesfully!');
  });
};

exports.updateUser = function (req, res) {};

exports.deleteUser = function (req, res) {};
