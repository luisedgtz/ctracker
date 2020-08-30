import React from 'react'
import firebase from '../../initializer/initilizer'

import './style.css'


function profile(props) {
    return (
        <div className="profile-container">
            <div className="profile-info">
                <i className="material-icons">account_circle</i>

                <div>
                    <label>Estado diagnóstico COVID</label>
                </div>

                <div class="switch">
                    <label>
                    Negativo
                    <input type="checkbox"/>
                    <span class="lever"></span>
                    Positvo
                    </label>
                </div>

                <div>
                <button onClick={()=>firebase.auth().signOut()}>Cerrar Sesión</button>
                </div>
            </div>

        </div>
    )
}

export default profile
