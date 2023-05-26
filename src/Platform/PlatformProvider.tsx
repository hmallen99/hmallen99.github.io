import * as React from "react";
import PlatformContext, { Density, FormFactor } from "./PlatformContext";

type Props = {
    children: React.ReactNode
}

const WideMode = {
    formFactor: FormFactor.Wide,
    density: Density.High,
}

const CompactMode = {
    formFactor: FormFactor.Compact,
    density: Density.High,
}


export default function PlatformProvider(props: Props) {
    const [platformInfo, setPlatformInfo] = React.useState({
        formFactor: FormFactor.Wide,
        density: Density.High,
    })

    const onWindowSizeChange = React.useCallback(() => {
        if (window.innerWidth < window.innerHeight || window.innerHeight < 500) {
            setPlatformInfo(CompactMode)
        }
        else {
            setPlatformInfo(WideMode)
        }
    }, [])

    React.useEffect(() => {
        window.addEventListener('resize', onWindowSizeChange)

        return () => {
            window.removeEventListener('resize', onWindowSizeChange)
        }
    }, [onWindowSizeChange])

    React.useEffect(() => {
        onWindowSizeChange()
    }, [onWindowSizeChange])

    return (
        <PlatformContext.Provider value={platformInfo}>
            {props.children}
        </PlatformContext.Provider>
    )
};