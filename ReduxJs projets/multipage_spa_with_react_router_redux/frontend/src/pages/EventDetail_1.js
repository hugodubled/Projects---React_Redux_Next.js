/*import {useParams}  from 'react-router-dom';
//import {useLoaderData, json} from 'react-router-dom';
import { useRouteLoaderData, json, redirect } from "react-router-dom";

function EventDetailPage() {
   const params = useParams();
  //const data = useLoaderData();
  //const data = useRouteLoaderData("event-detail");

    return(<>
        <h1>EventDetailPage</h1>
        <p> Event ID: {params.eventId}</p>
        </>
    ) ;
}
export default EventDetailPage;

  

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw json(
      {
        message: "Could not fetch details for selected event",
      },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}

export async function action({ request, params }) {
  const eventId = params.eventId;
  const response = await fetch('http://localhost:8080/events/' + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      {
        message: "Could not delete current event."
      },
      {
        status: 500
      }
    );
  }
  return redirect('/events');
}*/