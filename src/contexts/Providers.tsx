import React from "react";
import { GamesContextProvider } from "./GamesContext/GamesContext";
import { UserProvider } from "./UserContext/UserContext";
import { AuthContextProvider } from "./AuthContext/AuthContext";
import { ChatContextProvider } from "./ChatContext/ChatContext";
import { NavContextProvider } from "./NavContext/NavContext";

interface iProvider {
  children: React.ReactNode;
}

export const Providers = ({ children }: iProvider) => {
  return (
    <UserProvider>
      <AuthContextProvider>
        <ChatContextProvider>
          <NavContextProvider>
            <GamesContextProvider>{children}</GamesContextProvider>
          </NavContextProvider>
        </ChatContextProvider>
      </AuthContextProvider>
    </UserProvider>
  );
};
