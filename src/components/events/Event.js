import './event.css'

function Event() {

    const events = [
        { title: 'Event 1', description: 'Ugotuj ziemniaki', date: new Date(2023, 5, 15) },
        { title: 'Event 2', date: new Date(2023, 5, 20) },]


  return (
    <div className='event-wrapper'>
      <div>
        <p>Events</p>
      </div>
      <div>
        <p>{events[0].title}</p>
        <p>{events[0].description}</p>
      </div>
    </div>
  )
}

export default Event
