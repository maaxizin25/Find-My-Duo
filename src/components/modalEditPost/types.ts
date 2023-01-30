import { Dispatch, SetStateAction } from "react";

export interface iPost {
  title: string;
  content: string;
  userId?: string | undefined;
  id: number;
  uid: any;
}

export interface iModalEdit {
  post: iPost;
  setState: Dispatch<SetStateAction<boolean>>;
}
