require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const UsersController = require("./controllers/user");

const app = express();

mongoose.Promise = global.Promise;

//MONGOOSE CONNECTION
mongoose.connect(process.env.MONGODB_URI); //mongodb://localhost/fullstack-jeopardy
const connection = mongoose.connection;
connection.on('connected', () => {
    console.log('Mongoose connection success');    
}); 
connection.on('error', (err) => {  
    console.log('Mongoose connection error: ' + err);
}); 


//MIDDLEWARE
app.use(bodyParser.json());


//CONTROLLERS
app.use('/api/users', UsersController);
app.use(express.static(__dirname + '/client/build/'));


//ROUTE
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})





//PORT
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log('App listening on ' + PORT);
})