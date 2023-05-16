import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import About from './src/components/About';
import Support from './src/components/Support';

import Body from './src/components/Body';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Footer from './src/components/Footer';

import AboutBody from './src/components/AboutBody';
import DynamicRoute from './src/components/DynamicRoute';













// const root=ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//     <>
//     <h1>hello wrold</h1>
//     </>
// )

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    Outlet,
} from "react-router-dom";
import Support from "./src/components/Support";

let AppLayout = () => {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />

        </>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <AppLayout />
        ),
        children: [
            {
                path: '/',
                element: <Body />

            },
            {
                path: "about",
                element: <About />,

                children: [
                    {
                        path: 'aboutbody',
                        element: <AboutBody />
                    }
                ]

            },
            {
                path: "support",
                element: <Support />,
            },

            {
                path:'user/:name',
                element:<DynamicRoute/>
            }


        ]
    },

]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);