import React, { useContext, useState } from "react";
import { CardUserInfo } from "../userPostCard/styles";
import { StyledUserCard, StyledUserCardContainer } from "./styles";
import { Button } from "../../button/Button";
import noUser from "../../../assets/noProfilePic.svg";
import { iUserCard } from "./types";
import { UserContext } from "../../../contexts/UserContext/UserContext";
import { Modal } from "../../modal/modal";
import ModalViewerProfile from "../../modalViewerUser/modalUserProfile";
import { iUserResponse } from "../../../contexts/UserContext/types";

export const UserCard = () => {
  const { allUsers, setCurrentUser } = useContext(UserContext);
  const [modalUser, setModalUser] = useState(false);

  return (
    <StyledUserCardContainer>
      <h2>Todos os usuários - {allUsers.length}</h2>
      {allUsers.map((element: iUserResponse) => {
        return (
          <StyledUserCard key={element.id}>
            <CardUserInfo>
              <div>
                <figure>
                  {element.url ? (
                    <img src={element.url} alt="" />
                  ) : (
                    <img src={noUser} alt="" />
                  )}
                </figure>
                <div className="card-content">
                  <h2>{element.name}</h2>
                  <section>
                    {element.favoriteGames &&
                      element.favoriteGames.map((e: any) => (
                        <img key={e.name} src={e.img} alt="" />
                      ))}
                  </section>
                </div>
              </div>
              <Button
                type="button"
                buttonType="searchUser"
                onClick={() => {
                  setCurrentUser(element as any);
                  setModalUser(!modalUser);
                }}
              >
                Ver perfil
              </Button>
            </CardUserInfo>
          </StyledUserCard>
        );
      })}
      <Modal setState={setModalUser} state={modalUser} title="Perfil">
        <ModalViewerProfile />
      </Modal>
    </StyledUserCardContainer>
  );
};
