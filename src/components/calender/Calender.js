import React from 'react'
import '../calender/calender.css'
import SingleCell from '../single-cell/SingleCell'


function Calender() {
  return (
    <div className='main-calender-wrapper'>
      <div className='grid-template'>
        <SingleCell>{"<<"}</SingleCell>
        <SingleCell>{"<"}</SingleCell>
        <SingleCell special>Month 2023</SingleCell>
        <SingleCell>{">"}</SingleCell>
        <SingleCell>{">>"}</SingleCell>
        <SingleCell>Monday</SingleCell>
        <SingleCell>Tuesday</SingleCell>
        <SingleCell>Wednesday</SingleCell>
        <SingleCell>Thursday</SingleCell>
        <SingleCell>Friday</SingleCell>
        <SingleCell>Saturday</SingleCell>
        <SingleCell>Sunday</SingleCell>
      </div>
    </div>
  )
}

export default Calender
