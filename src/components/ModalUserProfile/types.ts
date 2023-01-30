import { Dispatch, SetStateAction } from "react";

interface iUser {
  email?: string;
  name?: string;
  age?: string;
  favoriteGames?: iGame[];
  socialMedia?: string;
  id?: string;
  url?: string;
}

export interface iGame {
  name: string;
  genre: string;
  img: string;
}

export interface iModalProfile {
  user: iUser | null;
  setState?: Dispatch<SetStateAction<boolean>>;
}
