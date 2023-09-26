import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Root from './component/roots/Root';
import Home from './component/home/Home';
import ErrorPage from './component/errorPage/ErrorPage';
import DonationDetails from './component/donationDetail/DonationDetails';
import Donation from './component/donation/Donation';
import Statistics from './component/statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage> ,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donations",
        element : <Donation></Donation>,
        loader : () => fetch('/../donation.json'),
      },
      {
        path : "/donation/:id",
        element : <DonationDetails></DonationDetails>,
        loader : () => fetch('/../donation.json'),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
