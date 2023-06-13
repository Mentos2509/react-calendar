import "./event.css";
import { format } from "date-fns";

function Event({ events }) {
  const sortedEvents = events.sort((a, b) => a.event_date - b.event_date);

  return (
    <div className="event-wrapper">
      <div className="event-header">
        <h2>Your events</h2>
      </div>
      <div className="event-list">
        <ol>
          {sortedEvents.map((event) => {
            return (
              <li key={event.id} className="event-item">
                <div className="event-date">
                  <p>{format(event.event_date, "dd LLLL yyyy")}</p>
                </div>
                <div className="event-details">
                  <h3 className="event-title">
                    {event.event_time} - {event.event_timeTo}
                  </h3>
                  <p className="event-description">{event.event_description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default Event;
