import React from 'react'
import { YearsInAmerica } from "../component/america/YearsInAmerica"
import { HoursAndMinuteInAmerica } from "../component/america/HoursAndMinuteInAmerica"

export const America = () => {
  return (
    <div>
        <h2 className="App">America</h2>
        <YearsInAmerica />
        <HoursAndMinuteInAmerica />
    </div>
  )
}
