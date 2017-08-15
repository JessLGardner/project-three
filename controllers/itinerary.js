const express = require('express');
const User  = require('../models/user');
const Itinerary  = require('../models/itinerary');

const router = express.Router({mergeParams: true});

router.get('/', (req, res)=>{
    const userIdToFind = req.params.userId;
    User.findById(userIdToFind)
        .then((user)=>{
            console.log(`grabbing ${user.userName}'s userID`)

        Itinerary.find()
            .then((itinerary)=>{
                console.log(`seeing list of ${user.userName}'s itineraries`)
                res.json(user)
            })
        })       
})

        
router.get('/:id', (req, res)=>{
    const userIdToFind = req.params.userId;
    User.findById(userIdToFind)
        .then((user)=>{
            console.log(`grabbing ${user.userName}'s userID`)

        Itinerary.findById()
            .then((itinerary)=>{
                console.log(`seeing ONE of ${user.userName}'s itineraries`)
                res.json(user)
            })
        })       
})






module.exports = router;