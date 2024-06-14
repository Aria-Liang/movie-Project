const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/', (req, res) => {
    return res.status(200).json('you are there');
});

// login in  (create new user -> post)
router.post('/login', userController.verifyUser, (req, res) => {
    return res.status(200).json({success: true, message: "Login Successfully!"});
})

// sign up  (search user -> get)
router.post('/signup', userController.addUser, (req, res) => {
    return res.status(200).json({success: true, message: "SignUp Successfully!"});
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