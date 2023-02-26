import * as React from "react";
import './Blog.css'
import { ArticleContext, Article } from "./BlogContext";
import BlogLoading from "./BlogLoading";
import Blog from "./Blog";

export default function BlogContainer() {
  const [articles, setArticles] = React.useState<Article[]>([])
  const [isPending, startTransition] = React.useTransition()

  React.useEffect(() => {
    fetch("/articles.json").then((response) => {
      response.json().then((json) => {
        startTransition(() => {
          setArticles(json.articles)
        })
      })
    })
  }, [])

  if (isPending || articles.length === 0) {
    return (
      <BlogLoading />
    )
  }

  return (
    <ArticleContext.Provider value={articles}>
      <Blog />
    </ArticleContext.Provider>
  );
}