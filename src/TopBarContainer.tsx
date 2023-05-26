import * as React from "react";
import { Outlet } from "react-router-dom";
import PlainLink from "./PlainLink";
import './TopBarContainer.css'
import PlatformContext, { FormFactor } from "./Platform/PlatformContext";

export default function TopBarContainer() {
    const platformInfo = React.useContext(PlatformContext)

    const isWideMode = platformInfo.formFactor === FormFactor.Wide
    const topBarContainerStyle = isWideMode ? "top-bar" : "top-bar-compact"

    return (
        <>
            <div className="top-bar-container">
                <div className={topBarContainerStyle}>
                    {
                        isWideMode ?
                            <PlainLink to="/">
                                <div className="top-bar-title">
                                    henry.allen
                                </div>
                            </PlainLink>
                            : null
                    }
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