const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/', (req, res) => {
    return res.status(200).json('you are there');
});

// login in  (create new user -> post)
router.post('/login', userController.addUser, (req, res) => {
    return res.status(200).json(res.locals.newUser);
});

// sign up  (search user -> get)
router.post('/signup', userController.verifyUser, (req, res) => {
    return res.status(200).json("Signup Successfully!");
})

// change password (update user -> patch)
router.patch('/changePassword', userController.changePassword, (req, res) => {
    return res.status(200).json("Change Password Successfully!");
})

// delete user (delete user -> delete)
router.delete('/:name', (req, res) => {
    return res.status(200).json();
})

module.exports = router;