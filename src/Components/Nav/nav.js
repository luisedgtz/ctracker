import React from 'react'
import {NavLink} from 'react-router-dom'

import './style.css'

function nav() {
    return (
        <div className="nav-container">
            <ul className="tags">
                <li><NavLink exact to="/app/survey">
                    <i className="material-icons">ballot</i>
                    </NavLink></li>
                <li>
                    <NavLink exact to="/app/map">
                    <i class="material-icons">map</i>
                    </NavLink>
                </li>
                <li><NavLink exact to="/app/profile">
                    <i className="material-icons">person</i>
                    </NavLink></li>
            </ul>
        </div>
    )
}

export default nav