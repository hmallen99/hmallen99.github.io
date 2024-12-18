import * as React from "react"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import PlainLink from "../PlainLink"
import { ProjectBlurb } from "./ProjectListContainer"
import "./Projects.css"



type Props = {
    blurbs: ProjectBlurb[]
}

function ListCell(props: ProjectBlurb & { index: number }) {
    const [thumbnail, setThumbnail] = React.useState("")
    React.useEffect(() => {
        import(`../content/${props.thumbnailUrl}`)
            .then((thumb) => {
                setThumbnail(thumb.default)
            })
    }, [props.thumbnailUrl])

    return (
        <PlainLink to={`/projects/${props.id}`} >
            <div className={"projects-list-cell"}>
                {thumbnail ? <img className={"project-thumbnail"} src={thumbnail} alt="" /> : null}
                <div className="projects-list-cell-text">
                    <ReactMarkdown>
                        {props.text}
                    </ReactMarkdown>
                </div>
            </div>
        </PlainLink>
    )
}

export default function ProjectList(props: Props) {
    const entries = props.blurbs.map((blurb, index) => <ListCell key={blurb.id} {...blurb} index={index} />)

    return (
        <>
            <div className="project-list-content">
                {entries}
            </div>
        </>
    )
}

