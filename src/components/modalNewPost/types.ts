import { Dispatch, SetStateAction } from "react";

export interface iNewPost {
  title: string;
  content: string;
  userId?: string | undefined;
}
export interface iModalNewPost {
  setState: Dispatch<SetStateAction<boolean>>;
}
