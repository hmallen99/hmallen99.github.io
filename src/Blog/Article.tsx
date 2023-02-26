import * as React from "react"
import './Blog.css'
import ReactMarkdown from "react-markdown"

type Props = {
    text: string
}

export default function Article(props: Props) {
    return (
        <div className="blog-content">
            <div className="blog-text">
                <ReactMarkdown>
                    {props.text}
                </ReactMarkdown>
            </div>
        </div>
    )
}