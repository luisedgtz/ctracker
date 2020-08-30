const { db } = require('../util/admin');

exports.postArea = (request,response)=>{
   
    const newArea = {
        name: request.body.name,
        tag: request.body.tag,
        latitud: request.body.latitud,
        longitud: request.body.longitud,
        limits: request.body.limits,
        AI: request.body.ai,
    };

    db.collection('area').add(newArea).then((doc) =>{
        const resArea = newArea;
        resArea.areaId = doc.id;
        response.json(resArea);
    }).catch((error) =>{
        response.status(500).json({error: 'Something went wrong creating a new area'});
        console.error(error);
    })
}

exports.getRedAreas = (request,response)=>{
    db.collection('area').get().then(data => {
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

