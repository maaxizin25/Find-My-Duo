import { Button } from "../button/Button";
import { StyledForm } from "./styles";
import { MySelect } from "../select/select";
import { iModalAddGame, iNewGame } from "./types";
import { iGame } from "./types";
import { newGameSchema } from "../form/formSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../services/axios";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { useContext } from "react";
import { GamesContext } from "../../contexts/GamesContext/GamesContext";

export const ModalAddGame = ({ setState }: iModalAddGame) => {
  const { allGames } = useContext(GamesContext);
  const { user, setObserver } = useContext(UserContext);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iNewGame>({
    mode: "onBlur",
    resolver: yupResolver(newGameSchema),
  });

  const alreadyHave = (gameA: iGame, gameB: iGame) => gameA.name === gameB.name;

  const onlyNew = (
    AllGames: iGame[],
    MyGames: iGame[],
    compareFunction: (gameA: iGame, gameB: iGame) => boolean
  ) =>
    AllGames.filter(
      (Game) => !MyGames.some((MyGame) => compareFunction(MyGame, Game))
    );

  const newGames = onlyNew(allGames, user!.favoriteGames, alreadyHave);

  const addGame = (data: iNewGame) => {
    setObserver(true)
    try {
      const newGame = allGames.find((game: iGame) => game.name === data.newGame);
      const newListFavorites = [...user!.favoriteGames, newGame];
      const TOKEN = JSON.parse(localStorage.getItem("@TOKEN")!);
      api.patch(
        `users/${user!.id}`,
        { favoriteGames: newListFavorites },
        { headers: { Authorization: `Bearer ${TOKEN}` } }
      );
    } catch (error) {
      console.error(error)
    } finally {
      setObserver(false)
    }

    setState((old) => !old);
  };

  return (
    <StyledForm onSubmit={handleSubmit(addGame)}>
      <p>Selecione um jogo</p>
      <MySelect
        register={register("newGame")}
        placeholder="Selecione um Jogo"
        label={"Selecione um jogo"}
        list={newGames}
      ></MySelect>
      <span>{errors.newGame && errors.newGame.message}</span>
      <Button buttonType="register" type="submit">
        <span>Adicionar</span>
      </Button>
    </StyledForm>
  );
};