import * as React from "react"
import { useParams } from "react-router-dom";
import { ProjectContext } from "./ProjectContext";
import ProjectPage from "./ProjectPage";

export default function ArticleContainer() {
    const { id } = useParams();
    const projects = React.useContext(ProjectContext)

    const project = React.useMemo(() => projects.find(a => a.id === id), [ projects, id ])
    const pageId = project?.id || "placeholder"
    const [articleText, setArticleText] = React.useState("")
    React.useEffect(() => {
        fetch(`/projects/${pageId}.md`).then((response) => {
            response.text().then((result) => {
                setArticleText(result)
            })
        }).catch(() => {
            setArticleText("### Error: 404")
        })
    }, [pageId])

    return (
        <ProjectPage text={articleText} />
    )
}