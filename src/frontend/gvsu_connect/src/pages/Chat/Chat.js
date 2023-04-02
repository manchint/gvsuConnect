import React, { useEffect, useState } from "react";

import { MessageLeft, MessageRight } from "./Message";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {db} from '../../firebase';
import { addDoc, collection, query, where, serverTimestamp, orderBy, getDocs, doc, updateDoc } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { TextInput } from "./TextInput";
import { getAuth } from "firebase/auth";
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
  const auth = getAuth();
  useEffect(() => {
    const getPosts =  async () => {
      const querySnapshot = await getDocs(collection(db, "messages"));
        let messagesTemp = [];
        let idx = 0;
        let temp = await querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data(), "===", idx);
          //let 
          messagesTemp.push(doc.data());
          idx += 1;
          if(querySnapshot.size - 1 == idx) {setMessages(messagesTemp)}
        });
    };
    getPosts();
  }, []);
  useEffect(() => {
    console.log(messages)
  }, [messages])
  return (
    <div
      className="on-on-one-chat"
    //   style={{ display: "block", position: "initial" }}
    >
        <i className="icon-close" onClick={() => props.setShowChat(false)}></i>
      <div className="enter-msg">
        {messages.length > 0 &&
          messages.map((message) => {
            return message.from === auth.currentUser.displayName ? (
              <MessageRight message={message.msg} />
            ) : (
              <MessageLeft
                displayName={message.from}
                message={message.msg}
              />
            );
          })}
        <TextInput to={props.to} />
      </div>
    </div>
  );
}

export default Chat;
