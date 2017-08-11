require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

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





app.get('/', (req,res) => {
  res.send('Hello world!')
})





//PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('App listening on ' + PORT);
})