import * as React from "react";
import './Blog.css'
import { ArticleContext } from "./BlogContext";
import LoadingPage from "../Loading/LoadingPage";
import Blog from "./Blog";
import { ListItem } from "../FilterNavigator/FilterNavigator";

export default function BlogContainer() {
  const [articles, setArticles] = React.useState<ListItem[]>([])
  const [isPending, startTransition] = React.useTransition()

  React.useEffect(() => {
    fetch("/articles.json")
      .then((response) => response.json())
      .then((json) => {
        startTransition(() => {
          setArticles(json.articles)
        })
      })
  }, [])

  if (isPending || articles.length === 0) {
    return (
      <LoadingPage />
    )
  }

  return (
    <ArticleContext.Provider value={articles}>
      <Blog articles={articles}/>
    </ArticleContext.Provider>
  );
}