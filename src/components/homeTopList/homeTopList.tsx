import joystick from "../../assets/joystick.svg";
import { Modal } from "../modal/modal";
import { Button } from "../button/Button";
import { iAllGames } from "../../contexts/GamesContext/types";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { GamesContext } from "../../contexts/GamesContext/GamesContext";
import { ModalNewPost } from "../modalNewPost/modalNewPost";
import { StyledTopHome } from "./styles";
import { useContext, useState } from "react";

export const HomeTopList = () => {
  const { setFilterPosts } = useContext(UserContext);
  const { allGames, gameSelected, setGameSelected } = useContext(GamesContext);

  const [modalDuo, setModalDuo] = useState(false);

  return (
    <>
      <StyledTopHome>
        <h2>Jogos:</h2>
        <ul>
          {allGames.map((element: iAllGames) => {
            return (
              <li
                key={element.name}
                onClick={() => {
                  setGameSelected(element.name);
                  setFilterPosts(element.name);
                }}
              >
                <figure>
                  <img src={element.img} alt="" />
                </figure>
              </li>
            );
          })}
        </ul>
        <div>
          <span>
            <img src={joystick} alt="" />
            <h2>{gameSelected}</h2>
          </span>
          <Button
            onClick={() => setModalDuo(!modalDuo)}
            buttonType="searchUser"
            type="button"
          >
            Procurar DUO
          </Button>
          <Modal setState={setModalDuo} state={modalDuo} title="Procurar Duo">
            <ModalNewPost setState={setModalDuo} />
          </Modal>
        </div>
      </StyledTopHome>
    </>
  );
};
