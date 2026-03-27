import { useState, useEffect } from "react";

import Places from "./Places.jsx";
import ErrorPage from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

// In this course in a previous chapter(so in another projectfile) we are fetched data from localStorage in a previous project.
// localStorage can be accessed synchronously, the data that is fetched is there immediately.

export default function AvailablePlaces({ onSelectPlace }) {
  // when fetching data, its common to have these three pieces of state work together:
  const [isFetching, setIsFetching] = useState(false); // loading state, use to tell the user that data is being fetched
  const [availablePlaces, setAvailablePlaces] = useState([]); // data state, store the fetched data
  const [error, setError] = useState(null); // error state, use to show potential errors to the user

  // useEffect helps out, because this fetch function will be executing forever, because of the state updates.
  useEffect(() => {
    async function fetchplaces() {
      setIsFetching(true);

      // try block -> try to execute some code, if it fails, the control is passed to the catch block
      try {
        const places = await fetchAvailablePlaces();

        //getcurrentposition takes a function which will be executed eventually by the browser in the future
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude);
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch (error) {
        // catch block -> catches the twrow error from the try block, and handles it
        setError({
          message:
            error.message || "Could not fetch places, please try again later!",
        });
        setIsFetching(false);
      }
    }

    fetchplaces();

    // commented out, but its here because its important for my learning process, and this is my code ;)
    /*.then((response) => {
        //json method can be used to extract data that's attached in the JSON format
        // json = text-based data format
        return response.json();
      })
      .then((resData) => {
        setAvailablePlaces(resData.places);
      });*/
  }, []); // <- empty dependency array means this effect runs only once after the first render

  if (error) {
    return <ErrorPage title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Loading places..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
