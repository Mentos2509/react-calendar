import "../dailyTasks/dailyTasks.css";
import { format } from "date-fns";
import { CiCircleRemove, CiEdit } from "react-icons/ci";

function DailyTasks({ events, selectedDate, handleDelete, handleEdit }) {
  const filteredEvents = events.filter(
    (event) => event.event_date.toDateString() === selectedDate?.toDateString()
  );

  return (
    <div className="daily-tasks">
      <h2 className="date-div">
        Tasks for {format(selectedDate, "dd LLLL yyyy")}
      </h2>
      {filteredEvents.length === 0 ? (
        <p>No tasks for this day.</p>
      ) : (
        <ul>
          {filteredEvents.map((event) => (
            <li key={event.id} className="event-li">
              <div className="event-date">
                <h3>
                  {event.event_time} - {event.event_timeTo}
                </h3>
                <div className="icon-div">
                  <CiEdit
                    className="icon"
                    onClick={() => handleEdit(event.id)}
                  />
                  <CiCircleRemove
                    className="icon"
                    onClick={() => handleDelete(event.id)}
                  />
                </div>
              </div>
              <p>{event.event_description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DailyTasks;
