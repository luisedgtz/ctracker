import React,{useState} from 'react'
import Logo from '../../Assets/whiteLogo.svg'

import {NavLink} from "react-router-dom";

import firebase from '../../initializer/initilizer'


import './style.css'

export function Login() {

    const [mail,setMail] = useState('');
    const [pass,setPass] = useState('');

    const handleLogin = () =>{
        firebase.auth().signInWithEmailAndPassword(mail,pass)
        .then((user) =>{
            console.log(user)
        }
        ).catch((error) =>{
            console.log(error)
        });
    }


    return (
        <div className="login-container">
            <div className="form-container">
                <img src={Logo} alt=""/>
                <input type="email" onChange={(e)=> setMail(e.target.value)} value={mail} name="email" placeholder="email"/>
                <input type="password" onChange={(e)=> setPass(e.target.value)} value={pass} name="contraseña" placeholder="contraseña"/>
                <button onClick={()=>handleLogin()}>Entrar</button>
                <div>
                    <NavLink exact to="/signUp">Regístrate</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Login;
