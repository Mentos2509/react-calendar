import React, { useState } from "react";
import "../calender/calender.css";
import SingleCell from "../single-cell/SingleCell";
import {
  differenceInDays,
  endOfMonth,
  startOfMonth,
  subMonths,
  addMonths,
  format,
  setDate,
} from "date-fns";

function Calender({ value, onChange, event, setEvent, eventDescription, EventTitle }) {
  


  const beginningOfTheMonth = startOfMonth(value);
  const endOfTheMonth = endOfMonth(value);
  const numberOfDaysInAMonth =
    differenceInDays(endOfTheMonth, beginningOfTheMonth) + 1;
  const arrayOfDaysInAMonth = Array.from(
    { length: numberOfDaysInAMonth },
    (_, i) => i + 1
  );
  const numberOfFirstDayInAMonth = (beginningOfTheMonth.getDay() + 6) % 7;
  const numberOfLastDayInAMonth = (endOfTheMonth.getDay() + 6) % 7;
  const arrayOfEmptySingleCell = Array.from(
    { length: numberOfFirstDayInAMonth },
    (_, i) => i + 1
  );
  const remainingDaysInCalender = 6 - numberOfLastDayInAMonth;
  const arrayRemainingDaysInCalender = Array.from(
    { length: remainingDaysInCalender },
    (_, i) => i + 1
  );

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
  const renderDaysNames = (daysOfWeek) => {
    return daysOfWeek.map((day, index) => {
      return (
        <SingleCell className={"display-week-day"} key={index}>
          {day}
        </SingleCell>
      );
    });
  };

  const renderDaysNumber = (days) => {
    return days.map((day, index) => {
      const isWeekend = [0, 6].includes(
        new Date(value.getFullYear(), value.getMonth(), day).getDay()
      );
      const cellClassName = isWeekend ? "display-weekend" : "display-regular";
      const isActive = day === value.getDate();
      const cellClass = isActive
        ? `${cellClassName} active-day`
        : cellClassName;
      return (
        <SingleCell
          className={cellClass}
          onClick={() => handleClickOnDay(day)}
          key={index}
        >
          {day}
        </SingleCell>
      );
    });
  };

  const renderEmptySingleCell = (days) => {
    return days.map((index) => {
      return (
        <SingleCell className={"display-regular"} key={index}></SingleCell>
      );
    });
  };

  const handleClickOnDay = (date) => {
    onChange(setDate(value, date));
    // setEvent([...event, {id:1, name: "ugotować ziemniaki" ,date:value }])
  };

 

  const nextMonth = () => onChange(addMonths(value, 1));
  const nextYear = () => onChange(addMonths(value, 12));
  const previousMonth = () => onChange(subMonths(value, 1));
  const previousYear = () => onChange(subMonths(value, 12));

  return (
    <div className="main-calender-wrapper">
      <div className="grid-template">
        <SingleCell className={"display-regular"} onClick={previousYear}>
          {"<<"}
        </SingleCell>
        <SingleCell className={"display-regular"} onClick={previousMonth}>
          {"<"}
        </SingleCell>
        <SingleCell className={"display-special"} special>
          {format(value, "LLLL yyyy")}
        </SingleCell>
        <SingleCell className={"display-regular"} onClick={nextMonth}>
          {">"}
        </SingleCell>
        <SingleCell className={"display-regular"} onClick={nextYear}>
          {">>"}
        </SingleCell>
        {renderDaysNames(daysOfWeek)}
        {renderEmptySingleCell(arrayOfEmptySingleCell)}
        {renderDaysNumber(arrayOfDaysInAMonth)}
        {renderEmptySingleCell(arrayRemainingDaysInCalender)}
      </div>
    </div>
  );
}

export default Calender;
