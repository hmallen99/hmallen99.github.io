import * as React from "react"
import './Projects.css'
import { ContentNode, ProjectContent } from "./ProjectPageContainer"
import MarkdownContent from "./MarkdownContent"

type Props = {
    projectContent: ProjectContent
}

function contentNodeSelector(contentNode: ContentNode) {
    switch (contentNode.type) {
        case "text":
            return <MarkdownContent {...contentNode} />
        case "iframe":
            return <div className="iframe-container" >
                <iframe title={contentNode.title} style={{ height: contentNode.height || "75vh" }} className="iframe-content" src={contentNode.src}></iframe>
            </div>
        default:
            return <div>{contentNode.src}</div>
    }
}

export default function Project(props: Props) {
    const contentList = props.projectContent.content

    const elements = contentList.map(contentNodeSelector)

    return (
        <div className="project-content">
            <div className="project-body">
                {elements}
            </div>
        </div>
    )
}