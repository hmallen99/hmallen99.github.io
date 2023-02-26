import * as React from "react"
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { ContentNode } from "./ProjectPageContainer";

export default function MarkdownContent(props: ContentNode) {
    const [text, setText] = React.useState("")
    React.useEffect(() => {
        import(`../content/${props.src}`)
            .then((res) => fetch(res.default))
            .then((response) => response.text())
            .then((responseText) => {
                setText(responseText)
            })
            .catch((err) => {
                setText(err)
            })
    })

    return (
        <div className="project-text">
            <ReactMarkdown>
                {text}
            </ReactMarkdown>
        </div>
    )
}