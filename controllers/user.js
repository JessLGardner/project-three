const express = require('express');
const User  = require('../models/user');
const router = express.Router();

router.get('/', (req, res)=>{
    User.find().then(user => {
        res.json(user);
    })
});

// router.post("/", (req, res) => {
//     const newUser = new User();
//         newUser.userName = req.body.userName;
//         newUser.email = req.body.email;
//         newUser.password = req.body.password
//         newUser.avatar =req.body.avatar;
//         newUser.itineraries = [];
// });

// router.get('/:id', (req, res)=>{
//     User.findById(req.params.id)
//         .then((users)=>{
//             res.json(users);
//         })
// });

// router.put("/:id", (req, res) => {
//     User.findByIdAndUpdate(req.params.id,
//         {
//             userName: req.body.userName,
//             email: req.body.email,
//             avatar: req.body.avatar
//         })
//         .then((user) =>{
//             res.json(user);
//         })
// });



module.exports = router;