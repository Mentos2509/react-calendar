import { useState } from "react";
import "./App.css";
import Calender from "./components/calender/Calender";
import { format } from "date-fns";
import Event from "./components/events/Event";
import { v4 as uuidv4 } from "uuid";
import TimeField from "react-simple-timefield";

function App() {
  const [currentDate, SetCurrentDate] = useState(new Date());
  const [event, setEvent] = useState([]);
  const [eventDescription, setEventDescription] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventTimeTo, setEventTimeTo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvent([
      ...event,
      {
        id: uuidv4(),
        event_time: eventTime,
        event_timeTo: eventTimeTo,
        event_description: eventDescription,
        event_date: currentDate,
      },
    ]);
    setEventTime("");
    setEventDescription("");
    setEventTimeTo("");
  };

  console.log(event);

  return (
    <div className="App">
      <div>
        <p>{format(currentDate, "dd LLLL yyyy")}</p>
      </div>
      <Calender
        value={currentDate}
        events={event}
        setEvent={setEvent}
        onChange={SetCurrentDate}
        eventDescription={eventDescription}
        eventTime={eventTime}
      />
      <Event events={event} />
      <form onSubmit={handleSubmit}>
      <span>From</span>
        <TimeField
          className={"time-field"}
          required
          value={eventTime}
          onChange={(e) => setEventTime(e.target.value)}
        ></TimeField>
        <span>To</span>
        <TimeField
         className={"time-field"}
          required
          value={eventTimeTo}
          onChange={(e) => setEventTimeTo(e.target.value)}
        ></TimeField>
        <input
          className="input"
          required
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
          type="text"
          placeholder="Event description"
        ></input>
        <button>Add Event</button>
      </form>
    </div>
  );
}

export default App;
