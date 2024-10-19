import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import TopBarContainer from './TopBarContainer';
import ProjectsContainer from './Projects/ProjectsContainer'
import ProjectListContainer from './Projects/ProjectListContainer';
import ProjectPageContainer from './Projects/ProjectPageContainer';
import ResumeContainer from './Resume/ResumeContainer';
import PlatformProvider from './Platform/PlatformProvider';

const router = createHashRouter([
  {
    path: "/",
    element: <TopBarContainer />,
    children: [
      {
        element: <ProjectsContainer />,
        children: [
          {
            index: true,
            element: <ProjectListContainer />
          },
          {
            path: "/projects/:id",
            element: <ProjectPageContainer />
          }
        ]
      },
      {
        path: "/resume",
        element: <ResumeContainer />,
      }
    ]
  },

]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PlatformProvider>
      <RouterProvider router={router} />
    </PlatformProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
