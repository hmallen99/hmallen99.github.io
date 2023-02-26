import { createContext } from "react";
import { ListItem } from "../FilterNavigator/FilterNavigator";

export const ArticleContext =  createContext<ListItem[]>([])
