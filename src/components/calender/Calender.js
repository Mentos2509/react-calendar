import React from 'react'
import '../calender/calender.css'
import SingleCell from '../single-cell/SingleCell'
import {differenceInDays, endOfMonth, startOfMonth} from 'date-fns'


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

const renderDaysNumber = (days) => {
  return days.map((day,index)=>{
    return <SingleCell key={index}>{day}</SingleCell>
  })
}


  console.log(value)
  console.log(beginningOfTheMonth)
  console.log(endOfTheMonth)
  console.log(Array.from({length :numberOfDaysInAMonth}, (_,i)=> i + 1))
  return (
    <div className='main-calender-wrapper'>
      <div className='grid-template'>
        <SingleCell>{"<<"}</SingleCell>
        <SingleCell>{"<"}</SingleCell>
        <SingleCell special>Month 2023</SingleCell>
        <SingleCell>{">"}</SingleCell>
        <SingleCell>{">>"}</SingleCell>
        {renderDaysNames(daysOfWeek)}
        {/* <SingleCell>1</SingleCell>
        <SingleCell>2</SingleCell>
        <SingleCell>3</SingleCell>
        <SingleCell>4</SingleCell>
        <SingleCell>5</SingleCell>
        <SingleCell>6</SingleCell>
        <SingleCell>7</SingleCell>
        <SingleCell>8</SingleCell>
        <SingleCell>9</SingleCell>
        <SingleCell>10</SingleCell>
        <SingleCell>11</SingleCell>
        <SingleCell>12</SingleCell>
        <SingleCell>13</SingleCell>
        <SingleCell>14</SingleCell>
        <SingleCell>15</SingleCell>
        <SingleCell>16</SingleCell>
        <SingleCell>17</SingleCell>
        <SingleCell>18</SingleCell>
        <SingleCell>19</SingleCell>
        <SingleCell>20</SingleCell>
        <SingleCell>21</SingleCell>
        <SingleCell>22</SingleCell>
        <SingleCell>23</SingleCell>
        <SingleCell>24</SingleCell>
        <SingleCell>25</SingleCell>
        <SingleCell>26</SingleCell>
        <SingleCell>27</SingleCell>
        <SingleCell>28</SingleCell>
        <SingleCell>29</SingleCell>
        <SingleCell>30</SingleCell>
        <SingleCell>31</SingleCell> */}
        {renderDaysNumber(arrayOfDaysInAMonth)}
      </div>
    </div>
  )
}

export default Calender
