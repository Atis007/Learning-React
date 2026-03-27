import { useQuery } from "@tanstack/react-query";

import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import EventItem from "./EventItem.jsx";
import { fetchEvents } from "../../util/http.js";

export default function NewEventsSection() {
  // the data is the data that is returned from the fetchEvents function
  // useQuery is used to GET data from a server, for sending data, we will use useMutation, find in NewEvent.jsx
  const { data, isPending, isError, error } = useQuery({
    // with the use of the queryKey, when the fetch is executed & http req sent, and the data is received
    // tanstack query will store that data internally, associated with this queryKey
    // later on, if we try to execute another fetch with the same queryKey, tanstack query will
    // return the stored data immediately without sending another HTTP request
    // but behind the scenes, it will also send a new HTTP request to fetch the most recent data, and if
    // something is changed, it will update the stored data and update all the components that are using that data
    queryKey: ["events", { max: 3 }], // unique key for this query, can be any serializable value, here we use an array with a string and an object
    // Fn means function, with this function, we will define the actual code that will be executed
    // that will send the actual request to fetch the data
    // tanstack query does not come with built in logic to send HTTP requests. It comes with logic
    // for managing those requests, for keeping track of the data and the possible errors etc.
    // The code for sending the requests MUST BE implemented by us
    queryFn: ({ signal, queryKey }) => fetchEvents({ signal, ...queryKey[1] }), // the spread operator copies the properties of the object in the queryKey array, with index 1, only the max property is being passed
    // with scaleTime, we can define for how long the data is considered fresh
    // during that time, if we try to fetch the data again with the same queryKey, tanstack query
    // will return the stored data immediately without sending another HTTP request
    staleTime: 5000, // 5 seconds
    // garbage collection time, after that time, the stored data will be removed from memory
    // this controls how long the data is kept in memory
    //gcTime: 300000, // 5 minutes
  });

  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="An error occurred"
        message={error.info?.message || "Failed to fetch events."}
      />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
