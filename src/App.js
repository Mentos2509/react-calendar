import { useState, useEffect } from "react";
import "./App.css";
import Calender from "./components/calender/Calender";
import { format, parseISO } from "date-fns";
import Event from "./components/events/Event";
import { v4 as uuidv4 } from "uuid";
import TimeField from "react-simple-timefield";
import DailyTasks from "./components/dailyTasks/DailyTasks";

function App() {
  const [currentDate, SetCurrentDate] = useState(new Date());
  const [event, setEvent] = useState([]);
  const [eventDescription, setEventDescription] = useState("");
  const [eventTime, setEventTime] = useState("00:00");
  const [eventTimeTo, setEventTimeTo] = useState("00:00");
  const [monthOverview, setMonthOverview] = useState(false);

  const handleDelete = (eventID) => {
    const updatedEvents = event.filter((element) => element.id !== eventID);
    console.log(updatedEvents);
    setEvent(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: uuidv4(),
      event_time: eventTime,
      event_timeTo: eventTimeTo,
      event_description: eventDescription,
      event_date: currentDate,
    };
    const updatedEvents = [...event, newEvent];
    setEvent(updatedEvents);
    setEventTime("00:00");
    setEventDescription("");
    setEventTimeTo("00:00");
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  useEffect(() => {
    const storedEvents = localStorage.getItem("events");
    if (storedEvents) {
      const parsedEvents = JSON.parse(storedEvents).map((event) => ({
        ...event,
        event_date: parseISO(event.event_date),
      }));
      setEvent(parsedEvents);
    }
  }, []);

  return (
    <div className="App">
      <div>
        <p>{format(currentDate, "dd LLLL yyyy")}</p>
      </div>{" "}
      <Calender
        setMonthOverview={setMonthOverview}
        value={currentDate}
        events={event}
        setEvent={setEvent}
        onChange={SetCurrentDate}
        eventDescription={eventDescription}
        eventTime={eventTime}
      />{" "}
      {monthOverview ? (
        <Event events={event} handleDelete={handleDelete} />
      ) : (
        <DailyTasks events={event} selectedDate={currentDate} />
      )}
      {/* 
      <Event events={event} handleDelete={handleDelete} /> */}
      <form onSubmit={handleSubmit}>
        <div>
          {" "}
          <span>From</span>
          <TimeField
            className={"time-field"}
            required
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
          ></TimeField>{" "}
          <span>To</span>
          <TimeField
            className={"time-field"}
            required
            value={eventTimeTo}
            onChange={(e) => setEventTimeTo(e.target.value)}
          ></TimeField>
        </div>
        <div>
          {" "}
          <input
            className="input"
            required
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            type="text"
            placeholder="Event description"
          ></input>
          <button>Add Event</button>
        </div>
      </form>
    </div>
  );
}

export default App;
