import * as React from "react"
import PlainLink from "../PlainLink"
import './FilterNavigator.css'

export type ListItem = {
    id: string,
    title: string,
}

type Props = {
    items: ListItem[],
    route: string
}

type CellProps = ListItem & {
    route: string
}

function ListCell(props: CellProps) {
    return (
        <PlainLink to={`${props.route}/${props.id}`}>
            <div className="filter-list-cell">{props.title}</div>
        </PlainLink>
    )
}


export default function FilterNavigator(props: Props) {
    const [filter, setFilter] = React.useState("");

    const listItems = props.items
        .filter((item) => item.title.toLowerCase().includes(filter.toLowerCase()))
        .map((item) => <ListCell route={props.route} key={item.id} {...item} />)

    return (
        <div className="filter-navigator-container">
            <div className="search-cell">
                <input defaultValue={"Filter"} type="text" className="search-bar" onFocus={(e) => e.target.value = ''} onChange={(e) => setFilter(e.target.value)}></input>
            </div>
            <div className="filter-list-container">
                <div className="filter-list">
                    {listItems}
                </div>
            </div>
        </div>

    )
}