import { Outlet } from "react-router-dom";
import { ListItem } from "../FilterNavigator/FilterNavigator";
import "./Projects.css"

type Props = {
    projects: ListItem[]
}

export default function Projects(_props: Props) {
    return (
        <>
            <div className="projects-container">
                <Outlet />
            </div>
        </>
    )
}