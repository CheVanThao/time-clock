import React from 'react';
import "./Years.css"

const date = new Date()
let toDay = date.getDate()
let month = date.getMonth()
let fullYear = date.getFullYear()

export const Years = () => {

  return (
    <div className="boxs">
        <div className="dayTime">
            <p>
             {toDay}
            </p>
        </div>
        <h1 id="Date">Day</h1>
        <div className="monthTime">
            <p>
             {month}
            </p>
        </div>
        <h1 id="Date">Month</h1>
        <div className="yearTime">
            <p>
             {fullYear}
            </p>
        </div>
        <h1 id="Date">Year</h1>
    </div>
  )
}
