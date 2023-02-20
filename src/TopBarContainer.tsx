import * as React from "react";
import { Outlet } from "react-router-dom";
import PlainLink from "./PlainLink";
import './TopBarContainer.css'

export default function TopBarContainer() {
    return (
        <>
            <div className="top-bar-container">
                <div className="top-bar">
                    <PlainLink to="/">
                        <div className="top-bar-button">
                            Home
                        </div>
                    </PlainLink>
                    <PlainLink to="/pages/blog">
                        <div className="top-bar-button">
                            Blog
                        </div>
                    </PlainLink>
                    <PlainLink to="/pages/projects">
                        <div className="top-bar-button">
                            Projects
                        </div>
                    </PlainLink>
                    <PlainLink to="/pages/resume">
                        <div className="top-bar-button">
                            Resume
                        </div>
                    </PlainLink>
                </div>


                <Outlet />
            </div>
        </>
    )
}