import '../dailyTasks/dailyTasks.css'
import { format} from "date-fns";


function DailyTasks({ events, selectedDate }) {
  const filteredEvents = events.filter(
    (event) => event.event_date.toDateString() === selectedDate?.toDateString()
  );

  return (
    <div className="daily-tasks">
      <h2>Tasks for {format(selectedDate, "dd LLLL yyyy")}</h2>
      {filteredEvents.length === 0 ? (
        <p>No tasks for this day.</p>
      ) : (
        <ul>
          {filteredEvents.map((event) => (
            <li key={event.id}>
              <h3>{event.event_time}</h3>
              <p>{event.event_description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DailyTasks;