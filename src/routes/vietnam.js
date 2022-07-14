import React from 'react'
import { YearsInVietnam } from "../component/vietnam/YearsInVietnam"
import { HoursAndMinuteInVietnam } from "../component/vietnam/HoursAndMinuteInVietnam"

export const Vietnam = () => {
  return (
    <div>
        <h2 className="App">Vietnam</h2>
        <YearsInVietnam />
        <HoursAndMinuteInVietnam />
    </div>
  )
}
