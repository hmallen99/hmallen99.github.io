import { createContext } from "react";

export enum Density {
    High,
    Low
}

export enum FormFactor {
    Compact,
    Wide
}

type PlatformInfo = {
    formFactor: FormFactor,
    density: Density,
}

const PlatformContext = createContext<PlatformInfo>({
    formFactor: FormFactor.Wide,
    density: Density.High,
})

export default PlatformContext;