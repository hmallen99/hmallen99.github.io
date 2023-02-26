import * as React from "react"
import './Projects.css'
import ReactMarkdown from "react-markdown"
import { ContentNode, ProjectContent } from "./ProjectPageContainer"
import MarkdownContent from "./MarkdownContent"

type Props = {
    projectContent: ProjectContent
}

function contentNodeSelector(contentNode: ContentNode) {
    switch(contentNode.type) {
        case "text":
            return <MarkdownContent {...contentNode} />
        case "iframe":
            return <iframe className="iframe-content" src={contentNode.src}></iframe>
        default:
            return <div>{contentNode.src}</div>
    }
}

export default function Project(props: Props) {
    const contentList = props.projectContent.content

    const elements = contentList.map(contentNodeSelector)

    return (
        <div className="project-content">
            {elements}
        </div>
    )
}