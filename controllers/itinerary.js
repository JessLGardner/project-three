const express = require('express');
const User  = require('../models/user');
const Itinerary  = require('../models/itinerary');

const router = express.Router({mergeParams: true});

router.get('/', (req, res)=>{
    const userIdToFind = req.params.userId;
    User.findById(userIdToFind)
        .then((user)=>{
            console.log(`grabbing ${user.userName}'s userID`)

        user.itineraries.find(()=>{
                console.log(`seeing list of ${user.userName}'s itineraries`)
                res.json(user)
            })
        })       
})

        
router.get('/:id', (req, res)=>{
    const userIdToFind = req.params.userId;
    const itinIdToFind = req.params.id;

    User.findById(userIdToFind)
        .then((user)=>{
            console.log(`grabbing ${user.userName}'s userID`)
            const itin = user.itineraries.find(itinerary => {
                let idString = itinerary._id.toString()
                return idString === itinIdToFind;
            })
            res.json(itin)
        })
    
})






module.exports = router;