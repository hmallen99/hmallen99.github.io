import * as React from "react";

export default function Home(props: any) {
  return (
    <>
      <div className="container">
        <div className="title">henry.allen</div>
        <div className="navigator">
          <div className="columns">
            <div className="button-column">
              <div className="button">Blog</div>
            </div>
            <div className="button-column">
              <div className="button">Projects</div>
            </div>
            <div className="button-column">
              <div className="button">Resume</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}