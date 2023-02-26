import * as React from "react"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import PlainLink from "../PlainLink"
import { ProjectBlurb } from "./ProjectListContainer"
import "./Projects.css"


type Props = {
    blurbs: ProjectBlurb[]
}

function ListCell(props: ProjectBlurb) {
    return (
        <PlainLink to={`/pages/projects/${props.id}`} >
            <div className="projects-list-cell">
                <ReactMarkdown>
                    {props.text}
                </ReactMarkdown>
            </div>
        </PlainLink>
    )
}

export default function ProjectList(props: Props) {
    const entries = props.blurbs.map((blurb) => <ListCell key={blurb.id} {...blurb}/>)

    return (
        <>
            <div className="project-list-content">
                <div className="project-list-title">
                    Latest Projects
                </div>
                {entries}
            </div>
        </>
    )
}