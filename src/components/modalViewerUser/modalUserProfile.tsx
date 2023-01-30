import { DiscordButton, StyledDiv, StyledLink } from "./styles";
import { iGame } from "./types";

import chat from "../../assets/chat.svg";
import discord from "../../assets/discord.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";
import noUser from "../../assets/noProfilePic.svg";

const ModalViewerProfile = () => {
  const { currentUser: user } = useContext(UserContext);

  return (
    <StyledDiv>
      <div>
        {user.url ? (
          <img id="profile" src={user.url} alt="" />
        ) : (
          <img id="profile" src={noUser} alt="" />
        )}
      </div>
      <h2>{user.name}</h2>

      <h3>Jogos Favoritos</h3>

      <div>
        {user.favoriteGames!.map((game: iGame) => {
          return (
            <img id="game" key={game.name} src={game.img} alt={game.name} />
          );
        })}
      </div>

      <StyledLink to="/*">
        <img src={chat} alt="Chat" />
      </StyledLink>
      <DiscordButton
        onClick={() => {
          navigator.clipboard.writeText(user.socialMedia);
        }}
      >
        <img src={discord} alt="Discord" />
      </DiscordButton>
    </StyledDiv>
  );
};

export default ModalViewerProfile;
