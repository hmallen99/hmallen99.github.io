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
                    <div className="top-bar-links">
                        <PlainLink to="/resume">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48" fill="none">
                                <path d="M8 39C8 37.6739 8.52678 36.4021 9.46447 35.4645C10.4021 34.5268 11.6739 34 13 34H40M8 39C8 40.3261 8.52678 41.5979 9.46447 42.5355C10.4021 43.4732 11.6739 44 13 44H40V4H13C11.6739 4 10.4021 4.52678 9.46447 5.46447C8.52678 6.40215 8 7.67392 8 9V39Z" stroke="#6F6F6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </PlainLink>
                        <a href="https://github.com/hmallen99">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48" fill="none">
                                <g clipPath="url(#clip0_3_41)">
                                    <path d="M18 38C8 41 8 33 4 32M32 44V36.26C32.075 35.3063 31.9462 34.3476 31.622 33.4476C31.2979 32.5476 30.7859 31.7268 30.12 31.04C36.4 30.34 43 27.96 43 17.04C42.9995 14.2477 41.9254 11.5624 40 9.54C40.9117 7.09701 40.8472 4.3967 39.82 2C39.82 2 37.46 1.3 32 4.96C27.416 3.71764 22.584 3.71764 18 4.96C12.54 1.3 10.18 2 10.18 2C9.15275 4.3967 9.08829 7.09701 10 9.54C8.06025 11.5774 6.98505 14.2869 7 17.1C7 27.94 13.6 30.32 19.88 31.1C19.222 31.7799 18.7145 32.5908 18.3906 33.4798C18.0667 34.3689 17.9336 35.3161 18 36.26V44" stroke="#6F6F6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3_41">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/henry-allen-3bb745150/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48" fill="none">
                                <path d="M32 16C35.1826 16 38.2348 17.2643 40.4853 19.5147C42.7357 21.7652 44 24.8174 44 28V42H36V28C36 26.9391 35.5786 25.9217 34.8284 25.1716C34.0783 24.4214 33.0609 24 32 24C30.9391 24 29.9217 24.4214 29.1716 25.1716C28.4214 25.9217 28 26.9391 28 28V42H20V28C20 24.8174 21.2643 21.7652 23.5147 19.5147C25.7652 17.2643 28.8174 16 32 16Z" stroke="#6F6F6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 18H4V42H12V18Z" stroke="#6F6F6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" stroke="#6F6F6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
                <Outlet />
            </div>
        </>
    )
}