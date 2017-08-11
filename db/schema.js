const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;


const EventSchema = new Schema({
    id: String,
    name: String,
    description: String,
    date: String,
    time: String,
    place: String,
    price: String,
    link: String
});

const ItinerarySchema = new Schema({
    id: String,
    name: String,
    events: [EventSchema]
});

const UserSchema = new Schema({
    id: String,
    userName: String,
    email:  String,
    password: String,
    avatar: String,
    itineraries: [ItinerarySchema]
});

const EventModel = mongoose.model('Event', EventSchema);
const ItineraryModel = mongoose.model('Itinerary', ItinerarySchema);
const UserModel = mongoose.model('User', UserSchema);

module.exports = {
    Event: EventModel,
    Itinerary: ItineraryModel,
    User: UserModel
}