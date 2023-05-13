import React from "react";
import { createRoot } from "react-dom/client";
import Error from "./src/Components/ErrorPageComponent";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

let Support = () => {
  return (
    <React.Fragment>
      Support
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
        cumque quidem labore ab expedita dolorum cupiditate debitis ullam quia
        facilis perferendis eveniet facere asperiores minima, culpa iusto?
        Neque, expedita dolore!
      </p>
    </React.Fragment>
  );
};
let Contect = () => {
  return (
    <React.Fragment>
      Contect
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
        cumque quidem labore ab expedita dolorum cupiditate debitis ullam quia
        facilis perferendis eveniet facere asperiores minima, culpa iusto?
        Neque, expedita dolore!
      </p>
    </React.Fragment>
  );
};
let About = () => {
  return (
    <React.Fragment>
      About
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
        cumque quidem labore ab expedita dolorum cupiditate debitis ullam quia
        facilis perferendis eveniet facere asperiores minima, culpa iusto?
        Neque, expedita dolore!
      </p>
    </React.Fragment>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div >
        <div>
          <Link to="/about">
          About
        </Link>
        <Link to="/contect">
          Contect
        </Link>
        <Link to="/support">
          Support
        </Link>
        </div>
      </div>
    ),
errorElement: (
  <div>
    <h1>404</h1>
    <p>Sorry, the page you requested could not be found.</p>
  </div>
),
  },

  {
    path: "/about",
    element: <About />,
  },
  {
    path: "contect",
    element: <Contect />,
  },
  {
    path: "support",
    element: <Support />,
  },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
