const express = require('express');
const router = express.Router();
const UserController = require('../controllers/usersControllers');

module.exports = (userRepository) => {
    const userController = new UserController(userRepository);

    router.get('/', userController.getAllUsers);
    router.get('/:id', userController.getUserById);
    router.post('/', userController.createUser);
    router.put('/:id', userController.updateUser);
    router.delete('/:id', userController.deleteUser);

    return router;
};
