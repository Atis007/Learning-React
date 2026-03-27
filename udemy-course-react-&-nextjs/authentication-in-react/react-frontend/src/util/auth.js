import { redirect } from "react-router-dom";

export function getTokenDuration() {
  const storedExpiration = localStorage.getItem("expiration");
  const expirationDate = new Date(storedExpiration);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime(); //getting the difference in milliseconds
  // if duration is negative, or maybe 0 the token has expired, so we can remove it from local storage,
  // and the user will be logged out
  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem("token");

  // no token, user not logged in, return null
  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();

  // had a token, but time is up
  if (tokenDuration <= 0) {
    return "EXPIRED";
  }

  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth"); //user not logged in-> redirect to auth page
  }

  return null; //user logged in-> allow access to the route
}
