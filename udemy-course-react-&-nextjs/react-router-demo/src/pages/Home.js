import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  }

  return (
    <>
      <h1>My Home Page</h1>
      {
        // with the anchor tag, technically it sends a request to the server to load a new page,
        // and load all the js code again, load the entire React app again, and Restart the React app
        // so the browser will do a full page reload, but in a Single Page Application we want to avoid that
        // Because the concept of SPA is to load the page once, and then dynamically update the content without reloading the entire page
        /* <p><a href=""></a></p> */
        // we just want to change the URL and set it to the URL the user is trying to navigate to, and it should prevent
        // the default of sending a request and instead let React Router know about the new URL, and ensure the Router loads the appropriate component
        // so to achieve that we use the Link component from react-router-dom
      }
      <p>
        Go to <Link to="products">the list of products</Link>
      </p>
      {/* just for example */}
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}
