import * as React from "react";
import { Outlet, useParams } from "react-router-dom";
import FilterNavigator, { ListItem } from "../FilterNavigator/FilterNavigator";
import './Blog.css'
import PlatformContext, { FormFactor } from "../Platform/PlatformContext";


type Props = {
    articles: ListItem[]
}

export default function Blog(props: Props) {
    const platformInfo = React.useContext(PlatformContext)
    let { id } = useParams()

    if (platformInfo.formFactor === FormFactor.Wide) {
        return (
            <>
                <div className="blog-container">
                    <FilterNavigator route={"/pages/blog"} items={props.articles} />
                    <Outlet />
                </div>
            </>
        );
    }

    if (id === undefined) {
        return (
            <>
                <div className="blog-container">
                    <FilterNavigator route={"/pages/blog"} items={props.articles} />
                </div>
            </>
        );
    }

    return (
        <>
            <div className="blog-container">
                <Outlet />
            </div>
        </>
    );
}