import React from 'react'
import { useEffect } from 'react'
import "./HoursAndMinute.css"

export const HoursAndMinute = () => {
    const date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    if(seconds < 10){
        seconds = "0" + seconds
    }
    if(minutes < 10){
        minutes = "0" + minutes
    }

    const [time, setTime] = React.useState();
    useEffect(() => {
        const timer = setInterval(() => {
          setTime(new Date().toLocaleString());
        }, 1000);
        
        return () => {
          clearInterval(timer);
        };
      }, []);
  return (
    <div className="boxs">
        <div className='Time'><p>{hours}</p></div>
        <div className='twoDot'><p>:</p></div>
        <div className='Time'><p>{minutes}</p></div>
        <div className='twoDot'><p>:</p></div>
        <div className='Time'><p>{seconds}</p></div>
    </div>
  )
}
