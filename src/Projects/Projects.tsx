import * as React from "react";
import { Outlet } from "react-router-dom";
import FilterNavigator, { ListItem } from "../FilterNavigator/FilterNavigator";
import "./Projects.css"
import PlatformContext, { FormFactor } from "../Platform/PlatformContext";

type Props = {
    projects: ListItem[]
}

export default function Projects(props: Props) {
    const platformInfo = React.useContext(PlatformContext)

    return (
        <>
            <div className="projects-container">
                <Outlet />
            </div>
        </>
    )
}