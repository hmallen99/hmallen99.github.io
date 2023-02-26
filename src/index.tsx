import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import BlogContainer from './Blog/BlogContainer';
import TopBarContainer from './TopBarContainer';
import ArticleContainer from './Blog/ArticleContainer';
import ProjectsContainer from './Projects/ProjectsContainer'
import ProjectListContainer from './Projects/ProjectListContainer';
import ProjectContainer from './Projects/ProjectContainer';

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
        element: <BlogContainer />,
        children: [
          {
            index: true,
            element: <ArticleContainer />
          },
          {
            path: "/pages/blog/:id",
            element: <ArticleContainer />
          }
        ]
      },
      {
        path: "/pages/projects",
        element: <ProjectsContainer />,
        children: [
          {
            index: true,
            element: <ProjectListContainer />
          },
          {
            path: "/pages/projects/:id",
            element: <ProjectContainer />
          }
        ]
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
