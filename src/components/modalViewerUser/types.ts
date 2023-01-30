import { Dispatch, SetStateAction } from "react";
import { iFavoriteGames } from "../card/userCard/types";

interface iUser {
  email: string;
  id: number;
  name: string;
  password: string;
  socialMedia: string;
  url?: string;
  confirmPassword?: string;
  favoriteGames?: iFavoriteGames;
}

export interface iGame {
  name: string;
  genre: string;
  img: string;
}

export interface iModalProfile {
  user: iUser;
}
