import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import Blog from './Blog/BlogPage';
import TopBarContainer from './TopBarContainer';
import BlogContent from './Blog/BlogContent';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/pages",
    element: <TopBarContainer />,
    children: [
      {
        path: "/pages/blog",
        element: <Blog />,
        children: [
          {
            index: true,
            element: <BlogContent />
          },
          {
            path: "/pages/blog/:id",
            element: <BlogContent />
          }
        ]
      },
      {
        path: "/pages/projects",
        element: <h2>Projects</h2>,
      },
      {
        path: "/pages/resume",
        element: <h2>Resume</h2>,
      }
    ]
  },
  
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
