import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import NuevaCarrera from "./pages/nuevaCarrera.jsx";

const router = createBrowserRouter([
    {
        path: "",
        element: <App/>
    },
    {
        path: "/nueva-carrera",
        element: <NuevaCarrera></NuevaCarrera>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>

  </React.StrictMode>,
)
