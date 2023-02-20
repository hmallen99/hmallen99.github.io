import * as React from "react";
import {
    Link,
} from "react-router-dom"

type PlainLinkProps = {
    to: string,
    children: React.ReactElement
}

export default function PlainLink(props: PlainLinkProps) {
    return (
        <Link to={props.to} style={{ "textDecoration": "none"}}>
            {props.children}
        </Link>
    )
}