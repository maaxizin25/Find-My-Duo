import { Dispatch, SetStateAction } from "react";

export interface iModalAddGame {
  setState: Dispatch<SetStateAction<boolean>>;
}

export interface iGame {
  name: string;
  genre: string;
}

export interface iNewGame {
  newGame: string;
}
