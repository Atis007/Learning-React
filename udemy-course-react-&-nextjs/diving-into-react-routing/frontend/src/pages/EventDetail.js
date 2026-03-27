import { Suspense } from "react";
import { redirect, useRouteLoaderData, Await } from "react-router-dom";

import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

export default function EventDetailPage() {
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    <>
      <Suspense
        fallback={<p style={{ textAlign: "center" }}>Loading event...</p>}
      >
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>

      <Suspense
        fallback={<p style={{ textAlign: "center" }}>Loading events...</p>}
      >
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw new Response(
      JSON.stringify({
        message: "Could not fetch details for selected event.",
      }),
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
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

export async function loader({ request, params }) {
  const id = params.eventId;

  return {
    // with await here, the event will be loaded before the component is rendered
    // So, the single event detail page will wait for the event to be loaded, and render only when the event data is there
    // and after the render is done, and the user is in the event detail page, the events list will be start to load
    event: await loadEvent(id),
    events: loadEvents(),
  };
}

export async function action({ request, params }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method, // the method is set to DELETE in EventItem.js
  });

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not delete event." }), {
      status: 500,
    });
  }

  return redirect("/events");
}
