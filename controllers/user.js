const express = require('express');
const User  = require('../models/user');
const router = express.Router();

//==================================
//         USER INDEX ROUTE
//==================================
router.get('/', (req, res)=>{
    User.find().then(user => {
        res.json(user);
    })
    .catch((err) => {
        console.log('Error retrieving users from database!');
        console.log(err);
    });
});



//==================================
//       USER CREATE (NEW) ROUTE
//==================================
router.post('/', (req, res) => {
    const newUser = new User();
    newUser.userName = req.body.userName;
    newUser.firstName = req.body.firstName;
    newUser.lastName = req.body.lastName;
    newUser.email = req.body.email;
    newUser.password = req.body.password;
    newUser.avatar = req.body.avatar;
    newUser.itineraries = []


    User.create(newUser).then((user) => {
        res.json(user);
    })
    .catch((err) => {
        console.log('Error saving new user to database!');
        console.log(err);
    });
});


//==================================
//          USER SHOW ROUTE
//==================================
// router.get('/:id', (req, res)=>{
//     User.findById(req.params.id).then((user)=>{
//             res.json(user);
//     })
//     .catch((err) => {
//         console.log('Error retrieving users from database!');
//         console.log(err);
//     });
// });

//==================================
//       USER UPDATE PUT ROUTE
//==================================
// router.put('/:id', (req, res) => {
//     const userIdToUpdate = req.params.id;
//     const updatedUserInfo = req.body;

//     User.findByIdAndUpdate(
//         userIdToUpdate,
//         updatedUserInfo,
//         {new: true} 
//     ).then((user) => {
//         console.log(`User with ID of ${user._id} updated!`);

//         res.render(
//             'users/show',
//             {user}
//         );
//     })
//     .catch((err) => {
//         console.log(`User with ID of ${user._id} failed to update!`);
//         console.log(err);
//     });
// });




//==================================
//         USER DELETE ROUTE
//==================================
router.get('/:id/delete', (req, res) => {
    const userIdToDelete = req.params.id;

    User.findByIdAndRemove(userIdToDelete).then(() => {
        console.log(`Successfully deleted user with ID ${userIdToDelete}!`);
        res.redirect('/users');
    });
});


module.exports = router;