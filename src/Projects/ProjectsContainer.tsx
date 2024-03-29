import * as React from "react";
import { ProjectContext } from "./ProjectContext";
import { ListItem } from "../FilterNavigator/FilterNavigator";
import Projects from "./Projects";
import LoadingPage from "../Loading/LoadingPage";

export default function ProjectsContainer() {
  const [projects, setProjects] = React.useState<ListItem[]>([])
  const [isPending, startTransition] = React.useTransition()

  React.useEffect(() => {
    import("../content/projects.json")
      .then((json) => {
        startTransition(() => {
          setProjects(json.default.projects)
        })
      })
  }, [])

  if (isPending || projects.length === 0) {
    return (
      <LoadingPage />
    )
  }

  return (
    <ProjectContext.Provider value={projects}>
      <Projects projects={projects} />
    </ProjectContext.Provider>
  );
}