const express = require('express');
const User  = require('../models/user');
const Itinerary  = require('../models/itinerary');

const router = express.Router({mergeParams: true});

router.get('/', (req, res)=>{
    const userIdToFind = req.params.userId;
    // console.log("hit the get")
    User.find(userIdToFind)
        .then((user)=>{
        res.json(user)
        })
})

router.get('/:itineraryId', (req, res)=>{
    const userIdToFind = req.params.userId;
    console.log('hitting itin ID get');
    Itinerary.findById(req.params.itineraryId)
        .then((itinerary)=>{
        res.json(itinerary)
        })

})


// router.get('/:commentId', (req, res) => {
//     const placeId = req.params.placeId;
//     const commentId = req.params.commentId;

//     Place.findById(placeId).then((place) => {

//         const foundComment = place.comments.find((comment) => {
//         return comment.id === commentId;
//         });

//         res.render(
//             'comment/show',
//             {
//             placeId,
//             placeName: place.name,
//             commentId: foundComment._id,
//             commentTitle: foundComment.title,
//             commentUserName: foundComment.userName,
//             commentCreatedAt: foundComment.created_at,
//             commentUpdatedAt: foundComment.updated_at,
//             commentRating: foundComment.rating,
//             commentText: foundComment.text
//             }
//         );
//     }).catch((err) => {
//         console.log('Failed to find comment');
//         console.log(err);
//     });
// });








module.exports = router;