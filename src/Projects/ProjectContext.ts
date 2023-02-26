import { createContext } from "react";
import { ListItem } from "../FilterNavigator/FilterNavigator";

export const ProjectContext = createContext<ListItem[]>([])