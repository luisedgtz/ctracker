import React from 'react'
import {NavLink} from 'react-router-dom'

import './style.css'

function nav() {
    return (
        <div className="nav-container">
            <ul className="tags">
                <li><NavLink exact to="/survey">
                    <i className="material-icons">ballot</i>
                    </NavLink></li>
                <li>
                    <NavLink exact to="/">
                    <i class="material-icons">map</i>
                    </NavLink>
                </li>
                <li><NavLink exact to="/auth">
                    <i className="material-icons">person</i>
                    </NavLink></li>
            </ul>
        </div>
    )
}

export default nav
