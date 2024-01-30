import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Provider from './providers/Provider';
import Test from './pages/test';
import Accounts from './pages/Accounts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Provider />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'accounts',
        element: <Accounts />,
      },
      {
        path: 'test',
        element: <Test />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
