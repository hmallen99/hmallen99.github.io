import * as React from "react";
import PlainLink from "./PlainLink";

export default function Home() {
    return (
        <>
            <div className="container">
                <div className="title">henry.allen</div>
                <div className="navigator">
                    <div className="columns">
                        <div className="button-column">
                            <PlainLink to="/pages/blog" >
                                <div className="button">Blog</div>
                            </PlainLink>
                        </div>
                        <div className="button-column">
                            <PlainLink to="/pages/projects">
                                <div className="button">Projects</div>
                            </PlainLink>
                        </div>
                        <div className="button-column">
                            <PlainLink to="/pages/resume">
                                <div className="button">Resume</div>
                            </PlainLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}