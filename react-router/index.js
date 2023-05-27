import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./src/Components/AppLayout";
import ContactUs from "./src/Components/ContactUs";
import AboutUs from "./src/Components/AboutUs";
import Support from "./src/Components/SupportPage";
import ResturantList from "./src/Components/ResturentList";
import Error from "./src/Components/ErrorPage";
import FoodMenu from "./src/Components/FoodMenu"
import Login_page from "./src/Components/Login-page";

import {
  createBrowserRouter,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";

let appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <ResturantList />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "support",
        element: <Support />,
      },
      {
        path: "resturant/:resturantId",
        element: <FoodMenu />,
      },
      {
        path: "login",
        element: <Login_page />,
      },

    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
