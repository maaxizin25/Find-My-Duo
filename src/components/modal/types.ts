import { Dispatch, SetStateAction } from "react";

export interface iModal {
  setState: Dispatch<SetStateAction<boolean>>;
  title: string;
  state: boolean;
  children: React.ReactNode;
}