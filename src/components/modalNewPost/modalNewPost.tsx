import api from "../../services/axios";
import StyledForm from "./styles";
import { MySelect } from "../select/select";
import { Button } from "../button/Button";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { postSchema } from "../form/formSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { GamesContext } from "../../contexts/GamesContext/GamesContext";
import { iModalNewPost, iNewPost } from "./types";

export const ModalNewPost = ({ setState }: iModalNewPost) => {
  const { user, setLoadingGames } = useContext(UserContext);
  const { allGames } = useContext(GamesContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iNewPost>({
    mode: "onBlur",
    resolver: yupResolver(postSchema),
  });

  const newPost = async (data: iNewPost) => {
    const token = JSON.parse(localStorage.getItem("@TOKEN")!);
    const uid = localStorage.getItem("@userUID");
    const dataUser = {
      content: data.content,
      title: data.title,
      userId: data.userId,
      uid: uid,
    };
    setLoadingGames(true);
    try {
      await api.post("/posts", dataUser, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(dataUser);
      setState((old) => !old);
    } catch (error) {
    } finally {
      setLoadingGames(false);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(newPost)}>
      <input
        type="text"
        value={user!.id + ""}
        {...register("userId")}
        style={{ display: "none" }}
      />
      <MySelect
        register={register("title")}
        label="Selecionar jogo"
        placeholder="Selecionar jogo"
        list={allGames}
      />
      {errors.title && <p>{errors.title.message}</p>}
      <span>Digite seu texto</span>
      <textarea
        {...register("content")}
        disabled={false}
        placeholder="Qual a play de hoje?"
      ></textarea>
      {errors.content && <p>{errors.content.message}</p>}
      <Button type="submit" buttonType="register">
        <span>Postar</span>
      </Button>
    </StyledForm>
  );
};
