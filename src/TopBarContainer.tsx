import * as React from "react";
import { Outlet } from "react-router-dom";
import PlainLink from "./PlainLink";

export default function TopBarContainer() {
    return (
        <>
            <div>
                <h2>TopBar</h2>
                <Outlet />
            </div>
        </>
    )
}