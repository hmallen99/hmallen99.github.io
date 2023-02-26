import * as React from "react";
import { Outlet } from "react-router-dom";
import FilterNavigator, { ListItem } from "../FilterNavigator/FilterNavigator";
import './Blog.css'


type Props = {
    articles: ListItem[]
}

export default function Blog(props: Props) {
    return (
        <>
            <div className="blog-container">
                <FilterNavigator route={"/pages/blog"} items={props.articles}/>
                <Outlet />
            </div>
        </>
    );
}