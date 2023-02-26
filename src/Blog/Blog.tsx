import * as React from "react";
import { Outlet } from "react-router-dom";
import './Blog.css'
import BlogNavigator from "./BlogNavigator";


export default function Blog() {
    return (
        <>
            <div className="blog-container">
                <BlogNavigator />
                <Outlet />
            </div>
        </>
    );
}