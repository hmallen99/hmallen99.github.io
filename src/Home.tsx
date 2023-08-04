import * as React from "react";
import PlainLink from "./PlainLink";

export default function Home() {
    return (
        <>
            <div className="container">
                <div className="title">henry.allen</div>
                <div className="navigator">
                    <div className="columns">
                        <PlainLink to="/pages/projects">
                            <div className="button">Projects</div>
                        </PlainLink>
                        <PlainLink to="/pages/resume">
                            <div className="button">Resume</div>
                        </PlainLink>
                    </div>
                </div>
            </div>
        </>
    );
}