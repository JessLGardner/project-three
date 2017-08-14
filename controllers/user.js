const express = require('express');
const User  = require('../models/user');
const router = express.Router();

router.get('/', (req, res)=>{
    User.find().then(users => {
        res.json(users);
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

router.get('/:id', (req, res)=>{
    User.findById(req.params.id).then((users)=>{
        res.json(users);
    })
});

router.put("/:id", (req, res) => {
    User.findByIdAndUpdate(req.params.id,
        {
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password,
            avatar: req.body.avatar
        })
        .then((user) =>{
            res.json(user);
        })
});

// router.post("/", (req, res) => {
//   const newGame = new Game();
//   newGame.user = req.body.user;
//   newGame.points = 0;
//   newGame.categories = []

//   Category.find().then((categories) => {
//     for (var i = 0; i < 6; i ++){
//       const randomNumber = Math.floor(Math.random() * categories.length);
//       const randomCategory = categories[randomNumber];
//       newGame.categories.push(randomCategory);
//     }
//     return newGame.save();
//   }).then((game) => {
//     return res.json(game);
//   });
// });


module.exports = router;