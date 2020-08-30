import React,{useState} from 'react'
import Logo from '../../Assets/whiteLogo.svg'
import {NavLink} from "react-router-dom";

import firebase from '../../initializer/initilizer'


import './style.css'

var db = firebase.firestore()

export function SignUp(props) {

    const [name,setName] = useState('');
    const [lastName,setlastName] = useState('');
    const [mail,setMail] = useState('');
    const [pass,setPass] = useState('');
    const [age,setAge] = useState(null);
    const [height,setHeight] = useState(null);
    const [weight,setWeight] = useState(null);
    const [smoker,setSmoker] = useState(false);
    const [vaccine,setVaccine] = useState(false);
    const [asma,setAsma] = useState(false);


    const handleSignUp = () =>{
        firebase.auth().createUserWithEmailAndPassword(mail, pass)
        .then((user)=>{
            console.log(user.user.uid)
            db.collection('users').doc(user.user.uid).set({
                fumador: smoker,
                edad: age,
                peso: weight,
                altura: height,
                vacuna: vaccine,
                asma: asma
            })
        }).catch((error) =>{
            console.log(error)
        });
    }

    return (
        <div className="up-container">
        <div className="form-container">
            <img src={Logo} alt=""/>
            <input type="text" name="nombre" onChange={(e)=> setName(e.target.value)} value={name} placeholder="Nombre"/>
            <input type="text" name="apellido" onChange={(e)=> setlastName(e.target.value)} value={lastName} placeholder="Apellido"/>
            <input type="email" name="mail" onChange={(e)=> setMail(e.target.value)} value={mail} placeholder="Mail" value={props.mail}/>
            <input type="password" onChange={(e)=> setPass(e.target.value)} value={pass} name="Contraseña" placeholder="contraseña"/>        
            <input type="number" onChange={(e)=> setAge(e.target.value)} value={age} name="edad" placeholder="Edad"/>
            <input type="text" onChange={(e)=> setHeight(e.target.value)} value={height} name="estatura" placeholder="Estatura (cm)"/>
            <input type="text" onChange={(e)=> setWeight(e.target.value)} value={weight} name="peso" placeholder="Peso (kg)"/>
            <p>
                <label>
                <input onChange={(e=>setSmoker(e.target.value))} type="checkbox" class="filled-in" />
                <span>Fumador</span>
                </label>
            </p>

            <p>
                <label>
                <input onChange={(e)=> setVaccine(e.target.value)} type="checkbox" class="filled-in" />
                <span>Vacuna Influenza</span>
                </label>
            </p>

            <p>
                <label>
                <input onChange={(e)=> setAsma(e.target.value)} type="checkbox" class="filled-in" />
                <span>Asma</span>
                </label>
            </p>
            <button onClick={()=>handleSignUp()}>Crear cuenta</button>
            
            <div className="nav-link">
                <NavLink exact to="/">Iniciar Sesión</NavLink>
            </div>
        </div>
        </div>
    )
}

export default SignUp;


