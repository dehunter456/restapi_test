const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRoutes = require('./api-routes.js');

// Things we'll need for this app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', apiRoutes); // Sets url for API to operate from

mongoose.connect("mongodb://localhost/restapi_test", {useNewUrlParser: true}); // Connect db to this server

var db = mongoose.connection;

// Default msg
app.get('/', (req, res) => {
  res.json({message: "What up?"});
});

const port = 3000;

app.listen(port, () => {
  console.log("Listening on 3000");
})
