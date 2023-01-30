import api from "../../services/axios";
import StyledForm from "./styles";
import { Button } from "../button/Button";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { postEditSchema } from "../form/formSchemas";
import { iModalEdit, iPost } from "./types";

export const ModalEditPost = ({ post, setState }: iModalEdit) => {
  const { setLoadingGames } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iPost>({
    mode: "onBlur",
    resolver: yupResolver(postEditSchema),
  });

  const TOKEN = JSON.parse(localStorage.getItem("@TOKEN")!);

  const editPost = async (data: iPost) => {
    setLoadingGames(true);
    try {
      await api.patch(`/posts/${post.id}`, data, {
        headers: { Authorization: `Bearer ${TOKEN}` },
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingGames(false);
    }

    setState((old) => !old);
  };

  const deletePost = async () => {
    setLoadingGames(true);
    try {
      await api.delete(`/posts/${post.id}`, {
        headers: { Authorization: `Bearer ${TOKEN}` },
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingGames(false);
    }
    setState((old) => !old);
  };

  return (
    <StyledForm onSubmit={handleSubmit(editPost)}>
      <span>Edite seu post</span>
      <textarea
        {...register("content")}
        disabled={false}
        defaultValue={post.content}
      ></textarea>
      {errors.content && <span>{errors.content.message}</span>}
      <Button type="submit" buttonType="register">
        <span>Postar</span>
      </Button>
      <Button buttonType="register" type="button" onClick={deletePost}>
        <span>Excluir</span>
      </Button>
    </StyledForm>
  );
};
