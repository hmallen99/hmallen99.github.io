import * as React from "react";
import { Outlet } from "react-router-dom";
import FilterNavigator, { ListItem } from "../FilterNavigator/FilterNavigator";
import "./Projects.css"

type Props = {
    projects: ListItem[]
}

export default function Projects(props: Props) {
    return (
        <>
            <div className="projects-container">
                <FilterNavigator route={"/pages/projects"} items={props.projects} />
                <Outlet />
            </div>
        </>
    )
}