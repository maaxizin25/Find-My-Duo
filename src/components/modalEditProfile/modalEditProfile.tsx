import api from "../../services/axios";
import { Input } from "../input/Input";
import { Button } from "../button/Button";
import { useForm } from "react-hook-form";
import { StyledForm } from "./styles";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { profileSchema } from "../form/formSchemas";
import { iEditProfile, iProfile } from "./types";

export const ModalEditProfile = ({ setState }: iEditProfile) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iProfile>({
    mode: "onBlur",
    resolver: yupResolver(profileSchema),
  });

  const { user, setLoadingGames, setObserver } = useContext(UserContext);

  const handleAttUser = (data: iProfile) => {
    setLoadingGames(true);

    try {
      const TOKEN = JSON.parse(localStorage.getItem("@TOKEN")!);
      const ID = JSON.parse(localStorage.getItem("@ID")!);
      api.patch(`users/${ID}`, data, {
        headers: { Authorization: `Bearer ${TOKEN}` },
      });
    } catch (error) {
      console.log(error);
    } finally {
      setObserver(false);
      setState(false);
    }
  };

  return (
    <StyledForm noValidate={true} onSubmit={handleSubmit(handleAttUser)}>
      <Input
        errorInput={errors.name?.message}
        register={register("name")}
        type="text"
        placeHolder="Nome"
        defaultValue={user!.name}
      >
        <span>Nome de usuário</span>
      </Input>
      {errors.name && <span> {errors.name.message}</span>}
      <Input
        errorInput={errors.email?.message}
        register={register("email")}
        type="text"
        placeHolder="Email"
        defaultValue={user!.email}
      >
        <span>Email do Usuário</span>
      </Input>
      {errors.email && <span> {errors.email.message}</span>}
      <Input
        errorInput={errors.socialMedia?.message}
        register={register("socialMedia")}
        type="text"
        placeHolder="Name#discord"
        defaultValue={user!.socialMedia}
      >
        <span>Alterar discord</span>
      </Input>
      {errors.socialMedia && <span> {errors.socialMedia.message}</span>}
      <Input
        errorInput={errors.url?.message}
        register={register("url")}
        type="text"
        placeHolder="URL"
        defaultValue={user!.url}
      >
        <span>Alterar foto</span>
      </Input>
      {errors.url && <span> {errors.url.message}</span>}
      <Button type="submit" buttonType="register">
        <span>Confirmar</span>
      </Button>
    </StyledForm>
  );
};
