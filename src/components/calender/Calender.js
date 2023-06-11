import React from 'react'
import '../calender/calender.css'
import SingleCell from '../single-cell/SingleCell'


const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
const renderDays = (daysOfWeek) => {
  return daysOfWeek.map((day, index)=>{
    return <SingleCell key={index}>{day}</SingleCell>
})}

function Calender() {
  return (
    <div className='main-calender-wrapper'>
      <div className='grid-template'>
        <SingleCell>{"<<"}</SingleCell>
        <SingleCell>{"<"}</SingleCell>
        <SingleCell special>Month 2023</SingleCell>
        <SingleCell>{">"}</SingleCell>
        <SingleCell>{">>"}</SingleCell>
        {renderDays(daysOfWeek)}
        <SingleCell>1</SingleCell>
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
        <SingleCell>31</SingleCell>
      </div>
    </div>
  )
}

export default Calender
