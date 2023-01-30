import React, { useContext, useEffect, useState } from "react";
import { ContainerMessages } from "./styles";
import { ChatContext } from "../../../contexts/ChatContext/ChatContext";
import noPicture from "../../../assets/noProfilePic.svg";
import { doc, onSnapshot } from "@firebase/firestore";
import { db } from "../../../firebase/firebase";
import Message from "./Message";
import Input from "../inputChat/Input";
import { NavContext } from "../../../contexts/NavContext/NavContext";
import { UserContext } from "../../../contexts/UserContext/UserContext";
import { GrReturn } from "react-icons/gr";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

const Messages = () => {
  const [messages, setMessages] = useState([] as any);
  const { setChat } = useContext(NavContext);
  const { data } = useContext(ChatContext);
  const { allUsers } = useContext(UserContext);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unsub();
    };
  }, [data.chatId]);

  const handleClick = () => {
    setChat(false);
  };

  const result = allUsers.find((user) => {
    return user.name === data.user?.displayName;
  });

  return (
    <ContainerMessages>
      <div>
        <div className="userInfo">
          <figure>
            <img src={result?.url || noPicture} alt="" />
          </figure>
          <span>
            <p>{data.user?.displayName}</p>
          </span>
        </div>
        <button title="Exit" onClick={handleClick}>
          <KeyboardReturnIcon fontSize="large" />
        </button>
      </div>

      <div>
        {messages.map((message: { id: React.Key | null | undefined }) => {
          return <Message message={message} key={message.id} />;
        })}
      </div>
      <Input />
    </ContainerMessages>
  );
};

export default Messages;
