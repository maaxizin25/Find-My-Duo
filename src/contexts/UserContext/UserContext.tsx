import api from "../../services/axios";
import { NavigateFunction, useNavigate } from "react-router-dom";
import {
  iPost,
  iUser,
  iUserContext,
  iUserContextProps,
  iUserResponse,
} from "./types";
import { useState, useEffect, createContext } from "react";
import { iLoginData } from "../../components/form/formLogin/types";
import { iRegisterData } from "../../components/form/formRegister/types";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const navigate: NavigateFunction = useNavigate();
  const [observer, setObserver] = useState(true);
  const [user, setUser] = useState<iUser | null>(null);
  const [posts, setPosts] = useState([] as iPost[]);
  const [allUsers, setAllUsers] = useState([] as iUserResponse[]);
  const [loadingGames, setLoadingGames] = useState(false);
  const [filterPosts, setFilterPosts] = useState("todos");
  const [currentUser, setCurrentUser] = useState({} as iUserResponse);
  const [currentPost, setCurrentPost] = useState({} as iPost);

  function filterUsers(id: number) {
    const findUser = allUsers.find((e: iUserResponse) => e.id == id);
    return findUser;
  }

  const functionFilter = (game: string) => {
    if (game === "todos") {
      return posts;
    } else {
      const filteredNewPost = posts.filter((e) => e.title === game);
      return filteredNewPost;
    }
  };

  const filteredPosts = functionFilter(filterPosts);

  useEffect(() => {
    async function infoUser() {
      const token = localStorage.getItem("@TOKEN");
      const myId: string | null = localStorage.getItem("@ID");

      if (!token && !myId) {
        return;
      }
      try {
        const myToken = JSON.parse(token!);
        api.defaults.headers.common.authorization = `Bearer ${myToken}`;
        const response = await api.get(`/users/${myId}`);
        const responsePost = await api.get("/posts");
        const responseAllUsers = await api.get("/users");
        setPosts(responsePost.data);
        setUser(response.data);
        setAllUsers(responseAllUsers.data);
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
        localStorage.clear();
      }
    }
    infoUser();
  }, [navigate, loadingGames, observer]);

  async function login(data: iLoginData) {
    try {
      const response = await api.post("/login", data);
      // Toast
      localStorage.setItem("@TOKEN", JSON.stringify(response.data.accessToken));
      localStorage.setItem("@ID", response.data.user.id);
      setUser(response.data.user);
      navigate("/dashboard");
    } catch (error) {
      // Toast de erro
    }
  }
  async function registerUser(data: iRegisterData) {
    try {
      const response = await api.post("/register", {
        ...data,
        favoriteGames: [
          {
            name: "Valorant",
            genre: "FPS",
            img: "https://seeklogo.com/images/V/valorant-logo-FAB2CA0E55-seeklogo.com.png",
          },
        ],
      });

      console.log(response);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  function logout() {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@ID");
    setUser(null);
    navigate("/");
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        login,
        registerUser,
        posts,
        filterUsers,
        setLoadingGames,
        filteredPosts,
        setFilterPosts,
        logout,
        setObserver,
        allUsers,
        currentUser,
        setCurrentUser,
        currentPost,
        setCurrentPost,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
