const { db } = require('../util/admin');
const firebase = require('firebase-admin');
const geolib = require("geolib");

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

    db.collection('area').get().then(data => {
        let areas = [];
        data.forEach(doc => {
            contador = 0;
            const booleanito = geolib.isPointInPolygon({ latitude: parseFloat(request.body.latitude), longitude:  parseFloat(request.body.longitude)}, [
                { latitude: parseFloat(doc.data().limits[0].latitude), longitude: parseFloat(doc.data().limits[0].longitude) },
                { latitude: parseFloat(doc.data().limits[1].latitude), longitude: parseFloat(doc.data().limits[1].longitude) },
                { latitude: parseFloat(doc.data().limits[2].latitude), longitude: parseFloat(doc.data().limits[2].longitude) },
                { latitude: parseFloat(doc.data().limits[3].latitude), longitude: parseFloat(doc.data().limits[3].longitude) }
            ]);
            if(booleanito){
                areas.push(doc.id);
            }
        });

        for(let i = 0; i < areas.length; i++){

            db.collection('users').doc(request.body.userId).update({
                recentLocations: firebase.firestore.FieldValue.arrayUnion(areas[i])
            });

        }

    }).catch((error) =>{
    console.error(error);
    });

    
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
            console.log("Updated Location succesfully")
        }).catch((error) =>{
            response.status(500).json({error: 'Something went updating the location of a user'});
            console.error(error);
        })


        
        db.collection('area').get().then(data => {
            let areas = [];
            data.forEach(doc => {
                contador = 0;
                const booleanito = geolib.isPointInPolygon({ latitude: parseFloat(request.body.latitude), longitude:  parseFloat(request.body.longitude)}, [
                    { latitude: parseFloat(doc.data().limits[0].latitude), longitude: parseFloat(doc.data().limits[0].longitude) },
                    { latitude: parseFloat(doc.data().limits[1].latitude), longitude: parseFloat(doc.data().limits[1].longitude) },
                    { latitude: parseFloat(doc.data().limits[2].latitude), longitude: parseFloat(doc.data().limits[2].longitude) },
                    { latitude: parseFloat(doc.data().limits[3].latitude), longitude: parseFloat(doc.data().limits[3].longitude) }
                ]);
                if(booleanito){
                    areas.push(doc.id);
                }
            });

            for(let i = 0; i < areas.length; i++){
                db.collection('area').doc(areas[i]).update({
                    ai: firebase.firestore.FieldValue.increment(20)
                });
            }
            
        })
        .catch((error) =>{
        response.status(500).json({error: 'Something went wrong getting red areas'});
        console.error(error);
        });


    }else{
        console.log("Updated location succesfully");
    }

    response.json("Lo lograste perro")
    
}

