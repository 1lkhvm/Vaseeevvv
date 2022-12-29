import React from 'react'
import Home from '../Pages/Home';
import {
    createBrowserRouter,
} from "react-router-dom";

import Contact from '../Pages/Contact';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/Contact",
        element: <Contact />,
    }
]);



export default router





