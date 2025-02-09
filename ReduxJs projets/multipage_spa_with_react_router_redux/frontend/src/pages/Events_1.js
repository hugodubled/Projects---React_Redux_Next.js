/*import {Link} from 'react-router-dom';

const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: 'some event'
    },
    {
        id: 'e2',
        title: 'Another event'
    }
]

function EventsPage() {
    return (
    <>
     <h1> Events Page </h1>
     <ul>
        {DUMMY_EVENTS.map(event => 
        <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
        </li>)
        }
     </ul>
    </>)
    
}
export default EventsPage*/

/*import { useEffect, useState } from 'react';

import EventsList from '../components/EventsList';

function EventsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedEvents, setFetchedEvents] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);
      const response = await fetch('http://localhost:8080/events');

      if (!response.ok) {
        setError('Fetching events failed.');
      } else {
        const resData = await response.json();
        setFetchedEvents(resData.events);
      }
      setIsLoading(false);
    }

    fetchEvents();
  }, []);
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
    </>
  );
}

export default EventsPage;*/

