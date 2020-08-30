import React,{useState} from 'react'
import Logo from '../../Assets/whiteLogo.svg'
import {NavLink} from "react-router-dom";

import firebase from '../../initializer/initilizer'


import './style.css'


export function SignUp(props) {

    const [name,setName] = useState('');
    const [lastName,setlastName] = useState('');
    const [mail,setMail] = useState('');
    const [pass,setPass] = useState('');
    const [gender,setGender] = useState(true);
    const [age,setAge] = useState(0);
    const [height,setHeight] = useState(0);
    const [weight,setWeight] = useState(0);
    const [smoker,setSmoker] = useState(false);
    const [vaccine,setVaccine] = useState(false);
    const [asma,setAsma] = useState(false);

    const handleSignUp = () =>{
        console.log("Pinche puñetas")
        firebase.auth().createUserWithEmailAndPassword(mail, pass)
        .then((user)=>{
            console.log(user)
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
            <input type="text" onChange={(e)=> setGender(e.target.value)} value={gender} name="genero"  placeholder="Genero"/>
            <input type="number" onChange={(e)=> setAge(e.target.value)} value={age} name="edad" placeholder="Edad"/>
            <input type="text" onChange={(e)=> setHeight(e.target.value)} value={height} name="estatura" placeholder="Estatura (cm)"/>
            <input type="text" onChange={(e)=> setWeight(e.target.value)} value={weight} name="peso" placeholder="Peso (kg)"/>
            <input type="text" onChange={(e)=> setSmoker(e.target.value)} value={smoker} name="fumador" placeholder="Fumador"/>
            <input type="text" onChange={(e)=> setVaccine(e.target.value)} value={vaccine} name="vacuna" placeholder="Vacuna"/>
            <input type="text" onChange={(e)=> setAsma(e.target.value)} value={asma} name="asma" placeholder="Asma"/>
            <button onClick={()=>handleSignUp()}>Crear cuenta</button>
            <div>
                <NavLink exact to="/">Iniciar Sesión</NavLink>
            </div>
        </div>
        </div>
    )
}

export default SignUp;


