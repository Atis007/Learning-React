import { useRef, useState, useEffect, useCallback } from "react";

import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import { sortPlacesByDistance } from "./loc.js";

const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
const storedPlaces = storedIds.map((id) =>
  AVAILABLE_PLACES.find((place) => place.id === id)
); // running when the overall app starts and thats it

function App() {
  const selectedPlace = useRef();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);

  // Want to get the user location as early as possible, when the app starts up.
  // The app component is the root component, so it's a great place to get the users location.
  // There is a built in browser object to get user location, the navigator.geolocation object
  // We can use the getCurrentPosition method on that object to get the user location
  // This method takes two arguments, a success callback and an error callback
  // If this method is called, the browser will ask the user for permission to access their location
  // If the user grants permission, the success callback will be called with a position object
  // If the user denies permission, the error callback will be called with an error object
  // We can use this position object to get the user's latitude and longitude
  // We can then use this information to show the user places that are near them

  // This is a side effect, this code is needed by the application, but is not directly related to the main goal of the component
  // Because the main goal is to return renderable JSX code, and this code IS a side effect, becasue its not directly related with that task
  // With an empty dependency array, this effect runs once after the initial render

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      {
        /* the navigator is provided by the browser */
      }
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );

      setAvailablePlaces(sortedPlaces);
    });
  }, []); // [] -> array of dependencies

  function handleStartRemovePlace(id) {
    setModalIsOpen(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || []; // Get the stored IDs from localStorage, or an empty array if none exist
    if (storedIds.indexOf(id) === -1) {
      localStorage.setItem(
        "selectedPlaces",
        JSON.stringify([id, ...storedIds])
      ); // spreading the existing Ids and adding a new one to the front of the array
    }
  }

  // useCallback is the solution to the problem wrote in DeleteConfirmation.jsx
  // useCallback returns the function that is wrapped in it, but now its not recreated on every render, instead its stored in memory
  const handleRemovePlace = useCallback(function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setModalIsOpen(false);

    const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    localStorage.setItem(
      "selectedPlaces",
      JSON.stringify(storedIds.filter((id) => id !== selectedPlace.current))
    );
  }, []);

  return (
    <>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText="Sorting places by distance... "
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
