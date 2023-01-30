import { profile } from "console";
import { type } from "os";

export interface iNavChildren {
  children: React.ReactNode;
}

export interface iNav {
    nav: tNav | null;
    setNav: React.Dispatch<React.SetStateAction<tNav | null>>;
    isChat: boolean;
    setChat: React.Dispatch<React.SetStateAction<boolean>>;
}

export type tNav = "chat" | "users" | "profile";