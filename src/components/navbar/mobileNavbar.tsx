import logoIcon from "../../assets/aditionalIcons/logo-icon.svg";
import React, { useContext, useState } from "react";
import { tNavButton } from "./types";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { SlideClasses, StyledDiv } from "./styles";
import { ModalProfileUser } from "../ModalUserProfile/modalUserProfile";
import { StyledMobileNavbar } from "./styles";
import { StyledChatIcon, StyledHomeIcon, StyledUserIcon } from "./styledIcons";
import ChatFeed from "../chat/feed/ChatFeed";
import { NavContext } from "../../contexts/NavContext/NavContext";
import { UserCard } from "../card/userCard/UserCard";
import Messages from "../chat/messages/Messages";

export const MobileNavBar = () => {
  const { user } = useContext(UserContext);
  const { nav, setNav, isChat } = useContext(NavContext);

  function handleClick(e: any) {
    if (nav !== e.target.value && e.target.value !== "") {
      setNav(e.target.value);
    } else if (nav === e.target.value || e.target.value === "") {
      setNav(null);
    }
  }

  return (
    <>
      <StyledMobileNavbar
        className={nav ? "slide-up-navbar" : "slide-down-navbar"}
        style={{ height: nav ? "calc(100% - 5rem)" : "5.75rem" }}
      >
        <StyledDiv>
          {nav === null ? (
            <button className="active-button" value="" onClick={handleClick}>
              <StyledHomeIcon>Outlined</StyledHomeIcon>
            </button>
          ) : (
            <button value="" onClick={handleClick}>
              <StyledHomeIcon>Outlined</StyledHomeIcon>
            </button>
          )}
          {nav === "chat" ? (
            <button
              className="active-button"
              value="chat"
              onClick={handleClick}
            >
              <StyledChatIcon>Outlined</StyledChatIcon>
            </button>
          ) : (
            <button value="chat" onClick={handleClick}>
              <StyledChatIcon>Outlined</StyledChatIcon>
            </button>
          )}
          {nav === "users" ? (
            <button
              className="active-button"
              value="users"
              onClick={handleClick}
            >
              <img src={logoIcon} alt="" />
            </button>
          ) : (
            <button value="users" onClick={handleClick}>
              <img src={logoIcon} alt="" />
            </button>
          )}
          {nav === "profile" ? (
            <button
              className="active-button"
              value="profile"
              onClick={handleClick}
            >
              <StyledUserIcon>Outlined</StyledUserIcon>
            </button>
          ) : (
            <button value="profile" onClick={handleClick}>
              <StyledUserIcon>Outlined</StyledUserIcon>
            </button>
          )}
        </StyledDiv>
        {nav === "profile" ? <ModalProfileUser user={user} /> : null}
        {nav === "chat" ? isChat ? <Messages /> : <ChatFeed /> : null}
        {nav === "users" ? <UserCard /> : null}
      </StyledMobileNavbar>
      <SlideClasses />
    </>
  );
};
