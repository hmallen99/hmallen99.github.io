import * as React from "react"
import { useParams } from "react-router-dom";
import { ProjectContext } from "./ProjectContext";
import ProjectPage from "./ProjectPage";

export type ContentNode = {
    type: string,
    src: string,
    height?: string,
    title?: string
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

export default function ArticleContainer() {
    const { id } = useParams();
    const projects = React.useContext(ProjectContext)

    const project = React.useMemo(() => projects.find(a => a.id === id), [projects, id])
    const pageId = project?.id || "placeholder"
    const [projectContent, setProjectContent] = React.useState<ProjectContent>()
    React.useEffect(() => {
        import(`../content/projects/${pageId}.json`)
            .then((result) => {
                setProjectContent(result.default)
            }).catch(() => {
                setProjectContent(ERROR_CONTENT)
            })
    }, [pageId])

    if (!projectContent) {
        return null
    }

    return (
        <ProjectPage projectContent={projectContent} />
    )
}