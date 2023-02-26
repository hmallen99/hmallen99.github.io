import { parse } from "json5"
import * as React from "react"
import { ProjectContext } from "./ProjectContext"
import ProjectList from "./ProjectList"

export type ProjectBlurb = {
    id: string,
    text: string,
    thumbnailUrl?: string,  
}

export default function ProjectListContainer() {
    const projects = React.useContext(ProjectContext)
    const [blurbs, setBlurbs] = React.useState<Record<string, ProjectBlurb>>({})

    React.useEffect(() => {
        import("../content/projectblurbs.json")
            .then((json) => {
                setBlurbs(json.default)
            
            })
    }, [])


    const projectBlurbs = projects
        .filter((project) => blurbs[project.id] !== undefined)
        .map((project) => blurbs[project.id])

    return (
       <ProjectList blurbs={projectBlurbs}/>
    )
}