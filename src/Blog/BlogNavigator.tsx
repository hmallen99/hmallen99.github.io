import * as React from "react"
import './Blog.css'
import BlogList from "./BlogList"

export default function BlogNavigator() {
    const [filter, setFilter] = React.useState("");

    return (
        <div className="navigator-container">
            <div className="search-cell">
                <div className="more-posts">Search Posts</div>
                <input type="text" className="search-bar" onChange={(e) => setFilter(e.target.value)}></input>
            </div>
            <div className="navigator-cell">
                <BlogList filter={filter}/>
            </div>
        </div>

    )
}