import { createBrowserRouter } from 'react-router';
import AppLayout from '../layouts/AppLayout';
import HomePage from '../features/home/pages/HomePage';

export default createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
]);
