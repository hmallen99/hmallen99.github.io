import * as React from "react"
import './Projects.css'
import ReactMarkdown from "react-markdown"

type Props = {
    text: string
}

export default function Project(props: Props) {
    return (
        <div className="project-content">
            <div className="project-text">
                <ReactMarkdown>
                    {props.text}
                </ReactMarkdown>
            </div>
        </div>
    )
}