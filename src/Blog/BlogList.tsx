import * as React from "react"
import PlainLink from "../PlainLink"
import './Blog.css'

const elements = [
    "hello",
    "world",
    "Lorem",
    "ipsum",
    "dolor",
    "sit",
    "hello",
    "world",
    "Lorem",
    "ipsum",
    "dolor",
    "sit",
    "hello",
    "world",
    "Lorem",
    "ipsum",
    "dolor",
    "sit",
    "hello",
    "world",
    "Lorem",
    "ipsum",
    "dolor",
    "sit",
    "hello",
    "world",
    "Lorem",
    "ipsum",
    "dolor",
    "sit",
]

type props = {
    filter: string
}

type ListCellProps = {
    id: number,
    text: string,
}

function BlogListCell(props: ListCellProps) {
    return (
        <PlainLink to={`/pages/blog/${props.id}`}>
            <div key={props.id} className="blog-list-cell">{props.text}</div>
        </PlainLink>
    )
}

export default function BlogList(props: props) {
    const filter = props.filter.toLowerCase()
    const children = elements
        .filter((elem) => elem.toLowerCase().includes(filter))
        .map((elem, index) => <BlogListCell id={index} text={elem} />)

    return (
        <div className="blog-list">
            {children}
        </div>
    )
}