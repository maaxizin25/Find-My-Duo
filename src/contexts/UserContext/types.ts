import { iLoginData } from "../../components/form/formLogin/types";
import { iRegisterData } from "../../components/form/formRegister/types";
import { Dispatch, SetStateAction } from "react";

export interface iUserContextProps {
  children: React.ReactNode;
}

export interface iUserContext {
  user: iUser | null;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  login: (data: iLoginData) => void;
  registerUser: (data: iRegisterData) => void;
  posts: iPost[];
  filterUsers: (id: number) => iUserResponse | undefined;
  setLoadingGames: Dispatch<SetStateAction<boolean>>;
  filteredPosts: iPost[];
  setFilterPosts: Dispatch<SetStateAction<string>>;
  logout: () => void;
  setObserver: Dispatch<SetStateAction<boolean>>;
  allUsers: iUserResponse[];
  currentUser: iUserResponse;
  setCurrentUser: Dispatch<SetStateAction<iUserResponse>>;
  currentPost: iPost;
  setCurrentPost: Dispatch<SetStateAction<iPost>>;
}

export interface iPost {
  uid: string;
  content: string;
  id: number;
  title: string;
  userId: string;
}

export type iUser = {
  name: string | undefined;
  socialMedia: string | undefined;
  url: string | undefined;
  email: string | undefined;
  favoriteGames: any;
  id: string;
  token: string;
  user: iUserResponse;
};
export type iUserResponse = {
  email: string;
  age: string | undefined;
  favoriteGames: iGames[];
  socialMedia: string;
  id: number;
  name: string;
  url: string;
  password?: string;
};

interface iGames {
  name: string;
  genre: string;
  img: string;
}
