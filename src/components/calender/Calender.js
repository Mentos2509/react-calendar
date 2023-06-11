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
        <SingleCell>Mon</SingleCell>
        <SingleCell>Tue</SingleCell>
        <SingleCell>Wed</SingleCell>
        <SingleCell>Thur</SingleCell>
        <SingleCell>Fri</SingleCell>
        <SingleCell>Sat</SingleCell>
        <SingleCell>Sun</SingleCell>
      </div>
    </div>
  )
}

export default Calender
