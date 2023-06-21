import { useState, useEffect, useRef } from "react";
import "./App.css";
import Calender from "./components/calender/Calender";
import { format, parseISO } from "date-fns";
import Event from "./components/events/Event";
import { v4 as uuidv4 } from "uuid";
import DailyTasks from "./components/dailyTasks/DailyTasks";
import EditTaskFrom from "./components/EditTaskForm/EditTaskFrom";
import TaskForm from "./components/TaskForm/TaskForm";


function App() {
  const [currentDate, SetCurrentDate] = useState(new Date());
  const [event, setEvent] = useState([]);
  const [eventDescription, setEventDescription] = useState("");
  const [eventTime, setEventTime] = useState("00:00");
  const [eventTimeTo, setEventTimeTo] = useState("00:00");
  const [monthOverview, setMonthOverview] = useState(false);
  const [isEditFormOpen, setEditFormOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

 
  const todaysDate = format(new Date(), "dd LLLL yyyy");

  const handleDelete = (eventID) => {
    const updatedEvents = event.filter((element) => element.id !== eventID);
    setEvent(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  const handleEdit = (eventID) => {
    console.log(eventID);
    setEditFormOpen(true);
    setSelectedId(eventID);
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

  const handleCancel = () => {
    setEditFormOpen(false);
    setSelectedId(null);
  }

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    const updatedEvents = event.map((element) => {
      if (selectedId === element.id) {
        return {
          id: selectedId,
          event_time: eventTime,
          event_timeTo: eventTimeTo,
          event_description: eventDescription,
          event_date: currentDate,
        };
      }
      return element;
    });
    setEvent(updatedEvents);
    setEventTime("00:00");
    setEventDescription("");
    setEventTimeTo("00:00");
    setSelectedId(null);
    setEditFormOpen(false);
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
        <p>{todaysDate}</p>
      </div>{" "}
      <Calender
        setMonthOverview={setMonthOverview}
        value={currentDate}
        events={event}
        setEvent={setEvent}
        onChange={SetCurrentDate}
        eventDescription={eventDescription}
        eventTime={eventTime}
      />
      {monthOverview ? (
        <Event
          events={event}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ) : (
        <DailyTasks
          events={event}
          selectedDate={currentDate}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      )}
      {isEditFormOpen ? (
        <EditTaskFrom
          handleSubmitEdit={handleSubmitEdit}
          eventDescription={eventDescription}
          eventTime={eventTime}
          setEventTime={setEventTime}
          setEventTimeTo={setEventTimeTo}
          eventTimeTo={eventTimeTo}
          setEventDescription={setEventDescription}
          handleCancel={handleCancel}
        />
      ) : (
        <TaskForm
          handleSubmit={handleSubmit}
          eventDescription={eventDescription}
          eventTime={eventTime}
          setEventTime={setEventTime}
          setEventTimeTo={setEventTimeTo}
          eventTimeTo={eventTimeTo}
          setEventDescription={setEventDescription}
        />
      )}
    </div>
  );
}

export default App;
