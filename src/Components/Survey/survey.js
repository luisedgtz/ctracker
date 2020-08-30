import React,{useState} from 'react'

import './style.css'
import axios from 'axios';
import firebase from '../../initializer/initilizer'

var db = firebase.firestore()

export default function Survey() {

    const [tos,changeTos] = useState(false);
    const [fiebre,changeFiebre] = useState(false);
    const [fatiga,changeFatiga] = useState(false);
    const [flemas,changeFlemas] = useState(false);
    const [gripe,changeGripe] = useState(false);
    const [diarrea,changeDiarrea] = useState(false);
    const [apetito,changeApetito] = useState(false);
    const [vomito,changeVomito] = useState(false);


    const handleSurvey= async(e)=>{

        e.preventDefault()

        var user = firebase.auth().currentUser
        var altura, asma, edad, fumador, peso, vacuna;
        await db.collection('users').doc(user.uid).get().then((doc)=>{
            altura = doc.data().altura
            asma = doc.data().asma
            edad = doc.data().edad
            fumador = doc.data().fumador
            peso = doc.data().peso
            vacuna = doc.data().vacuna            
        })

        var bmi = peso/altura;
        console.log(bmi)

        axios.put('/user/survey',{
            'fumador': fumador,
            'bmi': bmi,
            'asma': asma,
            'edad': edad,
            'vacuna': vacuna,
            'tos': tos,
            'fiebre': fiebre,
            'fatiga': fatiga,
            'flemas': flemas,
            'gripe': gripe,
            'diarrea': diarrea,
            'apetito': apetito,
            'vomito': vomito,
            'hombre': true,
            'userId': user.uid
        }).then(()=>{
            console.log("Hola")
        }).catch((error)=>{
            console.log(error)
        })
    }

    return (
        <div className="survey-container">

            <h3>Indica los sintomas que presentas</h3>
            <p>Usaremos esta información para evaluar zonas de posible riesgo de contagio</p>
            <div className="surv-container">
                <form action="#">
                    <p>
                    <label>
                        <input onChange={(e=>changeTos(e.target.value))} type="checkbox" class="filled-in" />
                        <span>Tos</span>
                    </label>
                    </p>

                    <p>
                    <label>
                        <input onChange={(e=>changeFiebre(e.target.value))} type="checkbox" class="filled-in" />
                        <span>Fiebre</span>
                    </label>
                    </p>

                    <p>
                    <label>
                        <input onChange={(e=>changeFatiga(e.target.value))} type="checkbox" class="filled-in" />
                        <span>Fatiga</span>
                    </label>
                    </p>

                    <p>
                    <label>
                        <input onChange={(e=>changeFlemas(e.target.value))} type="checkbox" class="filled-in" />
                        <span>Flemas</span>
                    </label>
                    </p>
                    <p>
                    <label>
                        <input onChange={(e=>changeGripe(e.target.value))} type="checkbox" class="filled-in" />
                        <span>Gripe</span>
                    </label>
                    </p>
                    <p>
                    <label>
                        <input onChange={(e=>changeDiarrea(e.target.value))} type="checkbox" class="filled-in" />
                        <span>Diarrea</span>
                    </label>
                    </p>
                    <p>
                    <label>
                        <input onChange={(e=>changeApetito(e.target.value))} type="checkbox" class="filled-in" />
                        <span>Perdida apetito</span>
                    </label>
                    </p>
                    <p>
                    <label>
                        <input onChange={(e=>changeVomito(e.target.value))} type="checkbox" class="filled-in" />
                        <span>Vomito</span>
                    </label>
                    </p>


                    <button onClick={(e)=>handleSurvey(e)}>Enviar</button>
                    
                </form>                
            </div>

        </div>
    )
}
