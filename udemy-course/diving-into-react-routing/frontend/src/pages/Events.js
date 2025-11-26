import { Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";

import EventsList from "../components/EventsList";

export default function EventsPage() {
  // in this code the loader in the route configuration for this page returns the list of events <-- we know that
  // the loader is async so itt will return a promise, react-router will check if a promise is returned
  // and automatically get the resolved data from that promise.

  const { events } = useLoaderData();
  // one way to handle errors from the loader function
  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
  //const events = data.events;
  // return (
  //   <>
  //     <EventsList events={events} />
  //   </>
  // );

  // this Await component will wait for the data to be there.
  return (
    // Suspense is a component to show a fallback while waiting for the events to be fetched
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading events...</p>}>
      <Await resolve={events}>
        {/* once the data is there, the function will be executed, by react router*/}
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

async function loadEvents() {
  // the loader function will be executed by react-router whenever we visit this route, so before the component is rendered,
  // the loader function will be triggered and executed by react-router
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events." };
    throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500,
    });
  } else {
    //const resData = await response.json();
    // with this loader function react-router will automatically take any value that is returned from the function
    // and will make it available in that page that being rendered here
    //return resData.events;
    //const res = new Response("any data", { status: 201 });
    //return response;

    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
  return {
    events: loadEvents(),
  };
}
