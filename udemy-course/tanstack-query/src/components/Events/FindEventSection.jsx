import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchEvents } from "../../util/http";
import LoadingIndicator from "../UI/LoadingIndicator";
import ErrorBlock from "../UI/ErrorBlock";
import EventItem from "./EventItem";

export default function FindEventSection() {
  const searchElement = useRef();
  const [searchTerm, setSearchTerm] = useState();

  // isPending will be true, even is the query is not enabled, but with isLoading, it will be false if the query is not enabled
  // because it is pending, but it is not loading anything
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["events", { searchTerm }],
    queryFn: ({ signal, queryKey }) => fetchEvents({ signal, ...queryKey[1] }), // same spread lik in NewEventsSection.jsx
    enabled: searchTerm !== undefined && searchTerm !== "", // only run the query, and show results, if there is a search term
  });

  function handleSubmit(event) {
    event.preventDefault();
    // unlike useref, useState causes a re-render of the component, thats why the query is re-executed,
    // and that way the searchTerm is updated and the page shows the correct results
    setSearchTerm(searchElement.current.value);
  }

  let content = <p>Please enter a search term and to find events.</p>;

  if (isLoading) {
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
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>
      {content}
    </section>
  );
}
