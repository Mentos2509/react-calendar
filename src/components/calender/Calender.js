import React from 'react'
import '../calender/calender.css'
import SingleCell from '../single-cell/SingleCell'
import {differenceInDays, endOfMonth, startOfMonth, subMonths, addMonths, format, setDate} from 'date-fns'


const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
const renderDaysNames = (daysOfWeek) => {
  return daysOfWeek.map((day, index)=>{
    return <SingleCell key={index}>{day}</SingleCell>
})}



function Calender({value,onChange}) {
  const beginningOfTheMonth = startOfMonth(value)
  const endOfTheMonth = endOfMonth(value)
  const numberOfDaysInAMonth = differenceInDays(endOfTheMonth, beginningOfTheMonth ) + 1
  const arrayOfDaysInAMonth = Array.from({length :numberOfDaysInAMonth}, (_,i)=> i + 1)
  const numberOfFirstDayInAMonth = (beginningOfTheMonth.getDay() + 6 ) % 7
  const numberOfLastDayInAMonth = (endOfTheMonth.getDay() + 6) % 7
  const arrayOfEmptySingleCell = Array.from({length :numberOfFirstDayInAMonth}, (_,i)=> i + 1)
  const remainingDaysInCalender = 6 - numberOfLastDayInAMonth
  const arrayRemainingDaysInCalender = Array.from({length :remainingDaysInCalender}, (_,i)=> i + 1)


const renderDaysNumber = (days) => {
  return days.map((day,index)=>{
    return <SingleCell onClick={()=>handleClickOnDay(day)} key={index}>{day}</SingleCell>
  })
}

const renderEmptySingleCell = (days) => {
  return days.map((index)=>{
    return <SingleCell key={index}></SingleCell>
  })
}

const handleClickOnDay = ((date)=>{
    onChange(setDate(value, date))
})

  const nextMonth = () => onChange(addMonths(value,1))
  const nextYear = () => onChange(addMonths(value,12))
  const previousMonth = () => onChange(subMonths(value,1))
  const previousYear = () => onChange(subMonths(value,12))


  return (
    <div className='main-calender-wrapper'>
      <div className='grid-template'>
        <SingleCell onClick={previousYear}>{"<<"}</SingleCell>
        <SingleCell onClick={previousMonth}>{"<"}</SingleCell>
        <SingleCell special>{format(value, 'LLLL yyyy')}</SingleCell>
        <SingleCell onClick={nextMonth}>{">"}</SingleCell>
        <SingleCell onClick={nextYear}>{">>"}</SingleCell>
        {renderDaysNames(daysOfWeek)}
        {renderEmptySingleCell(arrayOfEmptySingleCell)}
        {renderDaysNumber(arrayOfDaysInAMonth)}
        {renderEmptySingleCell(arrayRemainingDaysInCalender)}
      </div>
    </div>
  )
}

export default Calender
