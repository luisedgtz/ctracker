import React from 'react'
import firebase from '../../initializer/initilizer'


function profile() {
    return (
        <div className="profile-container">'
            <button onClick={()=>firebase.auth().signOut()}>Sign Out</button>
        </div>
    )
}

export default profile
