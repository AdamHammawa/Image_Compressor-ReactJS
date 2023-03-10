import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Compresspage from "./pages/Compresspage";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home";
import Contact from "./pages/Contact";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "Compresspage",
    element: <Compresspage />,
  },

  {
    path: "About",
    element: <About />,
  },

  {
    path: "Contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
