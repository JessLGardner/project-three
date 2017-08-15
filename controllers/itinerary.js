const express = require('express');
const User  = require('../models/user');
const Itinerary  = require('../models/itinerary');

const router = express.Router({mergeParams: true});

router.get('/', (req, res)=>{
    const userIdToFind = req.params.userId;
    // console.log("hit the get")
    User.findById(userIdToFind)
        .then((user)=>{
            console.log(`hitting ${user.userName}'s userID itin`)

        Itinerary.find()
            .then((itinerary)=>{
                console.log(`${user.userName}'s itineraries`)
                res.json(user)
            })
        })       
})

// router.get('/:itineraryId', (req, res)=>{
//     const userIdToFind = req.params.userId;
//     console.log("hit the itin get")
//     User.findById(userIdToFind)
//         .then((user)=>{
//         res.json(user)

// router.get('/:id', (req, res)=>{
//     User.findById(req.params.id)
//         .then((users)=>{
//             res.json(users);
//         })
// });
        







module.exports = router;