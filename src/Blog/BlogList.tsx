import * as React from "react"
import PlainLink from "../PlainLink"
import './Blog.css'
import { Article, ArticleContext } from "./BlogContext"

type props = {
    filter: string
}

function BlogListCell(props: Article) {
    return (
        <PlainLink to={`/pages/blog/${props.id}`}>
            <div className="blog-list-cell">{props.title}</div>
        </PlainLink>
    )
}

export default function BlogList(props: props) {
    const articles = React.useContext(ArticleContext)
    
    const filter = props.filter.toLowerCase()
    const children = articles
        .filter((elem) => elem.title.toLowerCase().includes(filter))
        .map((elem) => <BlogListCell key={elem.id} {...elem} />)

    return (
        <div className="blog-list">
            {children}
        </div>
    )
}