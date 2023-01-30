import LogoutIcon from "@mui/icons-material/Logout";
import { Modal } from "../modal/modal";
import { StyledDiv } from "./styles";
import { GrFormAdd } from "react-icons/gr";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { ModalAddGame } from "../modalAddGame/modalAddGame";
import { ModalEditProfile } from "../modalEditProfile/modalEditProfile";
import { RiUserUnfollowLine } from "react-icons/ri";
import { ModalDeleteProfile } from "../modalDeleteProfile/modalDeleteProfile";
import { iModalProfile, iGame } from "./types";
import { useContext, useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import noUser from "../../assets/noProfilePic.svg";
import AddIcon from "@mui/icons-material/Add";

export const ModalProfileUser = ({ user }: iModalProfile) => {
  const [modalDelete, setModalDelete] = useState(false);
  const [modalProfile, setModalProfile] = useState(false);
  const [modalAddGame, setModalAddGame] = useState(false);

  const { logout } = useContext(UserContext);

  return (
    <StyledDiv>
      <div></div>
      <div>
        {user!.url ? (
          <img src={user!.url} alt="" />
        ) : (
          <img src={noUser} alt="" />
        )}
      </div>

      <div>
        <h2>{user!.name}</h2>
        <h4>{user!.socialMedia}</h4>
      </div>

      <section>
        <button
          onClick={() => {
            setModalProfile(!modalProfile);
          }}
        >
          <h2>Editar usuário</h2>
          <MdOutlineArrowForwardIos color="white" size={30} />
        </button>
      </section>

      <div>
        <h3>Jogos Favoritos</h3>
        <button
          title="AddGame"
          onClick={() => {
            setModalAddGame(!modalAddGame);
          }}
        >
          <AddIcon style={{ color: "white" }}>Outlined</AddIcon>
        </button>
      </div>
      <Modal
        state={modalAddGame}
        setState={setModalAddGame}
        title={"Adicionar Jogos"}
      >
        <ModalAddGame setState={setModalAddGame} />
      </Modal>

      {user!.favoriteGames ? (
        <div>
          {user!.favoriteGames.map((game: iGame) => {
            return <img key={game.name} src={game.img} alt={game.name} />;
          })}
        </div>
      ) : (
        <div
          style={{
            display: "none",
          }}
        ></div>
      )}

      <Modal state={modalProfile} setState={setModalProfile} title={"PERFIL"}>
        <ModalEditProfile setState={setModalProfile} />
      </Modal>
      <Modal
        state={modalDelete}
        setState={setModalDelete}
        title={"Excluir conta"}
      >
        <ModalDeleteProfile setState={setModalDelete} />
      </Modal>

      <button onClick={() => setModalDelete(!modalDelete)}>
        <h2>Excluir conta</h2>
        <RiUserUnfollowLine size={30} />
      </button>

      <div onClick={() => logout()}>
        <h2> Logout </h2>
        <LogoutIcon sx={{ fontSize: 30 }} />
      </div>
    </StyledDiv>
  );
};
