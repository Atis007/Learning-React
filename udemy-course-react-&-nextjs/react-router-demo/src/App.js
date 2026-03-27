import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import { createRoutesFromElements, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

// before react router v6.4, JSX based routing, still works
/* const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<Products />} />
  </Route>
);

const router = createBrowserRouter(routeDefinitions); */

// after react router v6.4, object based routing
// the router will take a look at the url, and decide which component to load
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    // child route definitions to the root route, acts as a wrapper for these routes
    children: [
      { index: true, element: <HomePage /> }, // alternarive to path: ""
      { path: "products", element: <Products /> },
      // the : signals to react router DOM that the part after the /products/ is a dynamic value
      { path: "products/:productId", element: <ProductDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
