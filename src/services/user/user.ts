import api from "../axios";
import { useNavigate } from "react-router-dom";
import { iRegisterData } from "../../components/form/formRegister/types";
import { iLoginData } from "../../components/form/formLogin/types";
import { iUser } from "../../contexts/UserContext/types";

const navigate = useNavigate();

export const signUp = (data: iRegisterData) => {
  api
    .post("/register", data, { timeout: 5000 })
    .then((res) => {
      navigate("/login");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signIn = (
  data: iLoginData,
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>
) => {
  api.post("/login", data, { timeout: 5000 }).then((res) => {
    const { accessToken: token } = res.data;
    api.defaults.headers.Authorization = `Bearer ${token}`;
    localStorage.setItem("@TOKEN", token);
    const user: iUser = {
      token: res.data.accessToken,
      id: res.data.id,
      name: undefined,
      url: undefined,
      socialMedia: undefined,
      email: undefined,
      favoriteGames: undefined,
      user: {
        email: "",
        age: undefined,
        favoriteGames: [],
        socialMedia: "",
        id: 0,
        name: "",
        url: "",
        password: undefined,
      },
    };
    return user;
  });
};
