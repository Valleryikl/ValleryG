import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import Layout from "./layout";
import Navbar from "./navbar";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/toto",
    // element: [<Navbar />, <Layout />],
    element: <Layout/>,
  }
]);

const title = createBrowserRouter([
  {
    path: "/",
    element: "Bienvenue",
  },
  {
    path: "/toto",
    element: "Toto",
  }
]);

const headerElement = document.getElementsByTagName("title")[0];
if (headerElement) {
  ReactDOM.createRoot(headerElement).render(
    <React.StrictMode>
      <RouterProvider router={title} />
    </React.StrictMode>
  );
}
const rootElement = document.getElementsByTagName("body")[0];
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}