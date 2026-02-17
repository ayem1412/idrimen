import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import router from './routes/router';
import './styles/App.css';

const root = document.getElementById('root');
if (!root) throw new ReferenceError('NO ROOT ELEMENT!');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
