import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Root from './components/Root/Root';
import JobDetails from './components/JobDetails/JobDetails';


// Routing is start herer..........
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Root></Root>,
      },
      {
        path: "job/:jobId",
        element: <JobDetails></JobDetails>,
        loader: ({params}) => fetch('../public/data.json')
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
