import * as React from "react"
import { useParams } from "react-router-dom";
import { ArticleContext } from "./BlogContext";
import Article from "./Article";

export default function ArticleContainer() {
    const { id } = useParams();
    const articles = React.useContext(ArticleContext)

    let articleId = id || articles[0]?.id
    const article = React.useMemo(() => articles.find(a => a.id === articleId), [ articles, articleId ])
    const pageId = article?.id || "placeholder"

    const [articleText, setArticleText] = React.useState("")
    React.useEffect(() => {
        import(`../content/articles/${pageId}.md`)
            .then((res) => fetch(res.default))
            .then((response) => response.text())
            .then((result) => {
                setArticleText(result)
            }).catch(() => {
                setArticleText("### Error: 404")
            })
    }, [pageId])

    return (
        <Article text={articleText} />
    )
}