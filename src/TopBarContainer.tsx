import * as React from "react";
import { Outlet } from "react-router-dom";
import PlainLink from "./PlainLink";
import './TopBarContainer.css'
import PlatformContext, { FormFactor } from "./Platform/PlatformContext";

export default function TopBarContainer() {
    const platformInfo = React.useContext(PlatformContext)

    const titleContent = platformInfo.formFactor === FormFactor.Wide ? "henry.allen" : "h.a"

    return (
        <>
            <div className="top-bar-container">
                <div className="top-bar">
                    <PlainLink to="/">
                        <div className="top-bar-title">
                            {titleContent}
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