import React, { Dispatch, SetStateAction } from "react";

export interface iAllGames {
  name: string;
  genre: string;
  img: string;
}

export interface iGamesChildren {
  children: React.ReactNode;
}

export interface iGamesValue {
  allGames: iAllGames[];
  gameSelected: string;
  setGameSelected: Dispatch<SetStateAction<string>>;
}
