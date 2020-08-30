const { db } = require('../util/admin');
const firebase = require('firebase-admin');

exports.updateLoc = (request, response)=>{
    db.collection("locations").add({
        location: new firebase.firestore.GeoPoint(request.body.latitude, request.body.longitude),
        user: request.body.userId,
        ts: new Date().toISOString(),
        cb: request.body.cb,
        ci: request.body.ci
    }).catch((error) =>{
        response.status(500).json({error: 'Something went updating the location of a user'});
        console.error(error);
    })

    db.collection("users").doc(request.body.userId).update({   
        location: new firebase.firestore.GeoPoint(request.body.latitude, request.body.longitude)
       })
    .catch((error) =>{
        response.status(500).json({error: 'Something went updating the location of a user'});
        console.error(error);
    })

    if(request.body.cb){
        db.collection("r_locations").add({
            location: new firebase.firestore.GeoPoint(request.body.latitude, request.body.longitude),
            user: request.body.userId,
            ts: new Date().toISOString(),
            cb: request.body.cb,
            ci: request.body.ci
        }).then(function(doc) {
            response.json("Updated succesfully");
        }).catch((error) =>{
            response.status(500).json({error: 'Something went updating the location of a user'});
            console.error(error);
        })
    }else{
        response.json("Updated location succesfully");
    }
}

