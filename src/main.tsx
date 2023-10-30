import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.tsx";
import DogPics from "./Components/DogPics/DogPics.tsx";
import DogPicsResume from "./Components/DogPicsResume/DogPicsResume.tsx";

const router = createHashRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dogpics",
        element: <DogPics />,
      },
      {
        path: "/dogpics/:id",
        element: <DogPicsResume />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
