import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Mainapp from './pages/Mainapp';
import Collection from './pages/Collection';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  BrowserRouter,
} from 'react-router-dom';

//<Route path="dashboard" element={<Dashboard />} />

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Mainapp />}>
//       <Route path="/collection" element={<Collection />} />
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Mainapp />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
