const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

/**
 * @route   GET
 * @desc    Get all users
 * @access  Public
 */
router.get('/', userController.getUsers);

/**
 * @route   GET
 * @desc    Get user by id
 * @access  Public
 */
router.get('/:id', userController.getUser);

/**
 * @route   POST
 * @desc    Create a user
 * @access  Public
 */
router.post('/', userController.createUser);

/**
 * @route   PATCH
 * @desc    Update user by id
 * @access  Public
 */
router.patch('/:id', userController.updateUser);

/**
 * @route   DELETE
 * @desc    Delete user by id
 * @access  Public
 */
router.delete('/:id', userController.deleteUser);

module.exports = router;
