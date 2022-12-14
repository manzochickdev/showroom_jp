import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import FoodApp from './project2/FoodApp';
import HelloWorld from './HelloWorld/HelloWorld';
import PorfolioApp from './portfolio/App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/hello",
    element: <HelloWorld/>
  },
  {
    path: "/food",
    element: <FoodApp/>,
  },
  {
    path: "/portfolio",
    element: <PorfolioApp/>,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
