import * as React from "react"
import { useParams } from "react-router-dom";
import { ProjectContext } from "./ProjectContext";
import ProjectPage from "./ProjectPage";

export type ContentNode = {
    type: string,
    src: string,
}

export type ProjectContent = {
    content: ContentNode[],
}

const ERROR_CONTENT = {
    content: [
        {
            type: "text",
            src: "placeholder.md"
        },
    ]
}

const DEFAULT_CONTENT = {
    content: []
}

export default function ArticleContainer() {
    const { id } = useParams();
    const projects = React.useContext(ProjectContext)

    const project = React.useMemo(() => projects.find(a => a.id === id), [ projects, id ])
    const pageId = project?.id || "placeholder"
    const [projectContent, setProjectContent] = React.useState<ProjectContent>(DEFAULT_CONTENT)
    React.useEffect(() => {
        fetch(`/projects/${pageId}.json`)
            .then((response) => response.json())
            .then((result) => {
                setProjectContent(result)
            }).catch(() => {
                setProjectContent(ERROR_CONTENT)
            })
    }, [pageId])

    return (
        <ProjectPage projectContent={projectContent} />
    )
}