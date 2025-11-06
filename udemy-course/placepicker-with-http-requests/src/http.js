export async function fetchAvailablePlaces() {
  // fetch is provided directly by the browser
  // fetch is a function that can be used to send an HTTP request to some other server.
  // fetch wants the URL of the server we want to send the request to
  // the function that is passed to .then will be executed by the browser only once the response is there.
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json(); // This parses the JSON response body into a JavaScript object.

  if (!response.ok) {
    throw new Error("Failed to fetch places.");
  }

  return resData.places;
}

export async function fetchUserPlaces() {
  const response = await fetch("http://localhost:3000/user-places");
  const resData = await response.json(); // This parses the JSON response body into a JavaScript object.

  if (!response.ok) {
    throw new Error("Failed to fetch user places.");
  }

  return resData.places;
}

export async function updateUserPlaces(places) {
  // fetch can be used to send requests that want to change data
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    // places: places is the same as places
    body: JSON.stringify({ places }), // Converts the 'places' JavaScript object into a JSON string to be sent in the request body.
    // this is a metadata, thats attached to the request
    headers: {
      // informing the backend that the data attached to this request will be in JSON format. REQUIRED
      "Content-Type": "application/json", // Informs the server that the request body is in JSON format.
    },
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to update user data.");
  }

  return resData.message;
}
