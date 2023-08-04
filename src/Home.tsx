import * as React from "react";
import PlainLink from "./PlainLink";
import PlatformContext, { FormFactor } from "./Platform/PlatformContext";

export default function Home() {
    const platformInfo = React.useContext(PlatformContext)

    const buttonStyle = platformInfo.formFactor === FormFactor.Wide ? "button" : "button-compact"

    return (
        <>
            <div className="container">
                <div className="title">henry.allen</div>
                <div className="navigator">
                    <div className="columns">
                        <PlainLink to="/pages/projects">
                            <div className={buttonStyle}>Projects</div>
                        </PlainLink>
                        <PlainLink to="/pages/resume">
                            <div className={buttonStyle}>Resume</div>
                        </PlainLink>
                    </div>
                </div>
            </div>
        </>
    );
}