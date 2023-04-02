import React, { useEffect, useState } from "react";

import { MessageLeft, MessageRight } from "./Message";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { TextInput } from "./TextInput";
function Chat(props) {
  var data = {
    from: localStorage.getItem("username"),
    to: props.to,
  };
  var headers = {
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    // axios
    //   .post("http://localhost:3001/getmessages", data, headers)
    //   .then((res) => {
    //     setMessages(res.data);
    //   });
  }, []);

  setTimeout(() => {
    // axios
    //   .post("http://localhost:3001/getmessages", data, headers)
    //   .then((res) => {
    //     setMessages(res.data);
    //   });
  }, 50000);
  const currentUser = localStorage.getItem("username");
  return (
    <div
      className="on-on-one-chat"
    //   style={{ display: "block", position: "initial" }}
    >
        <i className="icon-close" onClick={() => props.setShowChat(false)}></i>
      <div className="enter-msg">
        {messages.length > 0 &&
          messages.map((message) => {
            return message.from_user === currentUser ? (
              <MessageRight message={message.msg} />
            ) : (
              <MessageLeft
                displayName={message.from_user}
                message={message.msg}
              />
            );
          })}
        <TextInput from={props.from} to={props.to} />
      </div>
    </div>
  );
}

export default Chat;
