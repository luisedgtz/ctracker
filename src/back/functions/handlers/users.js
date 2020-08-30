const { db } = require('../util/admin');
const firebase = require('firebase-admin');

exports.surveyUpdate = (request, response) =>{
    total = 0.0;

    if(request.body.fumador){
        total = total + 15;
    }

    if(request.body.edad>50){
        total = total+(request.body.edad*.8);
    }else{
        total = total+(request.body.edad*.4);
    }

    if(request.body.bmi>18){
        total = total + 15
    }

    if(request.body.hombre){
        total = total + 10
    }

    if(request.body.tos){
        total = total + 75
    }

    if(request.body.exposicion){
        total = total+ 60
    }

    if(request.body.familiares){
        total = total+ 60
    }
   
    if(request.body.fiebre){
        total = total + 75

    }
    
    if(request.body.fatiga){
        total = total +20

    }

    if(!(request.body.flemas)){
        total = total + 10

    }

    if(request.body.gripe){
        total = total + 10

    }

    if(request.body.diarrea){
        total = total +15

    }

    if(!(request.body.apetito)){
        total = total + 25
    }

    if(!(request.body.vomito) && request.body.fiebre){
        total = total + 45
    }
    
    if(!(request.body.asma)){
        total = total + 10
    }
    
    if(!(request.body.vacuna)){
        total = total + 25
    }

    if(request.body.tos && request.body.fiebre){
        total = total + 75 
    }

    if(request.body.prueba){
        total = 500;
    }

    let probabilidad, contagio;
    probabilidad = total * .002

    if(probabilidad>.65){
        contagio = true;
    }else{
        contagio = false;
    }

    db.collection("users").doc(request.body.userId).update({   
        ci: probabilidad,
        cb: contagio
       })
       .then(function(doc) {
        response.json("Probability calculated and updated user succesfully");
    }).catch((error) =>{
        response.status(500).json({error: 'Something went updating the location of a user'});
        console.error(error);
    })
}