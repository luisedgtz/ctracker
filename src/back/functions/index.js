const functions = require('firebase-functions'); 
const app = require('express')();
const { db } = require('./util/admin')

const {
    postArea,
    getRedAreas
} = require('./handlers/areas');

const {
    updateLoc
} = require("./handlers/locations");

const {
    surveyUpdate
} = require("./handlers/users");


//Area routes
app.post('/area', postArea);
app.get('/area', getRedAreas);

//Location routes
app.put("/location", updateLoc);

//User routes
app.put("/user/survey", surveyUpdate);

exports.api = functions.region('us-central1').https.onRequest(app);