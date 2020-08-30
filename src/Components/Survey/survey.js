import React from 'react'

import './style.css'

export default function survey() {
    return (
        <div className="survey-container">

            <h2>Evaluación riesgo infección</h2>

            <div className="form-container">
                <form action="">
                    <input id="yes" type="radio"/>
                    <label>SI</label>
                    <input id="no" type="radio"/>
                    <label>NO</label>
                </form>

            </div>

        </div>
    )
}
