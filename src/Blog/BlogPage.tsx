import * as React from "react";
import { Outlet, useParams } from "react-router-dom";
import './Blog.css'
import BlogNavigator from "./BlogNavigator";

export default function Blog(props: any) {

  return (
    <>
      <div className="blog-container">
        <BlogNavigator />
        <Outlet />
      </div>
    </>
  );
}