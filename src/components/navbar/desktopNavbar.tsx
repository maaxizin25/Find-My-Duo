import logo from "../../assets/logoDesktop.svg";
import logoIcon from "../../assets/aditionalIcons/logo-icon.svg";
import React, { MouseEventHandler, useContext, useState } from "react";
import { NavContext } from "../../contexts/NavContext/NavContext";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { ModalProfileUser } from "../ModalUserProfile/modalUserProfile";
import { StyledDesktopNavbar } from "./styles";
import { StyledChatIcon, StyledHomeIcon, StyledUserIcon } from "./styledIcons";
import AddIcon from '@mui/icons-material/Add';

export const DesktopNavBar = () => {
  const { user } = useContext(UserContext);
  const { nav, setNav } = useContext(NavContext);
  const [showProfileModal, setProfileModal] = useState<boolean>(false);

  function handleClick(e: any) {
    const value = e.target.value;
    if (value === "") {
      setProfileModal(false);
      setNav(null);
    } else if (value === "chat") {
      if (nav === value) {
        setNav(null);
      } else {
        setNav("chat");
        setProfileModal(false);
      }
    } else if (value === "users") {
      if (nav === value) {
        setNav(null);
      } else {
        setNav("users");
        setProfileModal(false);
      }
    } else if (value === "profile") {
      if (nav === value) {
        setNav(null);
        setProfileModal(false);
      } else {
        setNav("profile");
        setProfileModal(true);
      }
    }
  }

  return (
    <>
      <StyledDesktopNavbar>
        <img className="logo" src={logo} alt="" />
        <div>
          {nav === null ? (
            <button className="active-button" value="" onClick={handleClick}>
              <StyledHomeIcon>Outlined</StyledHomeIcon>
              <h3>Home</h3>
            </button>
          ) : (
            <button value="" onClick={handleClick}>
              <StyledHomeIcon>Outlined</StyledHomeIcon>
              <h3>Home</h3>
            </button>
          )}
          {nav === "chat" ? (
            <button
              className="active-button"
              value="chat"
              onClick={handleClick}
            >
              <StyledChatIcon>Outlined</StyledChatIcon>
              <h3>Chat</h3>
            </button>
          ) : (
            <button value="chat" onClick={handleClick}>
              <StyledChatIcon>Outlined</StyledChatIcon>
              <h3>Chat</h3>
            </button>
          )}
          {nav === "users" ? (
            <button
              className="active-button"
              value="users"
              onClick={handleClick}
            >
              <img src={logoIcon} alt="" />
              <h3>Usuários Global</h3>
            </button>
          ) : (
            <button value="users" onClick={handleClick}>
              <img src={logoIcon} alt="" />
              <h3>Usuários Global</h3>
            </button>
          )}
          {nav === "profile" ? (
            <button
              className="active-button"
              value="profile"
              onClick={handleClick}
            >
              <StyledUserIcon>Outlined</StyledUserIcon>
              <h3>Perfil</h3>
            </button>
          ) : (
            <button value="profile" onClick={handleClick}>
              <StyledUserIcon>Outlined</StyledUserIcon>
              <h3>Perfil</h3>
            </button>
          )}
        </div>
      </StyledDesktopNavbar>
      {showProfileModal ? <ModalProfileUser user={user} /> : null}
    </>
  );
};
