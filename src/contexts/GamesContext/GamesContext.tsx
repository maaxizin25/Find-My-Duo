import api from "../../services/axios";
import { useState, useEffect, createContext } from "react";
import { iAllGames, iGamesChildren, iGamesValue } from "./types";

export const GamesContext = createContext({} as iGamesValue);

export const GamesContextProvider = ({ children }: iGamesChildren) => {
  const [allGames, setAllGames] = useState<iAllGames[]>([]);
  const [gameSelected, setGameSelected] = useState("");

  useEffect(() => {
    async function allGamesReq() {
      try {
        const response = await api.get("/games");
        setAllGames(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    allGamesReq();
  }, []);

  return (
    <GamesContext.Provider value={{ allGames, gameSelected, setGameSelected }}>
      {children}
    </GamesContext.Provider>
  );
};
