import TimeField from "react-simple-timefield";

function TaskForm({
  handleSubmit,
  eventTime,
  setEventTime,
  eventTimeTo,
  setEventTimeTo,
  eventDescription,
  setEventDescription,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
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
      </div>
      <div>
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
  );
}

export default TaskForm;
