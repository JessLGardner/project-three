const express = require('express');
const User  = require('../models/user');
const Itinerary  = require('../models/itinerary');

const router = express.Router({mergeParams: true});

router.get('/', (req, res)=>{
    const userIdToFind = req.params.userId;
    // console.log("hit the get")
    User.findById(userIdToFind)
        .then((user)=>{
        res.json(user)
        })
})

// router.get('/:itineraryId', (req, res)=>{
//     const userIdToFind = req.params.userId;
//     console.log("hit the itin get")
//     User.findById(userIdToFind)
//         .then((user)=>{
//         res.json(user)
        







module.exports = router;