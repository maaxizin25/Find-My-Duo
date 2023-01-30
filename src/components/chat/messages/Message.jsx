import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../../contexts/AuthContext/AuthContext";
import { ChatContext } from "../../../contexts/ChatContext/ChatContext";
import { MessagesStyled } from "./styles";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <MessagesStyled
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div>
        <div>
          <p>{message.text}</p>
        </div>
        <span>
          {new Date(message.date * 1000).toLocaleTimeString().slice(0, -3)}
        </span>
        {message.image && <img src={message.image} alt="" />}
      </div>
    </MessagesStyled>
  );
};

export default Message;
