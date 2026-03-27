import { redirect } from "react-router-dom";

import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  // this is not a components, so we can't use hooks like useSearchParams
  // insted, we can use the URL API, which is built in browser function, to get the search parameters
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login"; // 'login' or 'signup', if no mode is provided, default to 'login'

  if (mode !== "login" && mode !== "signup") {
    throw new Error("Unsupported mode!", { status: 422 });
  }

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const respone = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (respone.status === 422 || respone.status === 401) {
    return respone;
  }

  if (!respone.ok) {
    throw new Error("Could not authenticate user.", { status: 500 });
  }

  const resData = await respone.json();
  const token = resData.token;

  // store the token in local storage so we can use it later
  localStorage.setItem("token", token);
  const expiraition = new Date();
  expiraition.setHours(expiraition.getHours() + 1); // token expires in 1 hour
  localStorage.setItem("expiration", expiraition.toISOString()); // store expiration time in local storage, called 'expiration'
  // it is ensures that the token will be expired after 1 hour, because with the useEffects timer in Root.js,
  // if the page is refreshed, the timer will be reset to 1 hour again. We dont want that.
  return redirect("/");
}
