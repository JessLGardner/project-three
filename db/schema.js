const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;


const ExhibitSchema = new Schema({
    id: String,
    name: String,
    description: String,
    time: String,
    place: String
});

const ItinerarySchema = new Schema({
    id: String,
    name: String,
    exhibits: [ExhibitSchema]
});

const UserSchema = new Schema({
    id: String,
    userName: String,
    email:  String,
    password: String,
    itineraries: [ItinerarySchema]
});

const ExhibitModel = mongoose.model('Exhibit', ExhibitSchema);
const ItineraryModel = mongoose.model('Itinerary', ItinerarySchema);
const UserModel = mongoose.model('User', UserSchema);

module.exports = {
    Exhibit: ExhibitModel,
    Itinerary: ItineraryModel,
    User: UserModel
}