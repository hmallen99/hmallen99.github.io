import { createContext } from "react";

export type Article = {
    id: string,
    title: string,
  }

export const ArticleContext =  createContext<Article[]>([])
