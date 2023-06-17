import "./event.css";
import { format } from "date-fns";
import { CiCircleRemove, CiEdit } from "react-icons/ci";

function Event({ events, handleDelete }) {
  const sortedEvents = events.sort((a, b) => a.event_date - b.event_date);

  return (
    <div className="daily-tasks">
      <h2>Your monthly events</h2>
      <div className="event-list">
        <ul>
          {sortedEvents.map((event) => {
            return (
              <li key={event.id}>
                <div className="event-date">
                  <h2 className="date-div">{format(event.event_date, "dd LLLL yyyy")}</h2>
                  <div className="icon-div">
                    <CiEdit className="icon" />
                    <CiCircleRemove
                      className="icon"
                      onClick={() => handleDelete(event.id)}
                    />
                  </div>
                </div>
                <div className="event-details">
                  <h3> {event.event_time} - {event.event_timeTo} </h3>
                  <p>{event.event_description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Event;
