const { db } = require('../util/admin');
const firebase = require('firebase-admin');


exports.postArea = (request,response)=>{
   
    location = new firebase.firestore.GeoPoint(request.body.latitud, request.body.longitud);

    limit1 = new firebase.firestore.GeoPoint(request.body.latitude2, request.body.longitude2);
    limit2 = new firebase.firestore.GeoPoint(request.body.latitude3, request.body.longitude3);
    limit3 = new firebase.firestore.GeoPoint(request.body.latitude4, request.body.longitude4);
    limit4 = new firebase.firestore.GeoPoint(request.body.latitude5, request.body.longitude5);

    db.collection('area').add(
    {
        name: request.body.name,
        tag: request.body.tag,
        location: location,
        limits: [limit1,limit2,limit3,limit4],
        ai: request.body.ai

    }).then((doc) =>{
        response.json(`Doc: ${doc.id} created succesfully`);
    }).catch((error) =>{
        response.status(500).json({error: error});
        console.error(error);
    })
}

exports.getRedAreas = (request,response)=>{
    db.collection('area').where("ai", ">", 65).get().then(data => {
        let redAreas = [];
        data.forEach(doc => {
            redAreas.push({
                areaId: doc.id,
                ai: doc.data().ai,
                location: doc.data().location,
                name: doc.data().name,
                tag: doc.data().tag,
            });
        });
        return response.json(redAreas);
    }).catch((error) =>{
    response.status(500).json({error: 'Something went wrong getting red areas'});
    console.error(error);
    })
}
