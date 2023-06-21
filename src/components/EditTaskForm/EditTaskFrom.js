import TimeField from "react-simple-timefield";
import './editTaskForm.css'

function EditTaskFrom({
  handleSubmitEdit,
  eventTime,
  setEventTime,
  eventTimeTo,
  setEventTimeTo,
  eventDescription,
  setEventDescription,
  handleCancel
}) {
  return (
    <form onSubmit={handleSubmitEdit}>
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
        <button className="change-event-button">Change Event</button>
        <button onClick={handleCancel} className="cancel-button">Cancel</button>
      </div>
    </form>
  );
}

export default EditTaskFrom;
